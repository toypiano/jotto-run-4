import React from "react";
import { shallow } from "enzyme";
import ShowSecretWord from "./ShowSecretWord";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

const defaultProps = { show: false };

/**
 * Factory function to create a ShallowWrapper for the ShowSecretWord component
 * @param {Object} props - Props specific to this setup.
 * @returns {Object} - Enzyme ShallowWrapper
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ShowSecretWord {...setupProps} />);
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without error", () => {
    const component = findByTestAttr(
      wrapper,
      "component-show-secret-word"
    );
    expect(component).toBe(1);
  });
  test("renders no text when props.show is false", () => {
    const component = findByTestAttr(
      wrapper,
      "component-show-secret-word"
    );
    expect(component.text().length).toBe(0);
  });
  test("renders text including secretWord from state", () => {
    const wrapper = setup({ show: true, secretWord: "piano" });
    const component = findByTestAttr(
      wrapper,
      "component-show-secret-word"
    );
    expect(component.text()).toContain("piano");
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { show: true };
  const error = checkProps(ShowSecretWord, expectedProps);
  expect(error).toBe(undefined);
});
