import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu';

class FoodItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            meal_type: "",
            meal_category: "",
            cusine_type: "",
            recipe: "Add recipe here",
            calories: "",
            pic: null,
            showMenu: false,
            isEditable: '',
            recipeDesc: '',
            recipeIngradients: '',
            recipePreprationInstructions: '',
            recipes:[]
        };

        this.showMenuOptions = this.showMenuOptions.bind(this);
    }

    componentDidMount() {
        console.log("Inside component did mount , is editable : " );
        console.log(this.props.data.recipes);

        const tempRecipes = this.props.data.recipes;
        let tempDesc='temp';
        let tempIngradients='temp';
        let tempPreprationInstructions='TODO';
        tempRecipes.map((tempRecipe) => {
            tempDesc = tempRecipe.description;
            tempIngradients = tempRecipe.ingradients;
            // tempPreprationInstructions = tempRecipe.preprationInstructions;
        });
        if (this.props.editable) {
            this.setState({
                id: this.props.data.id,
                name: this.props.data.name,
                calories: this.props.data.calories,
                isEditable: this.props.editable,
                recipes: this.props.data.recipes,
                recipeDesc: tempDesc,
                recipeIngradients: tempIngradients,
                recipePreprationInstructions: tempPreprationInstructions,
            })
        }
    }

    showMenuOptions() {
        this.setState({
            showMenu: true
        })
    }

    editFoodItem() {
        console.log(this.state.id);
        const url = 'http://10.0.0.47:12345/cooking/food/item/' + this.state.id + '/'
        console.log(url);
        var bodyFormData = new FormData();
        bodyFormData.set('recipeDescription', this.state.recipeDesc);
        bodyFormData.set('pic', this.state.pic);
        axios.put(url,
            bodyFormData,
        ).
            then((response) => {
                console.log("SUCCESS : " + response);
                this.props.cancelFoodItem();
            })
            .catch(function (response) {
                console.log(response);
            });
    }

    saveNewFoodItem(formSubmitevent) {
        formSubmitevent.preventDefault();
        if (this.state.isEditable) {
            this.editFoodItem();
        } else {
            var bodyFormData = new FormData();
            bodyFormData.set('name', this.state.name);
            bodyFormData.set('calories', this.state.calories);
            bodyFormData.set('cusineType', this.state.cusine_type);
            bodyFormData.set('mealCategory', this.state.meal_category);
            bodyFormData.set('mealType', this.state.meal_type);
            bodyFormData.set('file', this.state.pic);
            bodyFormData.set('recipeDescription',this.state.recipeDesc);
            bodyFormData.set('recipeIngradients',this.state.recipeIngradients);
            bodyFormData.set('recipeIngradients',this.state.recipeIngradients);
            axios({
                method: 'post',
                url: 'http://10.0.0.47:12345/cooking/food',
                data: bodyFormData,
                // config: { headers: {'Content-Type': 'multipart/form-data' }}
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
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleMealTypeChange(event) {
        this.setState({
            meal_type: event.target.value
        });
    }

    handleMealCategoryChange(event) {
        this.setState({
            meal_category: event.target.value
        });
    }

    handlCusineTypeChange(event) {
        this.setState({
            cusine_type: event.target.value
        });
    }

    handlRecipeChange(event) {
        this.setState({
            recipe: event.target.value
        });
    }

    handlCaloriesChange(event) {
        this.setState({
            calories: event.target.value
        });
    }

    handlePicChange(event) {
        this.setState({
            pic: event.target.files[0]
        });
    }

    handleRecipeDescChange(event) {
        this.setState({
            recipeDesc: event.target.value
        });
    }

    handleIngradientsChange(event) {
        this.setState({
            recipeIngradients: event.target.value
        });
    }

    handlePreprationInstructionsChange(event) {
        this.setState({
            recipePreprationInstructions: event.target.value
        });
    }

    render() {
        const foodItem = (
            <div>
                {this.state.isEditable ? "Update item" : "Add new food item of your choice:"}

                <form onSubmit={this.saveNewFoodItem.bind(this)} >
                    <table className="MenuItems">
                        <tbody >
                            <tr>
                                <td> name : </td>
                                <td>
                                    <input type="text"
                                        placeholder="Recipe Name"
                                        value={this.state.name}
                                        onChange={this.handleNameChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Meal Type :</td>
                                <td>
                                    <select title="mealType" value={this.state.meal_type}
                                        onChange={this.handleMealTypeChange.bind(this)} >
                                        <option name="any">All </option>
                                        <option name="breakfast">Breakfast </option>
                                        <option name="lunch">Lunch </option>
                                        <option name="dinner"> Dinner </option>
                                        <option name="snacks">Snacks </option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td> Meal Category : </td>
                                <td>
                                    <select title="mealCategory" value={this.state.meal_category}
                                        onChange={this.handlCusineTypeChange.bind(this)} >
                                        <option name="any">All </option>
                                        <option name="breakfast">Veg </option>
                                        <option name="lunch">Non Veg </option>

                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Cusine Type :</td>
                                <td>
                                    <select title="mealCategory" value={this.state.cusine_type}
                                        onChange={this.handlCusineTypeChange.bind(this)} >
                                        <option name="any">All </option>
                                        <option name="breakfast">Asian </option>
                                        <option name="lunch">American </option>
                                        <option name="lunch">Italian </option>
                                        <option name="lunch">Indian </option>
                                        <option name="lunch">Thai </option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td>Calories :</td>
                                <td>
                                    <input type="text"
                                        value={this.state.calories}
                                        placeholder="calories"
                                        onChange={this.handlCaloriesChange.bind(this)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Add Picture : </td>
                                <td>
                                    <input type="file"
                                        onChange={this.handlePicChange.bind(this)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2> {this.state.recipe} </h2>
                    <table className="MenuItems">
                        <tbody>
                            <tr>
                                <td>
                                    <textarea className="textarea"
                                        value={this.state.recipeIngradients}
                                        onChange={this.handleIngradientsChange.bind(this)}
                                        placeholder="Ingradients.." />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="textarea"
                                        value={this.state.recipeDesc}
                                        placeholder="Describe your recipe"
                                        onChange={this.handleRecipeDescChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea className="textarea"
                                        value={this.state.recipePreprationInstructions}
                                        onChange={this.handlePreprationInstructionsChange.bind(this)}
                                        placeholder="Prepration Instructions..." />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="MenuItems">
                        <tbody>
                            <tr>
                                <td text-align="center">
                                    <button className="btn btn-default" type="submit" >Save</button>
                                </td>
                                <td text-align="center">
                                    <button className="btn btn-default" onClick={this.showMenuOptions.bind(this)} >
                                        Cancel
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
        return (
            <div>
                {this.state.showMenu ? <Menu /> : foodItem}
            </div>
        );
    }
}

export default FoodItem;
