import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Graph from "./components/Graph.js";
import TransactionList from "./components/TransactionList";
import BudgetList from "./components/BudgetList";
import AccountList from "./components/AccountList";
import Newtransaction from "./components/Newtransaction";
import axios from "axios";
import NewCategory from "./components/NewCategory";
import ReactSVG from "react-svg";
import * as d3 from "d3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      accounts: {},
      transactions: []
    };

    this.getAccounts = this.getAccounts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addAccount = this.addAccount.bind(this);
  }

  componentWillMount() {
    Promise.all([
      this.getCategories(),
      this.getAccounts(),
      this.getTransactions()
    ])
      .then(() => console.log("worked"))
      .catch(failed => console.log("failed: ", failed));
  }
  componentDidMount() {
    // Graph(this.state.categories);
  }

  // componentWillUpdate() {
  //   Graph(this.state.categories);
  // }

  getCategories() {
    return axios
      .get("/api/categories")
      .then(data => {
        var obj = {};
        data.data.forEach(cat => {
          obj[cat.id] = {
            description: cat.description,
            total: cat.total,
            budget: cat.budget
          };
        });
        this.setState({
          categories: obj
        });
        d3.selectAll("g > *").remove();
        d3.select("svg").remove();
        Graph(this.state.categories);
      })
      .catch(error => {
        console.log("error in getting categories: ", error);
      });
  }

  getAccounts() {
    return axios
      .get("/api/accounts")
      .then(data => {
        var obj = {};
        data.data.forEach(account => {
          obj[account.id] = {
            description: account.description,
            account_type: account.account_type,
            total: account.total
          };
        });
        this.setState({
          accounts: obj
        });
      })
      .catch(error => {
        console.log("error in getting accounts: ", error);
      });
  }

  getTransactions() {
    return axios
      .get("/api/transactions")
      .then(data => {
        this.setState({
          transactions: data.data
        });
      })
      .catch(error => {
        console.log("error in getting transaction: ", error);
      });
  }

  addCategory(category) {
    if (!category.description || !category.budget) {
      window.alert("Invalid New Category");
    } else {
      axios
        .post("api/categories", category)
        .then(() => {
          Promise.resolve(this.getCategories());
        })
        .catch(error => console.error(error));
    }
  }

  addAccount(info) {
    if (info.account_type === "Select" || info.description === "") {
      window.alert("Please enter an account name and type.");
    } else {
      axios
        .post("/api/accounts", info)
        .then(() => {
          Promise.resolve(this.getAccounts());
        })
        .catch(error => {
          console.log("error in submitting new account: ", error);
        });
    }
  }

  render() {
    return (
      <Container className="justify-content-lg-center">
        <Row className="justify-content-center">
          <h1>Best Budget</h1>
        </Row>
        <Row id="graphrow" className="justify-content-center">
          <ReactSVG id="chart" />
        </Row>
        <Row>
          <Col md={10}>
            <h2>Budget Progress</h2>
          </Col>
          <Col md={2}>
            <h2>Accounts</h2>
          </Col>
        </Row>
        <Row>
          <NewCategory handleClick={this.addCategory} />
        </Row>
        <Row>
          <Col md={8}>
            <BudgetList categories={this.state.categories} />
          </Col>
          <Col md={4}>
            <AccountList
              accounts={this.state.accounts}
              handleClick={this.addAccount}
            />
          </Col>
        </Row>
        <Row>
          <h2>Transactions</h2>
        </Row>
        <Row>
          <Newtransaction
            categories={this.state.categories}
            accounts={this.state.accounts}
            updateTransactions={this.getTransactions}
            updateAccounts={this.getAccounts}
            updateCategories={this.getCategories}
          />
        </Row>
        <Row>
          <TransactionList
            transactions={this.state.transactions}
            categories={this.state.categories}
            accounts={this.state.accounts}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
