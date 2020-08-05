import React, { Component, useState } from 'react'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import styles from './components/Login.css'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authentication: 'false',
            sigout: 'false',
        }
        const classes = this.useStyles
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert('Logged in')
        this.setState({ authentication: 'true' })
    }
    render() {
        return (
            <div>
                {this.state.authentication === 'false' ? (
                    <LoginPage handleSubmit={this.handleSubmit} />
                ) : (
                    <div>
                        <Dashboard />
                    </div>
                )}
            </div>
        )
    }
}
