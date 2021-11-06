import React, {useEffect, useState} from 'react';

import Layout from "../../components/Layout";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Search = () => {
    const [meals, setMeals] = useState([])
    const [find, setFind] = useState('')
    const history = useHistory()

    const handleSearch = (e) => {
        setFind(e.target.value)
    }
    const findFood = (e) => {
        e.preventDefault()
        if (find === '' ){
            return "Заполните поле!"
        }
        history.push(`/browse/${find}`)
    }

    useEffect(() => {
        axios ('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data))
    }, [])
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>Home</Link>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
                            <button className="btn btn-outline-success" type="submit" onClick={findFood}>Search</button>
                        </form>
                    </div>
                </nav>
        </>
    );
};

export default Search;