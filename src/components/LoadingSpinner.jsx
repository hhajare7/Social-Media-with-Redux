import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <h1>
        <div
          style={{ margin: "100px" }}
          className="d-flex justify-content-center"
        >
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default LoadingSpinner;
