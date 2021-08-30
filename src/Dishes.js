// import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";
// import axios from 'axios'
//
// const Dishes = () => {
//     const [products, setProducts] = useState({})
//     const random = Math.floor(Math.random() * 10)
//     useEffect(() => {
//         axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
//             .then(({data}) => {
//                 const meat = data.find(elem => elem.id === random)
//                 setProducts(meat)
//             },[])
//         return (
//             <div>
//                 <div></div>
//             </div>
//
//         );
//     });
// };
//     export default Dishes;
