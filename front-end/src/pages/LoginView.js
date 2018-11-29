import React, { Component } from 'react'
import Form from '../components/form'
import './login-register-view.css'

export default class LoginView extends Component {
  render() {
    const inputs = [
      { name: "username", label: "Username" },
      { name: "password", label: "Password", type: "password" },
    ];

    const handleSubmit = () => {
      alert("login submited !!")
    }

    return (
      <div className="login-view">
        <h1> Login </h1>
        <Form inputs={inputs} action="/login" method="POST" submitHandler={handleSubmit} />
      </div>
    )
  }
}