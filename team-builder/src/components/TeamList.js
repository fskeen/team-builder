import React from "react";
import TeamMember from "./TeamMember";

function TeamList (props) {
    const {team} = props;

    return (
        <div>
            <p>I AM A TEAM LIST COMPONENT</p>
            {team.map( a => (
                <TeamMember />
                )   
            )}
        </div>
    )
}

export default TeamList;