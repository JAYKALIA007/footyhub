import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState , useEffect } from 'react'
import LeagueTable from './LeagueTable'

export default function LeagueInfo(){
    const { leagueId } = useParams()
    // console.log(leagueId)
    
    const [ leagueInfo , setLeagueInfo ] = useState(null)
    const[ standings , setStandings ] = useState(null)

    useEffect(()=>{
        fetchLeagueInfo(leagueId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // console.log(response.data.response[0]);
            const res = response.data.response[0]
            let tempObj = {
                name : res.league.name,
                country : res.country.name,
                flag : res.country.flag,
                logo : res.league.logo,
                seasons : res.seasons
            };
            fetchLeagueStandings(res.seasons[res.seasons.length - 1].year , leagueId)
            setLeagueInfo(tempObj);
          }).catch(function (error) {
            console.error(error);
          });
    }

    function fetchLeagueStandings( seasonYear , leagueId ) {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
        params: {season: seasonYear, league: leagueId},
        headers: {
          'X-RapidAPI-Key': '4f48992262msheadf358a529140dp19b4cdjsn31eee22ed35a',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        // console.log(response.data.response[0].league.standings);
        setStandings(response.data.response[0].league.standings)
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
                <img src={leagueInfo.flag} alt=" country flag"  height="50" width="50"/>
                <img src={leagueInfo.logo} alt=" league logo"  height="50" width="50"/>
            </div>) }

            {/* {console.log(standings)} */}
            {standings === null ? 'loading league standings...' : <LeagueTable standings={standings}  />}
            {/* <LeagueTable /> */}
        </div>
    )
}