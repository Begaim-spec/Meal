// import React, {useEffect, useState} from 'react';
// import axios from 'axios'
//
// const Pokemon = () => {
//     const [pokemon, setPokemon] = useState([])
//     const [search, setSearch] = (useState(''))
//     const filteresPokemons = pokemon.filter(el => el.name.toLowerCase().includes(search))
//
//     const handleSearch = (e) => {
//         setSearch(e.target.value.toLowerCase())
//     }
//     useEffect(() => {
//         axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
//             .then(({data}) => setPokemon(data.pokemon))
//     })
//     return (
//         <div>
//             <input type="text" onChange={handleSearch} placeholder='search...'/>
//             {
//
//                 filteresPokemons.map(el =>
//                 <div>
//                     <img src={el.img} alt=""/>
//                     <div>{el.name}</div>
//                 </div>
//                 )
//             }
//         </div>
//     );
// };
//
// export default Pokemon;