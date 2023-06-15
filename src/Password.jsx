import React, { Component } from "react";

class Password extends Component {
  state = {
    message: "Пароль должен содержать больше 8 символов",
    check: true
  };
  handler = (e) => {
    if (e.target.value.length <= 8) {
      this.setState({ check: false });
      e.target.classList.add("is-invalid");
    } else if (e.target.value.length > 9) {
      e.target.classList.remove("is-invalid");
      this.setState({ check: true });
    }
  };
  render() {
    return (
      <div class="form-floating">
        <input
          type="password"
          id="floatingPassword"
          placeholder="Пароль"
          className="form-control"
          onInput={this.handler}
        />
        <label for="floatingPassword">Пароль</label>
        <p className="input_message">
          {!this.state.check ? this.state.message : null}
        </p>
      </div>
    );
  }
}

export default Password;
