import React from "react";
import axios from "axios"


class Newtransation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date:'',
            des: '',
            amount: '',
            account:'',
            cat:''
        }

        this.handleAccountChange = this.handleAccountChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handleCatChange = this.handleCatChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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
        e.preventDefault()
        var info = {
            date: this.state.date,
            description: this.state.des,
            amount: this.state.amount
        }
        if(this.state.cat){
            info.category_id = this.state.cat
        }
        if(this.state.account){
            info.account_id = this.state.account
        }
        axios.post('/api/transactions', info)
        .then(() => {
            this.setState({
                date: '',
                des: '',
                amount: '',
                account: '',
                cat: ''
            })
            Promise.resolve(this.props.updateTransactions())
            Promise.resolve(this.props.updateAccounts())
            Promise.resolve(this.props.updateCategories())
        })
        .catch((err) => {
            console.log("error in post in handleSubmit of Newtransation: ", err)
        })
        
    }

    handleDateChange(e) {
        console.log('date: ', e.target.value)
        this.setState({
            date: e.target.value
        })
    }



    render() {
        var catArray = [];
        for(var id in this.props.categories){
            catArray.push({label: this.props.categories[id].description, value: id})
        }
        var accountArray = [];
        for(var id in this.props.accounts){
            accountArray.push({label: this.props.accounts[id].description, value: id})
        }
        return (
            <div style={{padding: '10px', position: 'center'}}>
                    <div>Add a New Transaction:</div>
                <form onSubmit={this.handleSubmit} id="transaction-submit">
                    <input style={{width: '150px', margin:"0px 5px 0px 5px"}} type="date"  onChange={this.handleDateChange} value={this.state.date}/>
                    <input style={{width: '450px', margin:"0px 5px 0px 5px"}} type="text" placeholder="Description" onChange={this.handleDesChange} value={this.state.des}/>
                    <input style={{width: '80px', margin:"0px 5px 0px 5px"}} type="number" placeholder="Amount" onChange={this.handleAmountChange} value={this.state.amount}/>
                    <select onChange={this.handleCatChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}} value={this.state.cat}>
                        <option selected>Category</option>
                        {catArray.map((cat) => {
                           return <option value={cat.value}>{cat.label}</option>
                        })}
                    </select>
                    <select value={this.state.account} onChange={this.handleAccountChange} style={{height: '30px', width: '150px', margin:"0px 5px 0px 5px"}}>
                        <option selected>Account</option>
                        {accountArray.map((account) => {
                            return <option value={account.value}>{account.label}</option>
                        })}
                    </select>
                    <button onSubmit={this.handleSubmit} style={{margin:"0px 5px 0px 5px"}}>Add</button>
                </form>
            </div>
        )
    }

}

export default Newtransation;