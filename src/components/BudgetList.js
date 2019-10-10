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
            var currentBudget = (this.props.categories[index].total /
              this.props.categories[index].budget) * 100;
            var status = "success";
            if(currentBudget > 60){
              status = "warning"
            }
            if(currentBudget > 90){
              status = "danger"
            }
            return (
              <tr>
                <td>{this.props.categories[index].description}</td>
                <td>
                  {this.props.categories[index].total === 0 ? (
                    <ProgressBar />
                  ) : (
                    <ProgressBar
                      variant={status}
                      now={currentBudget}
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
        </tbody>
      </Table>
    );
  }
}

export default BudgetList;
