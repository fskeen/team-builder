import React, { useState, useEffect } from 'react';

import './App.css';

import Form from "./components/Form"
import TeamList from "./components/TeamList"

function App() {

  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const [teamArray, setTeamArray] = useState([{name: "Bob", email: "blah@gmal.com", role: "Junior Web Dev"}]);

  const [memberToEdit, setMemberToEdit] = useState({name: "", email: "", role: "" })

  return (
    <div className="App">
      <Form
        user={user} setUser={setUser} team={teamArray} setTeam={setTeamArray} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit}/>

      <TeamList team={teamArray} setTeam={setTeamArray} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit}/>
    </div>
  );
}

export default App;
