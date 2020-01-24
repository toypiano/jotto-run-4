import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import Congrats from "./Congrats";

const requiredProps = {
  success: false
};

const setup = (props = {}) => {
  const setupProps = { ...requiredProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe("render", () => {
  test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });
  test("renders no text when 'success' prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text().length).toBe(0);
  });
  test("renders non-empty congrats message when success prop is true", () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text().length).toBeGreaterThan(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  const error = checkProps(Congrats, expectedProps);
  expect(error).toBe(undefined);
});
