import React from "react";
import { Table } from "react-bootstrap";

const TransactionList = props => {

  console.log('transaction prop: ', props.transactions)

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
        console.log('transactions: ', transaction);
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
        return (
        <tr>
          <td>{transaction.id}</td>
          <td>{transaction.date}</td>
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
