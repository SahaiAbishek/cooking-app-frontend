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
            username: "user name",
            password: "password",
            nextPage:"none"
        }
    }

    handleNegetiveResponse() {
        this.setState((state) => {
            return { isNegetiveResponse: true }
        })
    }

    handlePositiveResponse() {
        this.setState({
            username:"guest",
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

    handleLogin() {
        var url = this.state.devURL;
        axios.get(url + `/cooking/user/` + this.state.username + "/" + this.state.password)
            .then(response => {
                if (response.data) {
                    this.setState({
                        // username:this.state.username,
                        nextPage: "menu"
                    });
                } else {
                    alert("Login or password mismatch");
                }
            }).catch(function (error) {
                console.log("Resource not found");
            });

    }

    render() {
        if(this.state.nextPage === 'menu'){
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