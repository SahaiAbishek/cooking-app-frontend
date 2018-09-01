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
            </div>
        );
    }
}

export default Question;