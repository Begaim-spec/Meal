import React, {useEffect, useState} from 'react';
import axios from 'axios'
import  {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Search = () => {
           const [search, setSearch] = useState([])
           const params = useParams()
            const [error, setError] = useState('')
           const filtered = search.filter(elem => elem.strMeal.toLowerCase().includes())

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.all}`)
            .then(({data}) => setSearch(data.meals))
        if (search.strMeal === filtered){
            setSearch(search.strMeal)
        }
        else{
            setError('Searching dish was not found')
        }
    })
    return (
        <div className='container'>
            <Link to='/'>Go back</Link>
            <div className="row">
                {search.map((item) => (
                    <div key={item} className='col-3'>
                        <div className="ing-box">
                            <Link to={`/ingredients/${item.idMeal}`}>
                                <div>{item.strMeal}</div>
                                <img src={item.strMealThumb} alt=""/>
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Search;