import React from "react"
import { connect } from "react-redux"
import axios from "axios"

export default class Layout extends React.Component{

	constructor(){
		super();
	}

	render() {
		//const {customers} = this.props;

		return(
			<div>
				<h2>Customers</h2>
				<form id= "customerform">
					<label>Name: </label>
					<input type = "text" placeholder = "Enter Name" id = "name" name = "name" /><br/><br/>
					<label>Description: </label>
					<input type = "text" placeholder = "Enter Description" id="description" name ="description" /><br/>
					<br/>
				</form>
			</div>
		)
	}
}