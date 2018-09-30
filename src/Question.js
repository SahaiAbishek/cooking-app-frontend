import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu'

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devURL: 'http://10.0.0.47:12345',
            locaURL: 'http://localhost:12345',
            welcomeText: "Feeling hungry yet ?",
            negetiveResponseText: "Take your time I am waiting !!!!!!",
            isNegetiveResponse: false,
            username: "",
            password: "",
            nextPage: "none",
            errors: []
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
        
        var url = this.state.devURL;
        axios.get(url + `/cooking/user/` + this.state.username + "/" + this.state.password)
            .then(response => {
                if (response.data) {
                    this.setState({
                        // username:this.state.username,
                        nextPage: "menu"
                    });
                } else {
                    errors.push("Login details not correct");
                }
            }).catch(function (error) {
                console.log("Resource not found");
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
                                                <input type="text" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                password
                                            </td>
                                            <td>
                                                <input type="password" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                confirm password
                                                </td>
                                            <td> <input type="password" />
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
                                <button onClick={this.handlePositiveResponse.bind(this)}> sign up </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <font color="green">
                        Once you start running your life changes.
                        Especially your social circle.
                        Eating  habits gets better and you keep thinking about your shoes ;).
                    </font>
                </p>
                <p>
                    <button className="AddItemButton"> Shoe tracker </button>
                </p>
            </div>
        );
    }
}

export default Question;