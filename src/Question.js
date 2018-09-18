import React, { Component } from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeText: "Feeling hungry yet ?",
            negetiveResponseText: "Take your time I am waiting !!!!!!",
            isNegetiveResponse: false
        }
    }

    handleNegetiveResponse() {
        this.setState((state) => {
            return { isNegetiveResponse: true }
        })
    }

    handlePositiveResponse() {
        this.props.showQuestonHandler();
    }

    render() {
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
                                <button onClick={this.handlePositiveResponse.bind(this)}> Login </button>
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