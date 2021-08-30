import React from 'react'
import Meals from './Meals'
import MealDetails from "./MealDetails";
import Dishes from "./Dishes";
import Drinks from './Drinks'
import Ingredients from './Ingredients'
import './style.css'
import Search from './Search'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
      // <Drinks />
     // <Ingredients/>
      // <Dishes />
     <Router>
         {/*<Route exact path ='/'> <Meals /></Route>*/}
      <Route exact path ='/'><Drinks /></Route>
      {/*<Route path ='/meal-details/:id/'><MealDetails /></Route>*/}
      <Route path ='/ingredients/:id/'><Ingredients /></Route>
      <Route path ='/search/:all/'><Search /></Route>
     </Router>
  );
}

export default App;
