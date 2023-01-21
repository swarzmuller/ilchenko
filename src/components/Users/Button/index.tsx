import React from "react";
import { ButtonProps } from "./../interface";

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <>
        <button onClick={this.props.clickButton} >{this.props.text}</button>    
        {this.props.children}
      </>
    );
  }
}

export default Button;
