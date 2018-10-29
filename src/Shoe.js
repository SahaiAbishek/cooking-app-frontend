import React, { Component } from 'react';
import axios from 'axios';

class Shoe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devURL: 'http://10.0.0.47:12345',
            locaURL: 'http://localhost:12345',
            myshoes: [],
            pic: null,
            userName: "",
            brand: "",
            model: "",
            startDate: "",
            endDate: "",
            miles: "",
            size: ""
        }
    }

    componentDidMount() {
        //get user details from last page
        const uName = this.props.user;
        this.setState({
            userName: uName
        });
        const url = 'http://10.0.0.47:12345/cooking/user/shoes/' + uName
        // const url = 'http://10.0.0.47:12345/cooking/user/shoes/aaa%40abc.com';
        // axios.get(`https://boiling-hamlet-20361.herokuapp.com/cooking/food/items`)
        axios.get(url)
            .then(response => {
                const myshoes = response.data;
                this.setState({ myshoes });
            }).catch(function (error) {
                console.log("Resource not found");
            });
    }

    addNewShoe(event) {
        event.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.set('brand', this.state.brand);
        bodyFormData.set('model', this.state.model);
        bodyFormData.set('startDate', this.state.startDate);
        bodyFormData.set('endDate', this.state.endDate);
        bodyFormData.set('miles', this.state.miles);
        bodyFormData.set('size', this.state.size);
        bodyFormData.set('file', this.state.pic);
        bodyFormData.set('email', this.state.userName);

        axios({
            method: 'post',
            // url: 'https://boiling-hamlet-20361.herokuapp.com/cooking/food',
            url: 'http://10.0.0.47:12345/cooking/user/shoe',
            // url: 'http://10.0.0.47:12345/cooking/user/shoe?brand=Adidas&model=Adios&startDate=2018-07-22&endDate=2018-10-16&miles=350&size=10.5&email=aaa%40abc.com',
            data: bodyFormData,
        })
            .then((response) => {
                console.log("SUCCESS : " + response);
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    handleBrandChange(event) {
        this.setState({
            brand: event.target.value
        });
    }

    handleModelChange(event) {
        this.setState({
            model: event.target.value
        });
    }

    handleStartDateChange(event) {
        this.setState({
            startDate: event.target.value
        });
    }

    handleEndDateChange(event) {
        this.setState({
            endDate: event.target.value
        });
    }

    handleSizeChange(event) {
        this.setState({
            size: event.target.value
        });
    }

    handleMilesChange(event) {
        this.setState({
            miles: event.target.value
        });
    }

    handlePicChange(event) {
        this.setState({
            pic: event.target.files[0]
        });
    }

    render() {
        return (
            <div>
                <h1> {this.state.userName} Track your shoes here : </h1>
                <table className="MenuItems">
                    <tbody>
                        {
                            this.state.myshoes.map((item, i) => {
                                return (
                                    <tr key={i} className="tr">
                                        <td>
                                            <img src={"data:image/jpeg;base64," + item.pic}
                                                height="50" width="80" alt="some name"
                                            />
                                        </td>
                                        <td >
                                            {item.brand}
                                        </td>
                                        <td>
                                            {item.model}
                                        </td>
                                        <td>
                                            {item.miles}
                                        </td>
                                    </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>

                <table>
                    <tbody>
                        <tr>
                            <td>Brand </td>
                            <td><input type="text"
                                onChange={this.handleBrandChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Model </td>
                            <td><input type="text"
                                onChange={this.handleModelChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>start Date  </td>
                            <td><input type="text"
                                onChange={this.handleStartDateChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>End Date </td>
                            <td><input type="text"
                                onChange={this.handleEndDateChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Size </td>
                            <td><input type="text"
                                onChange={this.handleSizeChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Miles </td>
                            <td><input type="text"
                                onChange={this.handleMilesChange.bind(this)}
                            /></td>
                        </tr>
                        <tr>
                            <td>Add Picture : </td>
                            <td>
                                <input type="file"
                                    onChange={this.handlePicChange.bind(this)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td text-align="center">
                                <button className="btn btn-default" onClick={this.addNewShoe.bind(this)} >Save</button>
                            </td>
                            <td text-align="center">
                                <button className="btn btn-default"
                                // onClick={this.showMenuOptions.bind(this)} 
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Shoe;