import { DidactElement } from "./Didact";

export const render = (element: DidactElement, root: HTMLElement | Text) => {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter((key) => key !== "children")
    .forEach((propKey) => {
        // @ts-ignore
        dom[propKey] = element.props[propKey]
    });

  element.props.children.forEach((child) => {
    render(child, dom);
  });

  root.appendChild(dom);
};
