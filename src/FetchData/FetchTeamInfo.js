// import axios from "axios";
// import {useState , useEffect} from 'react'
export default function FetchTeamInfo( {teamInfo} ){
    
    

    return(
        <div>
            {console.log(teamInfo)}
            <hr/>
            <h2 className="text-xl" >Team Info</h2>
            <h5>Name - {teamInfo.team.name}</h5>
            <h5>Country - {teamInfo.team.country}</h5>
            <h5>Founded - {teamInfo.team.founded}</h5>
            <img src={teamInfo.team.logo} alt={`${teamInfo.team.name}'s logo`}  />
        </div>
    )

}