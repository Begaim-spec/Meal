// import React, {useEffect, useState} from 'react';
// import axios from 'axios'
//
// const Game = () => {
//     const [pokemon, setPokemon] = useState([])
//     const [goal, setGoal] = useState({})
//     const [answers, setAnswers] = useState([])
//
//
//
//     function getRandomInt ()  {
//         return Math.round(Math.random() * 150);
//     }
//
//
//     getRandomInt()
//     const start = () => {
//         const random = Math.floor(Math.random()*150)
//         setGoal(pokemon.find(item => item.id === random))
//
//         function numbers () {
//             return [random, Math.min, Math.max, Math.round]
//         }
//         numbers()
//         const num = [random, Math.min, Math.max, Math.round]
//         setAnswers(numbers.map(elem =>  {
//           return  pokemon.find(poke => poke.id === elem
//           )}))
//         console.log(num)
//     }
//
//     const compareAnswer = () => {
//         start()
//
//         if (pokemon.id === goal.id){
//         setAnswers('Угадал')
//         }
//         else{
//             setAnswers('Не угадал')
//         }
//     }
//     compareAnswer()
//
//
//
//     useEffect(()  => {
//         axios('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
//             .then(({data}) => setPokemon(data.pokemon))
//     }, [])
//     return (
//         <div key='id'>
//             <button onClick={start}>Start</button>
//
//         </div>
//     );
// };
//
// export default Game;