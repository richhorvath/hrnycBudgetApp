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
      {props.transactions.map((transaction) => {
        if(!transaction.category_id){
          var cat = "none"
        } else {
          var cat = props.categories[transaction.category_id].description
        }
        if(!transaction.account_id){
          var account = "none"
        } else {
          var account = props.accounts[transaction.account_id].description
        }
        var date = transaction.date.split("T")[0];
        return (
        <tr>
          <td>{transaction.id}</td>
          <td>{date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.amount}</td>
          <td>{cat}</td>
          <td>{account}</td>
        </tr>
        )
        })
      }
      </tbody>
    </Table>
  );
};

export default TransactionList;
