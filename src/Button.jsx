import React, { Component } from "react";
import Modal from "./Modal";

class Button extends Component {
  handler = (e) => {
    if (e.target.classList.contains("btn-secondary")) {
      e.target.classList.add("btn-success");
      e.target.classList.remove("btn-secondary");
    } else {
      e.target.classList.add("btn-secondary");
      e.target.classList.remove("btn-success");
    }
  };

  clickHandle = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <button
        type="submit"
        className="btn btn-secondary"
        onMouseEnter={this.handler}
        onMouseLeave={this.handler}
        onClick={this.clickHandle}
      >
        ВОЙТИ
      </button>
    );
  }
}

export default Button;
