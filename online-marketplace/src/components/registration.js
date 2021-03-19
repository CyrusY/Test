import React, { Component } from 'react';
import axios from 'axios';
import './registration.css'

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeValidPassword = this.onChangeValidPassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            displayName: '',
            email: '',
            password: '',
            validPassword: ''
        }
    }

    onChangeDisplayName(e) {
        this.setState({
            displayName: e.target.value
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeValidPassword(e) {
        this.setState({
            validPassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            displayName: this.state.displayName,
            email: this.state.email,
            password: this.state.password,
            validPassword: this.state.validPassword,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            displayName: '',
            email: '',
            password: '',
            validPassword: ''
        });
        //window.location = '/';
        alert('Account created! Welcome, ' + this.state.displayName + '!');

    }

    render() {
        return (
            <div className="registration-container">
                <div className="main-area">
                    <div className="form-container">
                        <form onSubmit={this.onSubmit}>
                            <div className="text-field">
                                <label htmlFor="user">User Name</label>
                                <input type="text"
                                    required
                                    placeholder='Enter username'
                                    className="form-control form-group"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Display Name</label>
                                <input type="text"
                                    required
                                    placeholder='Enter display Name'
                                    className="form-control form-group"
                                    value={this.state.displayName}
                                    onChange={this.onChangeDisplayName}
                                />
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Email</label>
                                <input type="text"
                                    required
                                    placeholder='Enter email'
                                    className="form-control form-group"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Password</label>
                                <input type="text"
                                    required
                                    placeholder='Enter password'
                                    className="form-control form-group"
                                    value={this.state.passwrod}
                                    onChange={this.onChangePassword}
                                />
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Re-type Password</label>
                                <input type="text"
                                    required
                                    placeholder='Re-type Password'
                                    className="form-control form-group"
                                    value={this.state.ValidPassword}
                                    onChange={this.onChangeValidPassword}
                                />
                            </div>

                            <div className="button">
                                <button type="submit">Register</button>

                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}
// onSubmit - click submit button