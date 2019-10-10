import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      budget: ""
    };
  }
  render() {
    return (
      <Accordion style={{margin: "5px 0px 20px 0px"}}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Add Budget Category
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <input
                placeholder="description"
                value={this.state.description}
                onChange={event => {
                  this.setState({
                    description: event.target.value
                  }) 
                }}
              ></input>
              <input
                placeholder="amount"
                type="number"
                value={this.state.budget}
                onChange={event => {
                  this.setState({
                    budget: event.target.value
                  })
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
                  this.setState({
                    description: "",
                    budget: ""
                  })
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
