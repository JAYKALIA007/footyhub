import axios from "axios";
import {useState } from 'react'
import FetchTeamInfo from "../FetchData/FetchTeamInfo";
// import FetchTeamInfo from '../FetchData/FetchTeamInfo'

export default function MatchCard( {home , away , score , league , venue , timestamp } ){
    const [ teamInfo , setTeamInfo ] = useState(null)

    function fetchTeamInfo(teamId){
        console.log(teamId);
        // <FetchTeamInfo  teamId={teamId} />
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
            params: {id: teamId },
            headers: {
              'X-RapidAPI-Key': '4f48992262msheadf358a529140dp19b4cdjsn31eee22ed35a',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {

            setTeamInfo(response.data.response[0])
            // console.log(teamInfo)
          }).catch(function (error) {
            console.error(error);
          });
    }
    return(
        <div className="relative bg-white m-2 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div><span className = "xl font-bold hover:underline cursor-pointer  " onClick={()=>fetchTeamInfo(home.id)}>{home.name}</span> vs <span className = "xl font-bold hover:underline cursor-pointer  " onClick={()=>fetchTeamInfo(away.id)}>{away.name}</span></div>
            <div> <span className="xl font-bold" >{`${score} - (${timestamp}')`}</span></div>
            <p>{league}</p>
            {/* <p>{venue}</p> */}
            {/* {console.log(teamInfo)} */}
            {teamInfo === null ?  '' : <FetchTeamInfo teamInfo={teamInfo}  /> }
        </div>
    )
}