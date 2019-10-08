import React, { Component } from "react";
import { Table, ProgressBar } from "react-bootstrap";

class BudgetList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Budget Category</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entertainment</td>
            <td>
              <ProgressBar now={60} />
            </td>
          </tr>{" "}
          <tr>
            <td>Food</td>
            <td>
              <ProgressBar now={70} />
            </td>
          </tr>
          <tr>
            <td>Clothing</td>
            <td>
              <ProgressBar now={20} />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default BudgetList;
