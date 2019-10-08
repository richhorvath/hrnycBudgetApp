import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Graph from "./components/Graph.js";
import TransactionList from "./components/TransactionList";
import BudgetList from "./components/BudgetList";

class App extends React.Component {
  render() {
    return (
      <Container className="justify-content-lg-center">
        <Row className="justify-content-center">
          <h1>Best Budget</h1>
          <Col md={12}>
            <Graph />
          </Col>
        </Row>
        <Row>
          <h2>Budget Progress</h2>
        </Row>
        <Row>
          <Col>
            <BudgetList />
          </Col>
        </Row>
        <Row>
          <h2>Transactions</h2>
        </Row>
        <Row>
          <Col lg={10}>
            <TransactionList />
          </Col>
          <Col lg={2}>category list</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
