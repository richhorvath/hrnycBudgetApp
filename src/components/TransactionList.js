import React from "react";
import { Table } from "react-bootstrap";

const TransactionList = props => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>
      {this.props.map((transaction) => {
        return (
        <tr>
          <td>{transaction.id}</td>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
          <td>{this.props.categories[transaction.category_id]}</td>
          <td>{this.props.accounts[transaction.account_id]}</td>
        </tr>
        )
        })
      }
      </tbody>
    </Table>
  );
};

export default TransactionList;
