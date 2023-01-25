import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "heart", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = (e) => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal </button>
      <div className="animal-list">{renderAnimals} </div>
    </div>
  );
}

export default App;
