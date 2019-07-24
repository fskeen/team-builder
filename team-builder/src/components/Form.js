import React, { useState, useEffect } from 'react';


function Form (props) {
    const {submit} = props;

  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const handleChange = (event) => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
      console.log("handling change!")
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user)
  }

    return (
        <form onSubmit={submit}>
            <fieldset>
                <legend>Add Team Member</legend>
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
                    type="text"
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