import React from 'react';

const Modal = ({ isOpen, close, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
