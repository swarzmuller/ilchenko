import React from "react";
import { ModalProps } from "./../interface";

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <>
        <div onClick={this.props.close} className="overlay"></div>
        <div className="modal">
          <h2>Modal </h2>
          <div>{this.props.title}</div>
          <button className="close-modal" onClick={this.props.close}>X</button>
        </div>
      </>
    );
  }
}

export default Modal;