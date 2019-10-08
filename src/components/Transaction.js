import React from "react";

const Transaction = props => {
  return (
    <tr>
      <td>#</td>
      <td>Date</td>
      <td>Description</td>
      <td>Amount</td>
      <td>Category</td>
      <td>Account</td>
    </tr>
  );
};

export default Transaction;
