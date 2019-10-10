import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Tabs, Tab, Form, TabContent } from "react-bootstrap";
import Axios from "axios";

class AccountList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accountName: '',
            accountType: 'Debit',
        };

       
        this.handleAccountType = this.handleAccountType.bind(this)
        this.handleAccountName = this.handleAccountName.bind(this)
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

    

    render() {
        var accountsArray = []
        for(var id in this.props.accounts){
            accountsArray.push({id: id,
                 description: this.props.accounts[id].description, 
                 account_type: this.props.accounts[id].account_type, 
                 total: this.props.accounts[id].total});
        }
        return (
        <Tabs id="accounts"> 
            {accountsArray.map((account) => {
                return (
                        <Tab eventKey={account.id} title={account.description}>
                            <h4 style={{ margin:"10px"}}>
                            {account.account_type}
                            </h4>                            
                            <h5 style={{ margin:"10px"}}>Account total: ${account.total}</h5>
                        </Tab>
                    )
            })}
            <Tab eventKey='form' title="Add Account">
                <Form>
                    <Form.Group>
                        <Form.Label style={{margin:"2px 0px 2px 0px"}}>Account Name</Form.Label>
                        <Form.Control value={this.state.accountName} type="text" placeholder="Enter Account Name" onChange={this.handleAccountName}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label style={{margin:"2px 0px 2px 0px"}}>Account Type</Form.Label>
                        <Form.Control value={this.state.accountType} as="select" onChange={this.handleAccountType}>
                            <option value="Debit">Debit</option>
                            <option value="Credit">Credit</option>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={() => this.props.handleClick({description: this.state.accountName, account_type: this.state.accountType})}>
                        Submit
                    </Button>
                </Form>
            </Tab>
        </Tabs>
        )
    }
}


export default AccountList