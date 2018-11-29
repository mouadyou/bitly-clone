import React, { Component } from 'react'
import Form from '../components/form'
import './login-register-view.css'

export default class RegisterView extends Component {
	render() {
		const inputs = [
			{ name: "name", label: "Full name" },
			{ name: "email", label: "E-mail", type:"email" },
			{ name: "password", label: "Password", type: "password" },
			{ name: "re-password", label: "Confirm Password", type: "password" },
		];

		return (
			<div className="register-view">
				<h1> Login </h1>
				<Form inputs={inputs} action="/register" method="POST"/>
			</div>
		)
	}
}