import React, { useState } from "react";

function TeamMember (props) {
    // props i am importing, destructured
    let {name, email, role, memberToEdit, setMemberToEdit, team} = props;

    // using state to toggle visibility on the edit menus
    const [hidden, setHidden] = useState(true)

    // change handler for the edit form
    const handleChange = (event) => {
        const updatedUser = { ...memberToEdit, [event.target.name]: event.target.value };
        setMemberToEdit(updatedUser);
        console.log(memberToEdit)
    }

    // this function is what makes the edited values show up. if the edit menu is showing, add an edited flag to show that the info has been edited, then splice the edited info into the existing array and remove the old value. The edited flag is currently unused, but could be useful in future.
    const edit = () => {
        setHidden(!hidden);

        console.log("pre-splice", team)
        console.log("testing name: ", name)
        if (hidden===false) {
            const editedUser = {...memberToEdit, edited: true}
            setMemberToEdit(editedUser);
            team.splice((team.findIndex(arr => arr.name===name)), 1, memberToEdit);
            console.log("post-splice", team)
            return;
        }
        return 
    }

    const remove = () => {

        return team.splice((team.findIndex(arr => arr.name===name)), 1);
    }
    
    // the actual JSX to return, wrapped in a fragment. Since it's possible to edit the values to be empty strings, I display a message about editing to add that value if that has happened.
    return (
        <>
        <div className="member-card">
        <img src="https://imgur.com/aYLtRcB.jpg"></img>

            <div className="member-info">
                <h3>{name.length > 0 ? name : "Edit to add name"}</h3>
                <h5>{email.length > 0 ? email : "Edit to add email"}</h5>
                <h5>{role.length > 0 ? role : "Edit to add role"}</h5>
            </div>
            
            <button className="edit-btn" onClick={() => edit()}>{hidden ? "Edit Details" : "Save Edits!"}</button>
            <button className="remove-btn" onClick={() => remove()}>Remove team member</button>
        </div>

        {/* Hiding and showing the edit form. If the user info is an empty string, there's a placeholder to display instead. */}
        {hidden ? null : 
            <form className="member-info">
            <h4>New info</h4>
            <input
                type="text"
                name="name"
                placeholder={name.length > 0 ? name : "Type name here"}
                onChange={handleChange}>
            </input>
            <input
                type="email"
                name="email"
                placeholder={email.length > 0 ? email : "Type email here"}
                onChange={handleChange}>
            </input>
            <input
                type="text"
                name="role"
                placeholder={role.length > 0 ? role : "Type role here"}
                onChange={handleChange}>
            </input>
        </form>}
        </>
    )
}

export default TeamMember;