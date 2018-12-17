import React, { Component } from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import MealPlan from './MealPlan';
import Shoe from './Shoe';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showFoodRecipe: false,
            menuItems: [],
            data: "",
            pic: null,
            isEditable: false,
            userName: "",
            nextPage: "none"
        };
    }

    componentDidMount() {
        //get user details from last page
        const un = this.props.user;
        this.setState({
            userName: un
        });
        // axios.get(`https://boiling-hamlet-20361.herokuapp.com/cooking/food/items`)
        axios.get(`http://192.168.1.75:12345/cooking/food/items`)
            .then(response => {
                const menuItems = response.data;
                this.setState({ menuItems });
            }).catch(function (error) {
                console.log("Resource not found");
            });
    }

    addnewItem() {
        // this.props.addItemHandler(item);
        this.setState({
            nextPage: "addFoodRecipe",
            showFoodRecipe: true,
            isEditable: false,
            // data: item
        });
    }

    createMealPlan() {
        this.setState({
            nextPage: "MealPlan"
        });
    }

    showFoodRecipe(item) {
        console.log(item);
        this.setState({
            nextPage: "showFoodRecipe",
            showFoodRecipe: true,
            isEditable: true,
            data: item
        });
        // this.props.addItemHandler(item);
    }

    searchFood(event) {
        if (event.key === 'Enter') {
            // axios.get(`https://boiling-hamlet-20361.herokuapp.com/cooking/food/items/` + event.target.value)
            axios.get(`http://192.168.1.75:12345/cooking/food/items/` + event.target.value)
                .then(response => {
                    const menuItems = response.data;
                    this.setState({ menuItems });
                }).catch(function (error) {
                    console.log("Resource not found");
                });
        }
    }

    handlePicChange(event) {
        this.setState({
            pic: event.target.files[0]
        });
    }

    updateFoodPic(item) {
        // const url = 'https://boiling-hamlet-20361.herokuapp.com/cooking/food/ID/' + item.id + '/'
        const url = 'http://192.168.1.75:12345/cooking/food/ID/' + item.id + '/'
        console.log(url);
        var bodyFormData = new FormData();
        bodyFormData.set('pic', this.state.pic);
        axios.put(url,
            bodyFormData,
        ).then((response) => {
            console.log("SUCCESS : " + response);
            this.props.cancelFoodItem();
        }).catch(function (response) {
            console.log(response);
        });
    }

    addShoe(item) {
        this.setState({
            nextPage: "userShoes"
        });
    }

    cancelNewFoodItem() {
    }

    render() {
        const filters = (
            <div>
                <p>Filter Options </p>
                <table className="Filter">
                    <tbody>
                        <tr>
                            <td>
                                <input type="text"
                                    placeholder="recipe name or details"
                                    onKeyPress={this.searchFood.bind(this)}
                                // onchange={this.searchFood.bind(this)}
                                />
                            </td>
                            <td>
                                <select title="food_type">
                                    <option name="vegOrNonVeg">Food Type </option>
                                    <option name="breakfast">Breakfast </option>
                                    <option name="lunch">Lunch </option>
                                    <option name="dinner">Dinner </option>
                                    <option name="snack"> Snacks </option>
                                </select>
                            </td>
                            <td>
                                <select title="food_category">
                                    <option name="vegOrNonVeg">Veg/NonVeg </option>
                                    <option name="veg">veg </option>
                                    <option name="nonVeg"> non veg </option>
                                </select>
                            </td>
                            <td>
                                <select title="Cuisine">
                                    <option name="cuisineType">Cuisine Type </option>
                                    <option name="american">American </option>
                                    <option name="Italian"> Italian </option>
                                    <option name="american">Indian </option>
                                    <option name="Italian"> Thai </option>
                                </select>
                            </td>
                            <td>
                                <select title="calories">
                                    <option name="calorieCount">Calorie Count </option>
                                    <option name="under100">Under 100 </option>
                                    <option name="Small200"> Smaller than 300 </option>
                                    <option name="all">All </option>

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

        if(this.state.nextPage=== "userShoes"){
            return <Shoe user={this.state.userName} />
        }

        if (this.state.nextPage === "MealPlan") {
            return <MealPlan user={this.state.userName} />
        }

        const recipes = (
            <div>
                Welcome {this.state.userName}
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button className="AddItemButton" onClick={this.addnewItem.bind(this)}>
                                    Create An item of your choice
                        </button>
                            </td>
                            <td>
                                <button className="MealPlanButton" onClick={this.createMealPlan.bind(this)}>
                                    Create A Meal Plan
                        </button>
                            </td>
                            <td>
                                <button className="MealPlanButton" onClick={this.addShoe.bind(this)}>
                                    Shoe Tracker
                        </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="MenuItems">
                    <tbody>
                        {
                            this.state.menuItems.map((item, i) => {
                                return (
                                    <tr key={i} className="tr">
                                        <td>
                                            <img src={"data:image/jpeg;base64," + item.pic}
                                                height="50" width="80" alt="some name"
                                                onClick={this.showFoodRecipe.bind(this, item)} />
                                        </td>
                                        <td >
                                            <a href="#"
                                                onClick={this.showFoodRecipe.bind(this, item)}>
                                                {item.name}
                                            </a>
                                        </td>
                                        <td>
                                            {item.mealType}
                                        </td>
                                        <td>
                                            {item.calories}
                                        </td>
                                    </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>
            </div>
        );

        if (this.state.nextPage === "showFoodRecipe") {
            return <FoodItem cancelFoodItem={this.cancelNewFoodItem.bind(this)}
                data={this.state.data} editable={this.state.isEditable}
                user={this.state.userName} />;
        }

        if (this.state.nextPage === "addFoodRecipe") {
            return <FoodItem cancelFoodItem={this.cancelNewFoodItem.bind(this)}
                data={this.state.data} editable={this.state.isEditable}
                user={this.state.userName} />;
        }

        return (
            <div>
                {recipes}
            </div>
        );
    }
}

export default Menu;
