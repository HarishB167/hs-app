import React from "react";

/* Bootstrap Modal */
/*
  Props needed :
  Modal title
  Primary button type : warning, danger, primary
  Primary button action : onPrimaryAction

*/

function Modal(props) {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${props.id}Label`}>
              {props.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={props.action}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              {props.actionMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
