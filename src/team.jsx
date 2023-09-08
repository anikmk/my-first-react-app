import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)
    function handleAddPlayer(){
        const newCount = team + 1
        setTeam(newCount)

    }
    function handleRemovePlayer(){
        const newTeamCount = team - 1
        setTeam(newTeamCount)
    }
    const teamStyle = {
        border: "2px solid yellow",
        margin: "20px",
        padding: "20px"

    }
    return (
        <div style={teamStyle}>
            <h4>player:{team}</h4>
            <button onClick={handleAddPlayer}>add player</button>
            <button onClick={handleRemovePlayer}>remove player</button>
        </div>
    )
}