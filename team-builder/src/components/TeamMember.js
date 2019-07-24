import React from "react";

function TeamMember (props) {

    return (
        <div className="member-card">
            <div className="member-info">
            <h3>{props.name}</h3>
                <h5>{props.email}</h5>
                <h5>{props.role}</h5>
            </div>
            <button className="edit-btn">Edit</button>
        </div>
    )
}

export default TeamMember;