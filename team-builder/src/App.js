import React, { useState, useEffect } from 'react';

import './App.css';

import Form from "./components/Form"
import TeamList from "./components/TeamList"

function App() {

  const teamArray = ["a", "b", "c"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted!")
    console.log(event.target.value)
    return teamArray.push(event.target.value)
}

  return (
    <div className="App">
      <Form submit={handleSubmit}/>
      <TeamList team={teamArray}/>
    </div>
  );
}

export default App;
