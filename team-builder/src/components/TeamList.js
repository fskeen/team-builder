import React, { useEffect } from "react";
import TeamMember from "./TeamMember";

function TeamList (props) {
    const {team} = props;
    console.log(team)

    // useEffect(() => {
    //     return console.log("yay")
    // }, [team])

    return (
        <section className="team-list">
        <h2>Team Members</h2>
        {props.team.map( a => (
            <TeamMember key={a.name} name={a.name} email={a.email} role={a.role}/>
            )   
        )}
    </section>)

}

export default TeamList;