import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState , useEffect } from 'react'
export default function LeagueInfo(){
    const { leagueId } = useParams()
    // console.log(leagueId)
    
    const [ leagueInfo , setLeagueInfo ] = useState(null)
    useEffect(()=>{
        fetchLeagueInfo(leagueId)
    },[])

    function fetchLeagueInfo(leagueId){
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {id: leagueId},
            headers: {
              'X-RapidAPI-Key': '4f48992262msheadf358a529140dp19b4cdjsn31eee22ed35a',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data.response[0]);
            const res = response.data.response[0]
            let tempObj = {
                name : res.league.name,
                country : res.country.name,
                flag : res.country.flag,
                logo : res.league.logo,
                seasons : res.seasons
            };
            setLeagueInfo(tempObj);
          }).catch(function (error) {
            console.error(error);
          });
    }

    return(
        <div>
            League Info 
            {/* <pre>{JSON.stringify(leagueInfo)}</pre> */}
            { leagueInfo === null ? 'loading...' : (<div>
                <p>{leagueInfo.name}</p>
                <p>{leagueInfo.country}</p>
                <img src={leagueInfo.flag} alt=" country flag"  />
                <img src={leagueInfo.logo} alt=" league logo"  />
            </div>) }
        </div>
    )
}