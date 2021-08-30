import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom'


const Drinks = () => {
    const [drink, setDrink] = useState([])
    const [find, setFind] = useState('')
    const history = useHistory()

    const handleSearch = (e) => {
        setFind(e.target.value)
    }
   const findFood = () => {
     history.push(`/search/${find}`)
   }

    useEffect(() => {
        axios ('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setDrink(data.meals))
    }, [])
    return (
        <div>
            <h1>Welcome to Jibek Jolu</h1>
            <div className="search-box">
                <input type="text" placeholder='Search for a meal'  className='input' onChange={handleSearch}/>
                    <span onClick={findFood}>Find</span>
            </div>
        <div className='row'>
            {/*{*/}
            {/*    drink.filter(elem => elem.strMeal.includes(find) (*/}

            {/*        ))*/}
            {/*}*/}
            {drink.map(elem =>
                   <div className='col-3'>
                       <div className="box">
                           <Link to={`/ingredients/${elem.idMeal}`}>
                               <div className='title'>{elem.strMeal}</div>
                               <img src={elem.strMealThumb} alt=""/>
                           </Link>
                       </div>
                   </div>
                )
            }
        </div>
        </div>
    );
};

export default Drinks;