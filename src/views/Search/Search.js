import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

const Search = () => {
    const [meals, setMeals] = useState([])
    const [find, setFind] = useState('')
    const history = useHistory()

    const handleSearch = (e) => {
        setFind(e.target.value)
    }
    const findFood = (

    ) => {
        history.push(`/browse/${find}`)
    }

    useEffect(() => {
        axios ('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div>
            <h1>Welcome to Jibek Jolu</h1>
            <div className="search-box">
                <input type="text" placeholder='Search for a meal'  className='input' onChange={handleSearch}/>
                <span onClick={findFood}>Find</span>
            </div>
        </div>
    );
};

export default Search;