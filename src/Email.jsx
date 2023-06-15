import React, { Component } from "react";

class Email extends Component {
  state = {
    message: "Введено не верное значение",

    check: true
  };
  handler = (e) => {
    if (e.target.value.includes("@") && e.target.value.includes(".az")) {
      // Символ "@"  найден в значении ввода
      e.target.classList.remove("is-invalid");
      this.setState({ check: true });
    } else {
      // Символ "@" не найден в значении ввода
      e.target.classList.add("is-invalid");
      this.setState({ check: false });
    }
  };

  render() {
    return (
      <div class="form-floating mb-3 ">
        <input
          type="email"
          id="floatingInput"
          check={this.state.check}
          placeholder="Электронная почта"
          className="form-control "
          onInput={this.handler}
        />
        <label for="floatingInput">Адрес электронной почты</label>
        <p className="input_message">
          {!this.state.check ? this.state.message : null}
        </p>
      </div>
    );
  }
}

export default Email;
