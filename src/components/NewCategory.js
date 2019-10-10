import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      budget: 0
    };
  }
  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Add Budget Category
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <input
                placeholder="description"
                onChange={event => {
                  this.state.description = event.target.value;
                }}
              ></input>
              <input
                placeholder="amount"
                type="number"
                onChange={event => {
                  this.state.budget = event.target.value;
                }}
              ></input>
              <Button
                variant="outline-primary"
                onClick={() => {
                  let category = {
                    description: this.state.description,
                    budget: this.state.budget
                  };
                  this.props.handleClick(category);
                }}
              >
                +
              </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
