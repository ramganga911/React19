import React, { useState } from "react";
import "../Model.css";

export default function ModelPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Modal Title</h2>
            <p>This is a modal content overlaying the page.</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
