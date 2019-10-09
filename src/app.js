import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Graph from "./components/Graph.js";
import TransactionList from "./components/TransactionList";
import BudgetList from "./components/BudgetList";
import Newtransaction from "/components/Newtransaction";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [],
      accounts: [],
      transactions: [] 
    }

    this.getAccounts = this.getAccounts.bind(this);
    this.getCategories = this.getCategories.bind(this)
    this.getTransactions = this.getTransactions.bind(this)

  }

  componentDidMount() {
    this.getCategories();
    this.getAccounts();
    this.getTransactions();
  }

  getCategories() {
    axios.get('/api/categories')
    .then((data) => {
      this.setState({
        categories: data.data
      })
    })
    .catch((error) => {
      console.log('error in getting categories: ', error);
    })
  }

  getAccounts() {
    axios.get('/api/accounts')
    .then((data) => {
      this.setState({
        accounts: data.data
      })
    })
    .catch((error) => {
      console.log('error in getting accounts: ', error)
    })
  }

  getTransactions() {
    axios.get('/api/transactions')
    .then((data) => {
      this.setState({
        transactions: data.data
      })
    })
    .catch((error) => {
      console.log("error in getting transaction: ", error)
    })
  }

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
          <Newtransaction categories={this.state.categories} accounts={this.state.accounts}/>
        </Row>
        <Row>
          <TransactionList transactions={this.state.transactions}/>
        </Row>
      </Container>
    );
  }
}

export default App;
