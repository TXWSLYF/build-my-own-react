import { createElement } from "./createElement";
import { render, useState } from "./render";

export type DidactElement = {
  type: string;
  props: {
    children: DidactElement[];
    [key: string]: any;
  };
};

export type IFiber = {
  type?: string | Function;
  dom?: HTMLElement | Text | null;
  props: {
    children: DidactElement[];
    [key: string]: any;
  };
  parent?: IFiber;
  sibling?: IFiber;
  child?: IFiber;
  alternate?: IFiber;
  effectTag?: "UPDATE" | "PLACEMENT" | "DELETION";
  hooks?: any[];
};

const Didact = {
  createElement,
  render,
  useState,
};

export default Didact;
