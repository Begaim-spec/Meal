import React from 'react';
import {Link} from "react-router-dom";

const MealsList = ({meals}) => {
    return (
        <div className='row'>
            {meals.map(elem =>
                <div className='col-3'>
                    <div className="box">
                        <Link to={`/meal-details/${elem.idMeal}`}>
                            <div className='title'>{elem.strMeal}</div>
                            <img src={elem.strMealThumb} alt=""/>
                        </Link>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default MealsList;