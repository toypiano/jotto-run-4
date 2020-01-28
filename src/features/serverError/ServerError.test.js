import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import ServerError from "./ServerError";

const setup = () => {
  return shallow(<ServerError />);
};

describe("render", () => {
  let wrapper, component;
  beforeEach(() => {
    wrapper = setup();
    component = findByTestAttr(wrapper, "component-server-error");
  });
  test("renders without error", () => {
    expect(component.length).toBe(1);
  });
  test("renders non-empty error text", () => {
    expect(component.text().length).toBeGreaterThan(0);
  });
});
