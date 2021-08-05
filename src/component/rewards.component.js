import React, { Component } from "react";
import AuthService from "../service/auth.service";

export default class Rewards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {

    const { currentUser } = this.state;
    console.log(currentUser);
    return (

      <div className="container">
        <header className="jumbotron">
          <h1>
            Rewards for <strong>{currentUser.username}</strong>
          </h1>
        </header>
        
        <strong>Transactions:</strong>
        <ul>  
          {currentUser.transactions &&
            currentUser.transactions.map((transaction, key) => 
              <li key={key}><strong>{transaction.creationDate}</strong>, ${transaction.amount}</li>)}
        </ul>
        <p>
        <strong>Rewards: </strong>{currentUser.rewards} points
        </p>
      </div>
    );
  }
}