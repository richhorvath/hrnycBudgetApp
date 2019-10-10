import React, { Component } from "react";
import { Table, ProgressBar, Card } from "react-bootstrap";

class BudgetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: [],
      total: 0
    };
  }

  render() {
    const arr = [];
    for (let category in this.props.categories) {
      arr.push(category);
    }

    console.log(this.props.categories);

    return (
      <Table>
        <thead>
          <tr>
            <th>Budget Category</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {arr.map(index => {
            return (
              <tr>
                <td>{this.props.categories[index].description}</td>
                <td>
                  {this.props.categories[index].total === 0 ? (
                    <ProgressBar />
                  ) : (
                    <ProgressBar
                      now={
                        (this.props.categories[index].total /
                          this.props.categories[index].budget) *
                        100
                      }
                      label={
                        this.props.categories[index].total +
                        "/" +
                        this.props.categories[index].budget
                      }
                    />
                  )}
                </td>
              </tr>
            );
          })}
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
