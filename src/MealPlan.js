import React from 'react';
import Menu from './Menu';

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
        console.log(this.state);
        console.log(JSON.stringify(this.state));
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
                                placeholder="oats with milk"
                                value={this.state.sundayBreakfast}
                            />
                            </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td> Tuesday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                            <td><input type="text" /> </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={this.handleSave}> Save </button>
            </div>
        );
    }
}

export default MealPlan;