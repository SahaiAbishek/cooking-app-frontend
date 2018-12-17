import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu';

class FoodItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            meal_type: '',
            meal_category: '',
            cusine_type: '',
            recipe: "Add recipe here",
            cals: '',
            pic: null,
            showMenu: false,
            isEditable: '',
            recipeDesc: '',
            recipeIngradients: '',
            recipePreprationInstructions: '',
            recipes: [],
            userName: ""
        };

        this.showMenuOptions = this.showMenuOptions.bind(this);
    }

    componentDidMount() {
        this.setState({
            userName: this.props.user
        })

        if (this.props.editable) {
            const tempRecipes = this.props.data.recipes;
            let tempDesc = 'temp';
            let tempIngradients = 'temp';
            let tempPreprationInstructions = 'TODO';
            tempRecipes.map((tempRecipe) => {
                tempDesc = tempRecipe.description;
                tempIngradients = tempRecipe.ingradients;
                tempPreprationInstructions = tempRecipe.preprationInstructions;
            });
            this.setState({
                id: this.props.data.id,
                name: this.props.data.name,
                meal_type: this.props.data.mealType,
                cusine_type: this.props.data.cusineType,
                meal_category: this.props.data.mealCategory,
                cals: this.props.data.calories,
                isEditable: this.props.editable,
                recipes: this.props.data.recipes,
                recipeDesc: tempDesc,
                recipeIngradients: tempIngradients,
                recipePreprationInstructions: tempPreprationInstructions
            })
        }
    }

    showMenuOptions() {
        this.setState({
            showMenu: true
        })
    }

    editFoodItem() {

        // var myurl = `https://boiling-hamlet-20361.herokuapp.com/cooking/food/item/${this.state.id}`;
        var myurl = `http://192.168.1.75:12345/cooking/food/item/${this.state.id}`;
        if (this.state.name !== null) {
            myurl = myurl + `?name=${this.state.name}`;
        }
        if (this.state.cals != null) {
            myurl = myurl + `&calories=${this.state.cals}`;
        }
        if (this.state.cusine_type && this.state.cusine_type.length > 0) {
            myurl = myurl + `&cusineType=${this.state.cusine_type}`;
        }
        if (this.state.meal_category && this.state.meal_category.length > 0) {
            myurl = myurl + `&mealCategory=${this.state.meal_category}`;
        }
        if (this.state.meal_type && this.state.meal_type.length > 0) {
            myurl = myurl + `&mealType=${this.state.meal_type}`;
        }
        if (this.state.recipeDesc && this.state.recipeDesc.length > 0) {
            myurl = myurl + `&recipeDescription=${this.state.recipeDesc}`;
        }
        if (this.state.recipeIngradients && this.state.recipeIngradients.length > 0) {
            myurl = myurl + `&recipeIngradients=${this.state.recipeIngradients}`;
        }
        if (this.state.recipePreprationInstructions && this.state.recipePreprationInstructions.length > 0) {
            myurl = myurl + `&recipePreprationInstructions=${this.state.recipePreprationInstructions}`;
        }

        let editFormData = new FormData();

        editFormData.set('file', this.state.pic);
        // axios.put(url,this.registerData,
        //     editFormData,
        //     { headers: { 'Content-Type': 'multipart/form-data' } }
        // )
        alert(myurl);
        axios({
            method: 'PUT',
            url: myurl,
            data: editFormData,
            query: {
                name: this.state.name
            },
            config: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        }).then((response) => {
            console.log(response);
            // this.props.cancelFoodItem();
            this.setState({
                showMenu: true
            })
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
            bodyFormData.set('calories', this.state.cals);
            bodyFormData.set('cusineType', this.state.cusine_type);
            bodyFormData.set('mealCategory', this.state.meal_category);
            bodyFormData.set('mealType', this.state.meal_type);
            bodyFormData.set('file', this.state.pic);
            bodyFormData.set('recipeDescription', this.state.recipeDesc);
            bodyFormData.set('recipeIngradients', this.state.recipeIngradients);
            bodyFormData.set('recipePreprationInstructions ', this.state.recipePreprationInstructions);
            axios({
                method: 'post',
                // url: 'https://boiling-hamlet-20361.herokuapp.com/cooking/food',
                url: 'http://192.168.1.75:12345/cooking/food',
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

    handlcalsChange(event) {
        this.setState({
            cals: event.target.value
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

    handleMealCategoryChange(event){
        this.setState(
            {
                meal_category: event.target.value
            }
        )
    }

    render() {
        const foodItem = (
            <div>
                <p>Welcome {this.state.userName}</p>
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
                                        onChange={this.handleMealTypeChange.bind(this)}
                                        >
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
                                        onChange={this.handleMealCategoryChange.bind(this)} >
                                        <option name="any">All </option>
                                        <option name="breakfast">Veg </option>
                                        <option name="lunch">Non Veg </option>

                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Cusine Type :</td>
                                <td>
                                    <select title="cusineType" value={this.state.cusine_type}
                                        onChange={this.handlCusineTypeChange.bind(this)} >
                                        <option name="any">All </option>
                                        <option name="asian">Asian </option>
                                        <option name="American">American </option>
                                        <option name="Italian">Italian </option>
                                        <option name="Indian">Indian </option>
                                        <option name="Thai">Thai </option>
                                    </select>

                                </td>
                            </tr>
                            <tr>
                                <td>cals :</td>
                                <td>
                                    <input type="text"
                                        value={this.state.cals}
                                        placeholder="cals"
                                        onChange={this.handlcalsChange.bind(this)}
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
                {this.state.showMenu ? <Menu user={this.state.userName} /> : foodItem}
            </div>
        );
    }
}

export default FoodItem;
