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
      class="modal fade"
      id={props.id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id={`${props.id}Label`}>
              {props.title}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{props.body}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={props.action}
              type="button"
              class="btn btn-primary"
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
