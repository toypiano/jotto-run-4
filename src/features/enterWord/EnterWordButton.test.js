import React from "react";
import { shallow } from "enzyme";

import EnterWordButton from "./EnterWordButton";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = {
  show: false
};

const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<EnterWordButton {...setupProps} />);
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-enter-word-button"
    );
    expect(component.length).toBe(1);
  });
  test("renders no text when props.show is false", () => {
    const component = findByTestAttr(
      wrapper,
      "component-enter-word-button"
    );
    expect(component.text().length).toBe(0);
  });
  test("render some text when props.show is true", () => {
    const wrapper = setup({ show: true });
    const component = findByTestAttr(
      wrapper,
      "component-enter-word-button"
    );
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = defaultProps;
  const error = checkProps(EnterWordButton, expectedProps);
  expect(error).toBe(undefined);
});
