import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import AppContainer from "./AppContainer";
import { storeFactory } from "../../test/testUtils";

const setup = preloadedState => {
  const store = storeFactory(preloadedState);
  // In order to shallowWrap App and AppContainer together as a unit
  // This allows us to test Redux store passed from the container
  return shallow(<AppContainer store={store} />)
    .dive()
    .dive();
};

describe("redux props", () => {
  let wrapper;
  const preloadedState = {
    success: true,
    guessedWords: []
  };
  beforeEach(() => {
    wrapper = setup(preloadedState);
  });
  test("has access to 'success' state", () => {
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });
  test("has access to 'fetchSecretWord' action creator'", () => {
    const fetchSecretWordProp = wrapper.instance().props
      .fetchSecretWord;
    expect(fetchSecretWordProp).toBeInstanceOf(Function);
  });
  test("has access to 'guessedWords' state", () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual([]);
  });
});

// To test function calls, we need to wrap unconnected component
test("'fetchSecretWord' runs on App mount", () => {
  const fetchSecretWordMock = jest.fn();
  const props = {
    success: false,
    guessedWords: []
  };
  const wrapper = shallow(
    <App {...props} fetchSecretWord={fetchSecretWordMock} />
  );
  wrapper.instance().componentDidMount();
  const fetchSecretWordCallCount =
    fetchSecretWordMock.mock.calls.length;
  expect(fetchSecretWordCallCount).toBe(1);
});
