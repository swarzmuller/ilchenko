import React from "react";
import Modal from "../Modal";
import { UsersProps } from "./../interface";

import "./../style.css";

class UsersItem extends React.Component<UsersProps> {
  state = {
    modal: false
  }

  handlerClick = (e:any) => {
    console.log(this.props.title);
    this.setState({ modal: !this.state.modal});    
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
        <div>
          <button onClick={this.handlerClick}>Remove</button>
          <button onClick={this.handlerClick}>Change</button>
          {this.state.modal ? <Modal close={this.handleClose} title={title}/> : null}
        </div>
      </li>
    );
  }
}

export default UsersItem;
