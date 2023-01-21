import React from "react";
import Modal from "../Modal";
import Button from "../Button";
import { UsersProps } from "./../interface";

import "./../style.css";

class UsersItem extends React.Component<UsersProps> {
  state = {
    modal: false,
    isRemove: false
  }

  handlerRemove = (e: any) => {
    console.log(this.props.title);
    this.setState({ modal: !this.state.modal, isRemove: true});    
  };

  handlerChange = (e: any) => {
    console.log(this.props.title);
    this.setState({ modal: !this.state.modal, isRemove: false});    
  };

  handleClose = () => {
    this.setState({ modal: false});
  }

  render() {
    const { id, title } = this.props;
    return (
      <li className="user__list-item" >
        <span className="user__list-id">{id}</span>
        <p className="user__list-title">{title}</p>
        <button onClick={this.handlerRemove}>Remove</button>
        <button onClick={this.handlerChange}>Change</button>
        {this.state.modal ? <Modal close={this.handleClose} title={title} text={this.state.isRemove}/> : null}
      </li>
    );
  }
}

export default UsersItem;
