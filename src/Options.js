import React, { Component } from 'react';
import Menu from './Menu';
import FoodItem from './FoodItem';

class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: true,
            isEditable : false
        };
    }

    addNewFoodItem() {
        this.setState(prevState => ({
            showMenu: !this.state.showMenu
        }))
    }

    cancelNewFoodItem() {
        this.setState(prevState => ({
            showMenu: !this.state.showMenu
        }))
    }


    render() {
        return (
            <div>
                {
                    this.state.showMenu ?
                        <Menu addItemHandler={this.addNewFoodItem.bind(this)}  />
                        :
                        <FoodItem cancelFoodItem={this.cancelNewFoodItem.bind(this)} 
                        data={this.state.data} isEditable={this.state.isEditable} />
                }
            </div>
        );
    }
}

export default Options;