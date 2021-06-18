import { createElement } from "./createElement";
import { render } from "./render";

export type DidactElement = {
  type: string;
  props: {
    children: DidactElement[];
    [key: string]: any;
  };
};

const Didact = {
  createElement,
  render,
};

export default Didact;
