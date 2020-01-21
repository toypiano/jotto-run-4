import checkPropTypes from "check-prop-types";

/**
 * Will throw error if expectedProps don't match the set propTypes
 * to ensure initial prop types didn't change or give warning if they did.
 * @function checkProps
 * @param {React.Component} component - React component to check prop types
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
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute to match
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
