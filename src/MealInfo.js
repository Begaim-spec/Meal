// import React, {useEffect, useState} from 'react';
// import {useParams} from 'react-router-dom'
// import axios from "axios";
//
// const MealDetails = () => {
//     const params = useParams()
//     const [meal, setMeal] = useState({})
//
//     useEffect(() => {
//         axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/e24b8949ca43ae54c73aeadd80d402c7d26b1cf3/food.json')
//             .then(({data}) => {
//
//                 const title = data.find(elem => elem.id === params.id)
//                 setMeal(title)
//             })
//     }, [params.id])
//     return (
//         <div className='box'>
//             <img src={meal.image} alt="" className='img'/>
//             <div>{meal.title}</div>
//             <div>{meal.description}</div>
//             <div>{meal.price}$</div>
//         </div>
//     );
// };
//
// export default MealDetails;