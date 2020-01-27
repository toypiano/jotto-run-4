import React from "react";
import { shallow } from "enzyme";
import ShowSecretWord from "./ShowSecretWord";

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
  test("renders without error", () => {});
  test("renders no text when props.show is false", () => {});
  test("renders text including secretWord from state", () => {});
});

test("does not throw warning with expected props", () => {});
