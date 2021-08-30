// import React, {useEffect, useState} from 'react';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import axios from "axios";
//
// const Meals = () => {
//     const [meals, setMeals] = useState([])
//     useEffect(() => {
//         axios('https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/e24b8949ca43ae54c73aeadd80d402c7d26b1cf3/food.json')
//             .then(({data}) => setMeals(data))
//     }, [])
//     return (
//         <div>
//             {
//                 meals.map(item =>
//                    <div className='container'>
//                        <div className='row'>
//                           <div className='col-3'>
//                               <div key='item.id' >
//                                   <Link to={`/meal-details/${item.id}`}>{item.title}
//                                       <img src={item.image} alt=""/>
//                                   </Link>
//                               </div>
//                           </div>
//                        </div>
//                    </div>
//                 )
//             }
//         </div>
//     );
// };
//
// export default Meals;