import React from "react";

/**
 * This component is conditionally rendered in App level
 * because it replaces other components in there.
 */
const ServerError = props => {
  return (
    <>
      <div
        data-test="component-server-error"
        className="alert alert-secondary"
      >
        We cannot retrieve a secret word from the server. Please try
        again later.
      </div>
      {props.errorMessage && (
        <div className="card">{props.errorMessage}</div>
      )}
    </>
  );
};

export default ServerError;
