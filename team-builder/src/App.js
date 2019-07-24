import React, { useState, useEffect } from 'react';

import './App.css';

import Form from "./components/Form"
import TeamList from "./components/TeamList"

function App() {

  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const [teamArray, setTeamArray] = useState([{name: "Bob", email: "blah@gmal.com", role: "Junior Web Dev"}]);

  return (
    <div className="App">
      <Form user={user} setUser={setUser} team={teamArray} setTeam={setTeamArray}/>
      <TeamList team={teamArray}/>
    </div>
  );
}

export default App;
