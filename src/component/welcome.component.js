import React, { Component } from "react";
import AuthService from "../service/auth.service";

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {

    const { currentUser } = this.state;

    return (

      <div className="container">
        <header className="jumbotron">
          <h1>
            Welcome <strong>{currentUser.username}</strong>
          </h1>
        </header>
      </div>
    );
  }
}