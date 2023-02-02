import React from "react";
import { ModalProps } from "./../interface";

class Modal extends React.Component<ModalProps> {
  render() {
    const { removeModal, currentID, changeElement, removeElement, closeModal } = this.props;
    return (
      <>
        <div onClick={closeModal} className="overlay"></div>
        <div className="modal">
          <h2>Modal</h2>
          <button  onClick={closeModal} className="close-modal">X</button>
          {removeModal ? (
            <button onClick={() => removeElement(currentID)} className="btn removeOnModal">Remove this title</button>
          ) : (
            <input className="input" onChange={(event) => changeElement(currentID, event.target.value)} type="text" />
          )}
        </div>
      </>
    );
  }
}

export default Modal;
