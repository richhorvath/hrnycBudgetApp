import React from "react";
import axios from "axios"


class Newtransation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            des: '',
            amount: '',
            account:'',
            cat:'',
            categories: [],
            accounts: [],
        }

        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.structureAccounts = this.structureAccounts.bind(this);
        this.structureCats = this.structureCats.bind(this);
    }


    componentWillReceiveProps() {
        this.setState({
            categories: this.structureCats(),
            accounts: this.structureAccounts()
        })
    }

    structureCats() {
        var catArray = [];
        for(var id in this.props.categories){
            catArray.push({label: this.props.categories[id].description, value: id})
        }
        console.log('cats: ', catArray)
        return catArray
    }

    structureAccounts() {
        var accountArray = [];
        for(var id in this.props.accounts){
            accountArray.push({label: this.props.accounts[id].description, value: id})
        }
        console.log('accounts: ', accountArray)
        return accountArray
    }

    handleCatChange(e) {
        console.log('cat: ', e.target.value)
        this.setState({
            cat: e.target.value
        })

    }

    handleAccountChange(e) {
        console.log('acc: ', e.target.value)
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
        e.preventDefault()
        var info = {
            description: this.state.des,
            amount: this.state.amount
        }
        if(this.state.cat){
            info.category_id = this.state.cat
        }
        if(this.state.account){
            info.account_id = this.state.account
        }
        console.log("info: ", info)
        axios.post('/api/transactions', info)
        .then(() => {
            this.setState({
                des: '',
                amount: '',
            })
            Promise.resolve(this.props.updateTransactions())
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
                    <input style={{width: '500px', margin:"0px 5px 0px 5px"}} type="text" placeholder="Description" onChange={this.handleDesChange} value={this.state.des}/>
                    <input style={{width: '100px', margin:"0px 5px 0px 5px"}} type="number" placeholder="Amount" onChange={this.handleAmountChange} value={this.state.amount}/>
                    <select onChange={this.handleCatChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}} value={this.state.cat}>
                        <option selected>Category</option>
                        {this.state.categories.map((cat) => {
                           return <option value={cat.value}>{cat.label}</option>
                        })}
                    </select>
                    <select value={this.state.account} onChange={this.handleAccountChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}}>
                        <option selected>Account</option>
                        {this.state.accounts.map((account) => {
                            return <option value={account.value}>{account.label}</option>
                        })}
                    </select>
                    <button onClick={this.handleSubmit} style={{margin:"0px 5px 0px 5px"}}>Add</button>
                </form>
                
            </div>
        )
    }

}

export default Newtransation;