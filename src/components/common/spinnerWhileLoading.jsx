import React from "react";

function SpinnerWhileLoading(props) {
  const spinnerType = props.spinnerType
    ? props.spinnerType
    : "border text-secondary";
  return (
    <React.Fragment>
      {props.showSpinnerWhen && (
        <div className={props.className}>
          <div className={`spinner-${spinnerType}`} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!props.showSpinnerWhen && props.children}
    </React.Fragment>
  );
}

export default SpinnerWhileLoading;
