import React from 'react';
import {Link} from "react-router-dom";

const IngredientsList = ({ingredients}) => {
    return (
        <div className='row'>
            {ingredients.map((elem) =>(
                <div key={elem} className="col-3">
                    <div className="ing-box">
                        <Link to={`/ingredients/${elem}`}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem}.png`} alt=""/>
                            {elem}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IngredientsList;