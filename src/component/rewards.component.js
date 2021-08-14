import React, { Component } from "react";
import CustomerService from "../service/customer.service";


export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerRewards: CustomerService.getRewards()
    }
  }

  componentDidMount(){
    CustomerService.getRewards().then((dataRewards) => {
      this.setState({ customerRewards : dataRewards});
  });
}

  render() {

    const { customerRewards } = this.state;
    return (

      <div className="container">
        <header className="jumbotron">
          <h1>
            Rewards for <strong>{customerRewards?.username ?? "Not loaded yet"}</strong>
          </h1>
        </header>
        
        <strong>Transactions:</strong>
        <ul>  
          {customerRewards && customerRewards.transactions &&
            customerRewards.transactions.map((transaction, key) =>
              <li key={key}><strong>{transaction.creationDate}</strong>, ${transaction.amount}</li>)}
        </ul>
        <p>
        <strong>Rewards: </strong>{customerRewards.rewards} points
        </p>
      </div>
    );
  }
}