import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MealsList from "../MealsList/MealsList";
import Layout from "../Layout";

const Browse = () => {
    const [search, setSearch] = useState([])
    const [error, setError] = useState('')
    const {all} = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${all}`)
            .then(({data}) => {
                data.meals ? setSearch(data.meals) : setError('Searching dish was not found' )
            })

    })
    return (
        <Layout>
            <Link className="btn btn-outline-dark mt-3" to='/' >Home</Link>
            <p>{error}</p>
            <MealsList meals={search}/>
        </Layout>
    );
};

export default Browse;