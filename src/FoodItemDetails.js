import React, { Component } from 'react';
import Options from './Options.js';

class FoodItemDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMenu:false
        };
    }

    showMenu(){
        this.setState(prevState => ({
            showMenu : !this.state.showMenu
          }))
    }

    render() {
        const itemDetails = (
            <div>
                <button onClick={this.showMenu.bind(this)}> Back </button>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Meal type :{this.props.data.mealType}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Recipe : {this.props.data.recipe}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
        return (
            <div>
                {this.state.showMenu? <Options /> : itemDetails}
            </div>
        );
    }
}

export default FoodItemDetails;