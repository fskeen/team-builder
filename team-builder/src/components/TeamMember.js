import React, { useState } from "react";

function TeamMember (props) {
    let {name, email, role, memberToEdit, setMemberToEdit, team, setTeam} = props;

    const [hidden, setHidden] = useState(true)

    const handleChange = (event) => {
        const updatedUser = { ...memberToEdit, [event.target.name]: event.target.value };
        setMemberToEdit(updatedUser);
        console.log(memberToEdit)
      }

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
        </div>
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
                type="text"
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