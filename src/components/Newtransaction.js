import React from "react";
import axios from "axios"

class Newtransation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            account: null,
            cat: null,
            des: '',
            amount: null
        }

        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCatChange(e) {
        this.setState({
            cat: e.target.value
        })

    }

    handleAccountChange(e) {
        this.setState({
            account: e.target.value
        })
    }

    handleDesChange(e) {
        this.setState({
            des: e.target.value
        })
    }

    handleAmountChange(e) {
        this.setState({
            amount: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var info = {
            description: this.state.des,
            amount: this.state.amount,
            category_id: this.state.cat,
            account_id: this.state.account
        }
        axios.post('/api/transaction', info)
        .then(() => {
            this.setState({
                des: '',
                amount: null,
                cat: null,
                account: null
            })
        })
        .catch((err) => {
            console.log("error in post in handleSubmit of Newtransation: ", err)
        })
    }


    render() {
        return (
            <tr>
                <form onSubmit={this.handleSubmit}>

                    <td><input type="text" placeholder="Description" onChange={this.handleDesChange}/></td>
                    <td><input type="number" placeholder="Amount" onChange={this.handleAmountChange}/></td>
                    <td>
                        <select placeholder="Category" onChange={this.handleCatChange}>
                            {this.props.categories.map((cat) => {
                                return (
                                    <option value={cat.id}>{cat.description}</option>
                                )
                            })}
                        </select>
                    </td>
                    <td>
                        <select placeholder="Account" onChange={this.handleAccountChange}>
                            {this.props.accounts.map((account) => {
                                return (
                                    <option value={account.id}>{account.description}</option>
                                )
                            })}
                        </select>
                    </td>
                    <td>
                        <button onClick={this.handleSubmit}>Add Transaction</button>
                    </td>
                </form>
            </tr>
        )
    }

}

module.exports = Newtransation;