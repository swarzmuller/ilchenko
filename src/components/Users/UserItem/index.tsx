import React from "react";
import Modal from "../Modal";
import { UsersProps } from "./../interface";

import "./../style.css";

class UsersItem extends React.Component<UsersProps> {
  state = {
    modal: false,
    isRemove: false,
    isRemovePost: false,
    isChangeTitle: this.props.title
  };

  handlerRemove = () => {
    this.setState({ modal: !this.state.modal, isRemove: true });
  };

  handlerChange = () => {
    this.setState({ modal: !this.state.modal, isRemove: false });
  };

  handleClose = () => {
    this.setState({ modal: false });
  };

  handleRemoveItem = () => {
    this.setState({ isRemovePost: true });
  };


  handleChangeTitle = (event?: any) => {
    this.setState({ isChangeTitle: event.target.value});
  };

  componentDidUpdate() {
    console.log("componentDidUpdate"); 
  }


  render() {
    const { id, title } = this.props;
    return (
      <>
        {!this.state.isRemovePost && (
          <li className="user__list-item">
            <span className="user__list-id">{id}</span>
            <p className="user__list-title">{this.state.isChangeTitle}</p>
            <button onClick={this.handlerRemove}>Remove</button>
            <button onClick={this.handlerChange}>Change</button>
            {this.state.modal ? (
             <Modal 
              close={this.handleClose} 
              title={title} 
              currentModal={this.state.isRemove} 
              removeItem={this.handleRemoveItem}
              changeTitle={this.handleChangeTitle}
              />
            ) : null}
          </li>
        )}
      </>
    );
  }
}

export default UsersItem;
