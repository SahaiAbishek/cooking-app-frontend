import React from 'react';
import Menu from './Menu';
import axios from 'axios';

class MealPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            nextPage: "",
            sundayBreakfast: "oats with milk",
            sundaySnack1: "none",
            sundayLunch: "Dal and Rice",
            sundaySnack2: "smoothie",
            sundayDinner: "Pizza",
            mondayBreakfast: "oats with milk",
            mondaySnack1: "none",
            mondayLunch: "Dal and Rice",
            mondaySnack2: "smoothie",
            mondayDinner: "Pizza",
            tuesdayBreakfast: "oats with milk",
            tuesdaySnack1: "none",
            tuesdayLunch: "Dal and Rice",
            tuesdaySnack2: "smoothie",
            tuesdayDinner: "Pizza",
            wednesdayBreakfast: "oats with milk",
            wednesdaySnack1: "none",
            wednesdayLunch: "Dal and Rice",
            wednesdaySnack2: "smoothie",
            wednesdayDinner: "Pizza",
            thursdayBreakfast: "oats with milk",
            thursdaySnack1: "none",
            thursdayLunch: "Dal and Rice",
            thursdaySnack2: "smoothie",
            thursdayDinner: "Pizza",
            fridayBreakfast: "oats with milk",
            fridaySnack1: "none",
            fridayLunch: "Dal and Rice",
            fridaySnack2: "smoothie",
            fridayDinner: "Pizza",
            saturdayBreakfast: "oats with milk",
            saturdaySnack1: "none",
            saturdayLunch: "Dal and Rice",
            saturdaySnack2: "smoothie",
            saturdayDinner: "Pizza"
        }
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.sundayBreakfastChange = this.sundayBreakfastChange.bind(this);
        this.sundaySnack1Change = this.sundaySnack1Change.bind(this);
        this.sundayLunchChange = this.sundayLunchChange.bind(this);
        this.sundaySnack2Change = this.sundaySnack2Change.bind(this);
        this.sundayDinnerChange = this.sundayDinnerChange.bind(this);

        this.mondayBreakfastChange = this.mondayBreakfastChange.bind(this);
        this.mondaySnack1Change = this.mondaySnack1Change.bind(this);
        this.mondayLunchChange = this.mondayLunchChange.bind(this);
        this.mondaySnack2Change = this.mondaySnack2Change.bind(this);
        this.mondayDinnerChange = this.mondayDinnerChange.bind(this);

        this.tuesdayBreakfastChange = this.tuesdayBreakfastChange.bind(this);
        this.tuesdaySnack1Change = this.tuesdaySnack1Change.bind(this);
        this.tuesdayLunchChange = this.tuesdayLunchChange.bind(this);
        this.tuesdaySnack2Change = this.tuesdaySnack2Change.bind(this);
        this.tuesdayDinnerChange = this.tuesdayDinnerChange.bind(this);

        this.wednesdayBreakfastChange = this.wednesdayBreakfastChange.bind(this);
        this.wednesdaySnack1Change = this.wednesdaySnack1Change.bind(this);
        this.wednesdayLunchChange = this.wednesdayLunchChange.bind(this);
        this.wednesdaySnack2Change = this.wednesdaySnack2Change.bind(this);
        this.wednesdayDinnerChange = this.wednesdayDinnerChange.bind(this);

        this.thursdayBreakfastChange = this.thursdayBreakfastChange.bind(this);
        this.thursdaySnack1Change = this.thursdaySnack1Change.bind(this);
        this.thursdayLunchChange = this.thursdayLunchChange.bind(this);
        this.thursdaySnack2Change = this.thursdaySnack2Change.bind(this);
        this.thursdayDinnerChange = this.thursdayDinnerChange.bind(this);

        this.fridayBreakfastChange = this.fridayBreakfastChange.bind(this);
        this.fridaySnack1Change = this.fridaySnack1Change.bind(this);
        this.fridayLunchChange = this.fridayLunchChange.bind(this);
        this.fridaySnack2Change = this.fridaySnack2Change.bind(this);
        this.fridayDinnerChange = this.fridayDinnerChange.bind(this);

        this.saturdayBreakfastChange = this.saturdayBreakfastChange.bind(this);
        this.saturdaySnack1Change = this.saturdaySnack1Change.bind(this);
        this.saturdayLunchChange = this.saturdayLunchChange.bind(this);
        this.saturdaySnack2Change = this.saturdaySnack2Change.bind(this);
        this.saturdayDinnerChange = this.saturdayDinnerChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            userName: this.props.user
        })
    }

    handleBackClick() {
        this.setState({
            nextPage: "menu"
        })
    }

    handleSave() {
        const request = [
            {
                "dayOfWeek": "Sunday",
                "mealName": this.state.sundayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Sunday",
                "mealName": this.state.sundaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Sunday",
                "mealName": this.state.sundayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Sunday",
                "mealName": this.state.sundaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Sunday",
                "mealName": this.state.sundayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Monday",
                "mealName": this.state.mondayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Monday",
                "mealName": this.state.mondaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Monday",
                "mealName": this.state.mondayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Monday",
                "mealName": this.state.mondaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Monday",
                "mealName": this.state.mondayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Tuesday",
                "mealName": this.state.tuesdayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Tuesday",
                "mealName": this.state.tuesdaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Tuesday",
                "mealName": this.state.tuesdayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Tuesday",
                "mealName": this.state.tuesdaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Tuesday",
                "mealName": this.state.tuesdayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Wednesday",
                "mealName": this.state.wednesdayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Wednesday",
                "mealName": this.state.wednesdaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Wednesday",
                "mealName": this.state.wednesdayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Wednesday",
                "mealName": this.state.wednesdaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Wednesday",
                "mealName": this.state.wednesdayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Thursday",
                "mealName": this.state.thursdayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Thursday",
                "mealName": this.state.thursdaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Thursday",
                "mealName": this.state.thursdayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Thursday",
                "mealName": this.state.thursdaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Thursday",
                "mealName": this.state.thursdayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Friday",
                "mealName": this.state.fridayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Friday",
                "mealName": this.state.fridaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Friday",
                "mealName": this.state.fridayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Friday",
                "mealName": this.state.fridaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Friday",
                "mealName": this.state.fridayDinner,
                "mealType": "Dinner",
                "userId": 1
            },
            {
                "dayOfWeek": "Saturday",
                "mealName": this.state.saturdayBreakfast,
                "mealType": "Breakfast",
                "userId": 1
            },
            {
                "dayOfWeek": "Saturday",
                "mealName": this.state.saturdaySnack1,
                "mealType": "Snack1",
                "userId": 1
            },
            {
                "dayOfWeek": "Saturday",
                "mealName": this.state.saturdayLunch,
                "mealType": "Lunch",
                "userId": 1
            },
            {
                "dayOfWeek": "Saturday",
                "mealName": this.state.saturdaySnack2,
                "mealType": "Snack2",
                "userId": 1
            },
            {
                "dayOfWeek": "Saturday",
                "mealName": this.state.saturdayDinner,
                "mealType": "Dinner",
                "userId": 1
            }
        ];
        axios({
            method: 'post',
            // url: 'https://boiling-hamlet-20361.herokuapp.com/cooking/food',
            url: 'http://192.168.1.75:12345/cooking/user/meal-plan',
            data: request,
        })
            .then((response) => {
                console.log("SUCCESS : " + response);
                this.setState({
                    showMenu: true
                })
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 8; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 6; j++) {
                if (i === 0 && j === 0) {
                    children.push(<td></td>)
                } else if (j === 0) {
                    children.push(<td>{`day ${i}`}</td>)
                } else if (i === 0) {
                    children.push(<td>{`meal ${j}`}</td>)
                } else {
                    children.push(<td><input type="text" placeholder="oats with milk" /></td>)
                }
            }
            //Create the parent and add the children
            table.push(<tr className="tr">{children}</tr>)
        }
        return table
    }

    sundayBreakfastChange(event) {
        this.setState({
            sundayBreakfast: event.target.value
        });
    }

    sundaySnack1Change(event) {
        this.setState({
            sundaySnack1: event.target.value
        });
    }

    sundayLunchChange(event) {
        this.setState({
            sundayLunch: event.target.value
        });
    }

    sundaySnack2Change(event) {
        this.setState({
            sundaySnack2: event.target.value
        });
    }

    sundayDinnerChange(event) {
        this.setState({
            sundayDinner: event.target.value
        });
    }

    mondayBreakfastChange(event) {
        this.setState({
            mondayBreakfast: event.target.value
        });
    }

    mondaySnack1Change(event) {
        this.setState({
            mondaySnack1: event.target.value
        });
    }

    mondayLunchChange(event) {
        this.setState({
            mondayLunch: event.target.value
        });
    }

    mondaySnack2Change(event) {
        this.setState({
            mondaySnack2: event.target.value
        });
    }

    mondayDinnerChange(event) {
        this.setState({
            mondayDinner: event.target.value
        });
    }

    tuesdayBreakfastChange(event) {
        this.setState({
            tuesdayBreakfast: event.target.value
        });
    }

    tuesdaySnack1Change(event) {
        this.setState({
            tuesdaySnack1: event.target.value
        });
    }

    tuesdayLunchChange(event) {
        this.setState({
            tuesdayLunch: event.target.value
        });
    }

    tuesdaySnack2Change(event) {
        this.setState({
            tuesdaySnack2: event.target.value
        });
    }

    tuesdayDinnerChange(event) {
        this.setState({
            tuesdayDinner: event.target.value
        });
    }

    wednesdayBreakfastChange(event) {
        this.setState({
            wednesdayBreakfast: event.target.value
        });
    }

    wednesdaySnack1Change(event) {
        this.setState({
            wednesdaySnack1: event.target.value
        });
    }

    wednesdayLunchChange(event) {
        this.setState({
            wednesdayLunch: event.target.value
        });
    }

    wednesdaySnack2Change(event) {
        this.setState({
            wednesdaySnack2: event.target.value
        });
    }

    wednesdayDinnerChange(event) {
        this.setState({
            wednesdayDinner: event.target.value
        });
    }

    thursdayBreakfastChange(event) {
        this.setState({
            thursdayBreakfast: event.target.value
        });
    }

    thursdaySnack1Change(event) {
        this.setState({
            thursdaySnack1: event.target.value
        });
    }

    thursdayLunchChange(event) {
        this.setState({
            thursdayLunch: event.target.value
        });
    }

    thursdaySnack2Change(event) {
        this.setState({
            thursdaySnack2: event.target.value
        });
    }

    thursdayDinnerChange(event) {
        this.setState({
            thursdayDinner: event.target.value
        });
    }

    fridayBreakfastChange(event) {
        this.setState({
            fridayBreakfast: event.target.value
        });
    }

    fridaySnack1Change(event) {
        this.setState({
            fridaySnack1: event.target.value
        });
    }

    fridayLunchChange(event) {
        this.setState({
            fridayLunch: event.target.value
        });
    }

    fridaySnack2Change(event) {
        this.setState({
            fridaySnack2: event.target.value
        });
    }

    fridayDinnerChange(event) {
        this.setState({
            fridayDinner: event.target.value
        });
    }

    saturdayBreakfastChange(event) {
        this.setState({
            saturdayBreakfast: event.target.value
        });
    }

    saturdaySnack1Change(event) {
        this.setState({
            saturdaySnack1: event.target.value
        });
    }

    saturdayLunchChange(event) {
        this.setState({
            saturdayLunch: event.target.value
        });
    }

    saturdaySnack2Change(event) {
        this.setState({
            saturdaySnack2: event.target.value
        });
    }

    saturdayDinnerChange(event) {
        this.setState({
            saturdayDinner: event.target.value
        });
    }

    render() {
        if (this.state.nextPage === "menu") {
            return <Menu user={this.state.userName} />
        }
        return (
            <div>
                Welcome {this.state.userName}
                <h1> Create your Meal Plan </h1>
                {/* <table className="MealPlan" border="1px solid black">
                    {this.createTable()}
                </table> */}
                <button onClick={this.handleBackClick}> Back </button>
                <table className="MealPlan" border="1px solid black" >
                    <tbody>
                        <tr className="tr_Plan">
                            <td> </td>
                            <td> Breakfast</td>
                            <td> Snack1</td>
                            <td> Lunch</td>
                            <td> Snack2</td>
                            <td> Dinner</td>
                        </tr>
                        <tr>
                            <td> Sunday</td>
                            <td><input type="text"
                                value={this.state.sundayBreakfast}
                                onChange={this.sundayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.sundaySnack1}
                                onChange={this.sundaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.sundayLunch}
                                onChange={this.sundayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.sundaySnack2}
                                onChange={this.sundaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.sundayDinner}
                                onChange={this.sundayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td><input type="text"
                                value={this.state.mondayBreakfast}
                                onChange={this.mondayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.mondaySnack1}
                                onChange={this.mondaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.mondayLunch}
                                onChange={this.mondayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.mondaySnack2}
                                onChange={this.mondaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.mondayDinner}
                                onChange={this.mondayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td> Tuesday</td>
                            <td><input type="text"
                                value={this.state.tuesdayBreakfast}
                                onChange={this.tuesdayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.tuesdaySnack1}
                                onChange={this.tuesdaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.tuesdayLunch}
                                onChange={this.tuesdayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.tuesdaySnack2}
                                onChange={this.tuesdaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.tuesdayDinner}
                                onChange={this.tuesdayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td><input type="text"
                                value={this.state.wednesdayBreakfast}
                                onChange={this.wednesdayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.wednesdaySnack1}
                                onChange={this.wednesdaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.wednesdayLunch}
                                onChange={this.wednesdayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.wednesdaySnack2}
                                onChange={this.wednesdaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.wednesdayDinner}
                                onChange={this.wednesdayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td><input type="text"
                                value={this.state.thursdayBreakfast}
                                onChange={this.thursdayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.thursdaySnack1}
                                onChange={this.thursdaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.thursdayLunch}
                                onChange={this.thursdayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.thursdaySnack2}
                                onChange={this.thursdaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.thursdayDinner}
                                onChange={this.thursdayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td><input type="text"
                                value={this.state.fridayBreakfast}
                                onChange={this.fridayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.fridaySnack1}
                                onChange={this.fridaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.fridayLunch}
                                onChange={this.fridayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.fridaySnack2}
                                onChange={this.fridaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.fridayDinner}
                                onChange={this.fridayDinnerChange}
                            /> </td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td><input type="text"
                                value={this.state.saturdayBreakfast}
                                onChange={this.saturdayBreakfastChange}
                            />
                            </td>
                            <td><input type="text"
                                value={this.state.saturdaySnack1}
                                onChange={this.saturdaySnack1Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.saturdayLunch}
                                onChange={this.saturdayLunchChange}
                            /> </td>
                            <td><input type="text"
                                value={this.state.saturdaySnack2}
                                onChange={this.saturdaySnack2Change}
                            /> </td>
                            <td><input type="text"
                                value={this.state.saturdayDinner}
                                onChange={this.saturdayDinnerChange}
                            /> </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={this.handleSave}> Save </button>
            </div>
        );
    }
}

export default MealPlan;