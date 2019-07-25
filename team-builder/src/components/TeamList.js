import React, { useEffect } from "react";
import TeamMember from "./TeamMember";

function TeamList (props) {
    const {team, setTeam, memberToEdit, setMemberToEdit} = props;
    console.log(team)

    return (
        <section className="team-list">
        <h2>Team Members</h2>
        {props.team.map( a => (
            <TeamMember key={a.name} name={a.name} email={a.email} role={a.role} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} team={team}/>
            )   
        )}
    </section>)

}

export default TeamList;