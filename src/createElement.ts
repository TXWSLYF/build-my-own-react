import { DidactElement } from "./Didact";

function createTextElement(text: string): DidactElement {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export const createElement = (
  type: string,
  props: Record<string, any>,
  ...children: DidactElement[]
): DidactElement => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        if (typeof child === "object") return child;

        return createTextElement(child);
      }),
    },
  };
};
