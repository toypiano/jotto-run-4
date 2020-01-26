import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../test/testUtils";
import NewWord from "./NewWord";

const defaultProps = {
  show: true
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWord {...setupProps} />);
};
describe("render", () => {
  let wrapper, component;
  beforeEach(() => {
    wrapper = setup();
    component = findByTestAttr(wrapper, "component-new-word");
  });

  test("renders without error", () => {
    expect(component.length).toBe(1);
  });
  test("renders non-empty text when 'show' prop is true", () => {
    expect(component.text().length).toBeGreaterThan(0);
  });
  test("renders no text when 'show' prop is false", () => {
    wrapper = setup({ show: false });
    component = findByTestAttr(wrapper, "component-new-word");
    expect(component.text().length).toBe(0);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { display: false, getNewWord: () => {} };
  const error = checkProps(NewWord, expectedProps);
  expect(error).toBe(undefined);
});

test("calls 'getNewWord' prop upon button click", () => {
  const getNewWordMock = jest.fn();
  const wrapper = setup({
    show: true,
    getNewWord: getNewWordMock
  });
  const newWordButton = findByTestAttr(wrapper, "new-word-button");
  newWordButton.simulate("click");
  expect(getNewWordMock.mock.calls.length).toBe(1);
});
