import React from "react"
import { connect } from "react-redux"
import axios from "axios"

import {fetchCustomers} from "../actions/customerActions"

@connect ((store) => {
	return {
		customers: store.customers.customers
	};
})

export default class Layout extends React.Component{
	constructor(){
		super();
	}

	uploadData(){
		axios.post("http://localhost:8000/api/v1/customer", {
			name: this.refs.name.value,
			description: this.refs.description.value,
			status: this.refs.status.value,
		}).then((res) => {
			console.log(data);
		})
		.catch((err) => {
			console.error(err.toString());
		})
	}

	fetchCustomers() {
	    this.props.dispatch(fetchCustomers())
	}

	render() {
		const {customers} = this.props;
		if (customers.length){
			const mappedCustomers = customers.map(customer => <li key={customer._id}>{customer.name}</li>)
			return <ul> { mappedCustomers } </ul>
		}

		return(
			<div>
				<h2>Customers</h2>
				<button onClick= {this.fetchCustomers.bind(this)}> Fetch </button>

				<form id= "customerform">
					<label>Name: </label>
					<input type = "text" placeholder = "Enter Name" ref = "name" name = "name" /><br/><br/>
					<label>Description: </label>
					<input type = "text" placeholder = "Enter Description" ref="description" name ="description" /><br/><br/>
					<label>Status: </label>
					<input type = "text" placeholder = "Enter Status" ref = "status" name = "status" /><br/><br/>	
				</form>
				<button onClick= {this.uploadData.bind(this)}> Upload </button>
			</div>
		)
	}
}