import React, { useState, useEffect } from "react";

import "./App.css";

function App() {

  const [planets, setPlanets] = useState([]);

  const [selectedPlanet, setSelectedPlanet] = useState("");

  const [characters, setCharacters] = useState([]);




  useEffect(() => {

    fetch("https://swapi.dev/api/planets/")

      .then((response) => response.json())

      .then((data) => setPlanets(data.results));

  }, []);




  const handleSelectChange = (event) => {

    setSelectedPlanet(event.target.value);

    const planet = planets.find((planet) => planet.name === event.target.value);

    if (planet) {

      Promise.all(

        planet.residents.map((url) => fetch(url).then((res) => res.json()))

      ).then((characters) => setCharacters(characters));

    }

  };




  return (

    <div>

      <h1>Planetas de Star Wars</h1>

      <select onChange={handleSelectChange}>

        {planets.map((planet) => (

          <option key={planet.name} value={planet.name}>

            {planet.name}

          </option>

        ))}

      </select>

      <div>

        <h2>Personajes en {selectedPlanet}</h2>

        <ul>

          {characters.map((character) => (

            <li key={character.name}>{character.name}</li>

          ))}

        </ul>

      </div>

    </div>

  );

}




export default App; */




//CON ASYNC

import "./App.css";

import React, { useState, useEffect } from "react";




function App() {

  const [planets, setPlanets] = useState([]);

  const [selectedPlanet, setSelectedPlanet] = useState("");

  const [characters, setCharacters] = useState([]);




  useEffect(() => {

    async function fetchPlanets() {

      const response = await fetch("https://swapi.dev/api/planets/");

      const data = await response.json();

      setPlanets(data.results);

    }

    fetchPlanets();

  }, []);




  const handleSelectChange = async (event) => {

    setSelectedPlanet(event.target.value);

    const planet = planets.find((planet) => planet.name === event.target.value);

    if (planet) {

      const characters = await Promise.all(

        planet.residents.map((url) => fetch(url).then((res) => res.json()))

      );

      setCharacters(characters);

    }

  };




  return (

    <div>

      <h1>Planetas de Star Wars</h1>

      <select onChange={handleSelectChange}>

        {planets.map((planet) => (

          <option key={planet.name} value={planet.name}>

            {planet.name}

          </option>

        ))}

      </select>

      <div>

        <h2>Personajes en {selectedPlanet}</h2>

        <ul>

          {characters.map((character) => (

            <li key={character.name}>{character.name}</li>

          ))}

        </ul>

      </div>

    </div>

  );

}




export default App;