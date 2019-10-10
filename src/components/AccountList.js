import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab, Form } from "react-bootstrap";
import Axios from "axios";

class AccountList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: [], 
            accountName: '',
            accountType: '',
        };

        this.changeAccountsFormat = this.changeAccountsFormat.bind(this)
    }

    componentDidMount(){
        this.setState({
            accounts: this.changeAccountsFormat()
        })
    }

    componentWillReceiveProps() {
        var newAccounts = this.changeAccountsFormat()
        console.log("newAccounts: ", newAccounts)
        this.setState({
            accounts: newAccounts
        },
        () => console.log('account state: ', this.state.accounts)
        )
    }

    changeAccountsFormat() {
        var accountsArray = []
        for(var id in this.props.accounts){
            accountsArray.push({id: id,
                 description: this.props.accounts[id].description, 
                 account_type: this.props.accounts[id].account_type, 
                 total: this.props.accounts[id].total});
        }
        console.log("accounts: ", accountsArray)
        return accountsArray
    }


    handleAccountType(e) {
        this.setState({
            accountType: e.target.value
        })
    } 

    handleAccountName(e) {
        this.setState({
            accountName: e.target.value
        })
    }

    handleSubmit() {
        Axios.post('/api/accounts', {description: this.state.accountName, account_type: this.state.accountType})
        .then(() => {
            conole
        })
    }

    render() {
        if(this.state.account){
        return (
        <Tabs id="accounts"> 
            {this.state.accounts && this.state.accounts.map((account) => {
                return (
                        <Tab title={account.description}>
                            {/* <h4>{account.account_type}</h4>
                            <h5>Account total: {account.total}</h5> */}
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
        )
        }
    }
}


export default AccountList