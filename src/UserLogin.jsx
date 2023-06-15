import React, { Component } from "react";
import Password from "./Password";
import Email from "./Email";
import Button from "./Button";

class UserLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-3 offset-md-5 ">
          <div className="row">
            <form className="card">
              <Email />
              <Password />
              <Button />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLogin;
