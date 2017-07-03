import React from "react"
import { connect } from "react-redux"
import axios from "axios"

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

	render() {
		//const {customers} = this.props;

		return(
			<div>
				<h2>Customers</h2>
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