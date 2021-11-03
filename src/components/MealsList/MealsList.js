import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className='container'>
            <div className='row'>
                {meals.map(elem =>
                    <div className='col-3'>
                        <div className="box">
                            <Link to={`/meal-details/${elem.idMeal}`}>
                                <img src={elem.strMealThumb} alt=""/>
                                    <p className='title'>{elem.strMeal}</p>
                            </Link>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default MealsList;