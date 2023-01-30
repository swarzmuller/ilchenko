import React from "react";
import { ModalProps } from "./../interface";

class Modal extends React.Component<ModalProps> {
  componentWillUnmount() {
    console.log("componentWillUnmount"); 
  }
  render() {
    return (
      <>
        <div onClick={this.props.close} className="overlay"></div>
        <div className="modal">
          <h2>Modal </h2>
          <button className="close-modal" onClick={this.props.close}>X</button>
          {this.props.currentModal ? (
            <>
              <button onClick={this.props.removeItem}>Remove thistitle</button>
              <div>{this.props.title}</div>
            </>
          ) : 
          <>
            <input type="text" onChange={this.props.changeTitle}/>
          </>}
        </div>
      </>
    );
  }
}

export default Modal;
