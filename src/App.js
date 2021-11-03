import React from 'react'
import Meals from './Meals/Meals'
import MealDetails from './components/MealDetails/MealDetails'
import Ingredients from "./components/Ingredients/Ingredients";
import './style.css'
import Browse from './components/Browse/Browse'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
     <Router>
      <Route exact path ='/'><Meals /></Route>
      <Route path ='/meal-details/:id/'><MealDetails /></Route>
      <Route path ='/ingredients/:id/'><Ingredients /></Route>
      <Route path ='/browse/:all/'><Browse /></Route>
     </Router>
  );
}

export default App;
