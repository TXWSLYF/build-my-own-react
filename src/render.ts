import { DidactElement, IFiber } from "./Didact";

let nextFiber: IFiber = null;
let rootFiber: IFiber = null;

function createDom(fiber: IFiber) {
  // 根据 fiber 类型创建对应 dom 节点
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  // 添加属性
  Object.keys(fiber.props)
    .filter((key) => key !== "children")
    .forEach((propKey) => {
      dom[propKey] = fiber.props[propKey];
    });

  return dom;
}

// 启动
export const render = (element: DidactElement, root: HTMLElement) => {
  rootFiber = {
    dom: root,
    props: {
      children: [element],
    },
  } as IFiber;

  nextFiber = rootFiber;
};

function workLoop(deadline) {
  let shouldYield = false;

  while (nextFiber && !shouldYield) {
    nextFiber = performUnitOfWork(nextFiber);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextFiber && rootFiber) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function commitRoot() {
  commitWork(rootFiber.child);
  rootFiber = null;
}

function commitWork(fiber: IFiber) {
  if (!fiber) return;

  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function performUnitOfWork(fiber: IFiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling: IFiber = null;

  while (index < elements.length) {
    const element = elements[index];

    const newFiber: IFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }

  if (fiber.child) return fiber.child;

  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }

    nextFiber = nextFiber.parent;
  }
}
