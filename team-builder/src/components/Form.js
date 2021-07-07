import React, { useState, useEffect } from 'react';


function Form (props) {
    const {user, setUser, team, setTeam} = props;

  const handleChange = (event) => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
    //   console.log("handling change!")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user???", user)
    if (user.name && user.email && user.role) {
        setTeam([...team, user]);
        return setUser({ name: "", email: "", role: "" });
    } else {
     return alert("Please fill out all fields.")   
    }
}

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend><h1>Add Team Member</h1></legend>
                <label for="name">
                    <p>Enter team member name</p>
                    <input
                    type="text"
                    name="name"
                    placeholder=" Full name here"
                    value={user.name}
                    onChange={handleChange}
                    />
                </label>
                <label for="email">
                <p>Enter team member email</p>
                    <input
                    type="email"
                    name="email"
                    placeholder=" example@example.com"
                    value={user.email}
                    onChange={handleChange}
                    />
                </label>
                <label for="role">
                <p>Enter team member role</p>
                    <input
                    type="text"
                    name="role"
                    placeholder=" Lead Example Coordinator"
                    value={user.role}
                    onChange={handleChange}
                    />
                </label>
                <button type="submit">
                    Submit
                </button>
            
            </fieldset>
        </form>
    )
}

export default Form;