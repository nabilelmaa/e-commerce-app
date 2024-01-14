"use client";
import React from "react";
import Login from "../_components/LoginModal";

function Modal() {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal bg-inherit">
        <div className="modal-box bg-red-500">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
        {/* <Login /> */}
      </dialog>
    </div>
  );
}

export default Modal;
