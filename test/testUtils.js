import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import { middlewares } from "../src/app/store";
import rootReducer from "../src/app/rootReducer";

/**
 * Will return error if expectedProps don't match the set propTypes
 * to ensure initial prop types didn't change or give warning if they did.
 * @function checkProps
 * @param {Object} component - React component to check prop types
 * @param {Object} expectedProps - props conforming to the set propTypes
 * @returns {Error}
 */
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
  return propError;
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {Object} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute to match
 * @returns {Object} - Enzyme shallow wrapper around the queried React component.
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/* 
We are testing Guess which is wrapped in Redux.connect() and exported.
In our actual app, <Guess /> will be within <App /> which is wrapped in <Provider />
For our tests, we need to create a fresh store that matches configuration for the actual store and pass it as props for each test. Otherwise, you'll get this error in the console:

Invariant Violation: Could not find "store" in the context of "Connect(Guess)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Guess) in connect options.
*/

/**
 * Create a testing store with imported reducers, middleware, and preloaded state.
 * @function storeFactory
 * @param {Object} preloadedState - preloaded state for store.
 * @returns {Object} - Redux store.
 */
export const storeFactory = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};
