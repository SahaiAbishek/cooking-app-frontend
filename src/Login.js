import axios from 'axios';
import React, { Component } from 'react';
import Menu from './Menu';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            // devURL: 'http://192.168.1.75:12345',
            // locaURL: 'http://localhost:12345',
            welcomeText: "Continue as Guest",
            negetiveResponseText: "Take your time I am waiting !!!!!!",
            isNegetiveResponse: false,
            username: "",
            password: "",
            password1: "",
            nextPage: "none",
            errors: []
        }
    }

    componentDidMount() {
        var env = process.env.REACT_APP_ENV;
        if (env === 'local') {
            this.setState({
                url: 'http://localhost:12345'
            })
        }
        if (env === 'dev') {
            this.setState({
                url: 'http://192.168.1.75:12345'
            })
        }
        if (env === 'prod') {
            this.setState({
                url: 'https://boiling-hamlet-20361.herokuapp.com'
            })
        }
    }

    handleNegetiveResponse() {
        this.setState((state) => {
            return { isNegetiveResponse: true }
        })
    }

    handlePositiveResponse() {
        this.setState({
            username: "guest",
            nextPage: "menu"
        });
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handlePassword1Change(event) {
        this.setState({
            password1: event.target.value
        });
    }

    validateFields(name, password) {
        const errors = [];
        if (name.length === 0) {
            errors.push("Name can't be empty");
        }

        if (password.length === 0) {
            errors.push("Password can't be empty");
        }

        if (name.length < 5) {
            errors.push("Email should be at least 5 charcters long");
        }
        if (name.split('').filter(x => x === '@').length !== 1) {
            errors.push("Email should contain a @");
        }
        if (name.indexOf('.') === -1) {
            errors.push("Email should contain at least one dot");
        }
        return errors;
    }

    handleLogin() {
        const { username, password } = this.state;
        const errors = this.validateFields(username, password);


        var url = this.state.url;
        const request =
        {
            "email": username,
            "password": password,
        };

        axios({
            method: 'post',
            // url: 'https://boiling-hamlet-20361.herokuapp.com/cooking/food',
            url: url + `/cooking/user/login`,
            data: request,
        })
            .then((response) => {
                if (response.data) {
                    this.setState({
                        // username:this.state.username,
                        nextPage: "menu"
                    });
                } else {
                    errors.push("Login details not correct");
                    this.setState({ errors });
                    return;
                }
            }).catch(function (error) {
                console.log("Resource not found");
            });
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
    }

    handleSignUp() {
        const { username, password } = this.state;
        const errors = this.validateFields(username, password);
        if (this.state.password !== this.state.password1) {
            errors.push("Both Passwords must match");
            this.setState({ errors });
            return;
        }


        var url = this.state.url;
        const request =
        {
            "email": username,
            "password": password,
        };

        axios({
            method: 'post',
            // url: 'https://boiling-hamlet-20361.herokuapp.com/cooking/food',
            url: url + `/cooking/user/register`,
            data: request,
        })
            .then((response) => {
                this.setState({
                    nextPage: "menu"
                });
            })
            .catch(function (response) {
                console.log("Exception......");
            });
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
    }

    render() {
        const { errors } = this.state;
        if (this.state.nextPage === 'menu') {
            return <Menu user={this.state.username} />
        }
        return (
            <div>
                Welcome to cooking App.
                {
                    this.state.isNegetiveResponse ?
                        <p className="App-intro">
                            {this.state.negetiveResponseText}
                        </p> :
                        <p className="App-intro">
                            {this.state.welcomeText}
                        </p>
                }
                <p>
                    <button onClick={this.handlePositiveResponse.bind(this)}> YES </button>
                    <button onClick={this.handleNegetiveResponse.bind(this)}> NO </button>
                </p>
                <table className="MenuItems">
                    <tbody>
                        <tr>
                            <td>
                                {errors.map(error => (
                                    <p key={error}><font color="red">Error: {error}</font></p>
                                ))}
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                email
                                            </td>
                                            <td>
                                                <input type="text"
                                                    placeholder="user name"
                                                    onChange={this.handleUserNameChange.bind(this)} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                password
                                                </td>
                                            <td>
                                                <input type="password"
                                                    placeholder="password"
                                                    onChange={this.handlePasswordChange.bind(this)}
                                                />
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                email
                                                </td>
                                            <td>
                                                <input type="text"
                                                    placeholder="user name"
                                                    onChange={this.handleUserNameChange.bind(this)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                password
                                            </td>
                                            <td>
                                                <input type="password"
                                                    placeholder="password"
                                                    onChange={this.handlePasswordChange.bind(this)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                confirm password
                                                </td>
                                            <td> <input type="password"
                                                placeholder="password"
                                                onChange={this.handlePassword1Change.bind(this)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button onClick={this.handleLogin.bind(this)}> Login </button>
                            </td>
                            <td>
                                <button onClick={this.handleSignUp.bind(this)}> sign up </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <font color="green">
                        Eat what you want. Be HAPPY.
                    </font>
                </p>
            </div>
        );
    }
}

export default Login;