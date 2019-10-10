import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default class NewCategory extends Component {
  constructor(props) {
    super(props);
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
              <input defaultValue="Description"></input>
              <input defaultValue="Amount"></input>
              <Button variant="outline-primary">+</Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
