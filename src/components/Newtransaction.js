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
        this.handleAmountChange = this.handleAmountChange.bind(this);
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
        console.log("des change: ", e.target.value)
        this.setState({
            des: e.target.value
        })
    }

    handleAmountChange(e) {
        console.log('amount change: ', e.target.value);
        this.setState({
            amount: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var info = {
            description: this.state.des,
            amount: this.state.amount
        }
        if(this.cat){
            info.category_id = this.cat
        }
        if(this.account){
            info.account_id = this.account
        }
        console.log('info: ', info);
        axios.post('/api/transactions', info)
        .then(() => {
            this.setState({
                des: '',
                amount: null,
                cat: null,
                account: null
            })
            this.props.updateTransactions()
        })
        .catch((err) => {
            console.log("error in post in handleSubmit of Newtransation: ", err)
        })
    }


    render() {
        return (
            <div style={{padding: '10px', position: 'center'}}>
                
                    <div>Add a New Transaction:</div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{width: '500px', margin:"0px 5px 0px 5px"}} type="text" placeholder="Description" onChange={this.handleDesChange}/>
                    <input style={{width: '100px', margin:"0px 5px 0px 5px"}} type="number" placeholder="Amount" onChange={this.handleAmountChange}/>
                    <select value={'Category'} onChange={this.handleCatChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}}>
                            {this.props.categories.map((cat) => {
                                return (
                                    <option value={cat.id}>{cat.description}</option>
                                )
                            })}
                        </select>
                        <select value={"Account"} onChange={this.handleAccountChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}}>
                            {this.props.accounts.map((account) => {
                                return (
                                    <option value={account.id}>{account.description}</option>
                                )
                            })}
                        </select>
                        <button onClick={this.handleSubmit} style={{margin:"0px 5px 0px 5px"}}>Add</button>
                </form>
                
            </div>
        )
    }

}

export default Newtransation;