import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Jumbotron, Button, Tabs } from "react-bootstrap";

class AccountList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            accounts: []
        }
        this.changeAccountsFormat = this.changeAccountsFormat.bind(this)
    }

    componentDidMount(){
        this.changeAccountsFormat()
    }

    changeAccountsFormat() {
        var accounts = []
        for(var id in this.props.accounts){
            accounts.push({id: id,
                 description: this.props.accounts[id].description, 
                 account_type: this.props.accounts[id].account_type, 
                 total: this.props.accounts[id].total});
        }
        this.setState({
            accounts
        })
    }



    render() {
        <Tabs> 
            {this.state.accounts.map((account) => {
                return (<Tab title={account.desciption}>
                        <h4>{account.account_type}</h4>
                        <h5>Account total: {account.total}</h5>
                        </Tab>
                    )
            })}
            <Tab title="Add Account">
                <Form>
                    <Form.Group>
                        <Form.Label>Account Name</Form.Label>
                        <Form.Control value={this.state.accountName} type="text" placeholder="Enter Account Name" onChange={this.handleNameChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control value={this.state.accountType} as="select" onChange={this.handleAccountType}>
                            <option value="Debit">Debit</option>
                            <option value="Credit">Credit</option>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" onSubmit={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </Tab>
        </Tabs>
    }
}