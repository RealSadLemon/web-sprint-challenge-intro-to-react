import React from 'react';
import { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{axios.get('https://swapi.dev/api/people/')
    .then(res=>{
    setData(res.data);
    })
    .catch(err=>{
    return(
      <div>The API did not connect.</div>
    )
  })}, [])

  useEffect(()=>console.log(data));

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(character=>{
        return <Character birth_year={character.birth_year} eye_color={character.eye_color} gender={character.gender} name={character.name} height={character.height} mass={character.mass} hair_color={character.hair_color} skin_color={character.skin_color} key={character.name} />
      })}
    </div>
  );
}

export default App;
