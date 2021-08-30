// import React, {useState, useEffect} from "react";
// import axios from "axios";
//
// const Users = () => {
//         const [users, setUsers] = useState([])
//         useEffect(() => {
//                 axios('https://jsonplaceholder.typicode.com/users')
//                     .then(res => setUsers(res.data))
//
//         }, [])
//
//         return (
//             <div>
//                     {
//                             users.map(item =>(
//                                     <div >
//                                             <div>{item.name}</div>
//                                             <div>{item.email}</div>
//                                     </div>
//                                 )
//                             )
//                     }
//             </div>
//         )}
//
// export default Users