import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Question from './Question';
import Menu from './Menu';
import FoodItem from './FoodItem';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Question}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/foodItem' component={FoodItem}/>
    </Switch>
  </main>
)

export default Main