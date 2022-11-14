import axios from 'axios'
import { useState , useEffect } from 'react'
import MatchCard from '../Components/MatchCard'
export default function FetchLiveScores() {
    const [ allLiveMatches , setAllLiveMatches ] = useState([])
    useEffect(()=>{
        fetchLiveScores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function fetchLiveScores(){
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {live: 'all'},
            headers: {
              'X-RapidAPI-Key': '4f48992262msheadf358a529140dp19b4cdjsn31eee22ed35a',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            processData(response.data.response)
          }).catch(function (error) {
            console.error(error);
          });
    }
    function processData(data){
        let tempArray = [];
        for(let i of data){
            // console.log(i)

            let tempObj = {
                key:'',
                homeTeam : '',
                awayTeam : '',
                score : '',
                leagueName : '',
                venue: '',
                timestamp:''
            };
            tempObj.key = i.fixture.id
            tempObj.homeTeam = i.teams.home.name
            tempObj.awayTeam = i.teams.away.name
            tempObj.score = `${i.goals.home} - ${i.goals.away}`
            tempObj.leagueName = `${i.league.country} - ${i.league.name}`
            tempObj.venue = i.fixture.venue.name
            tempObj.timestamp = i.fixture.status.elapsed

            console.log(tempObj)
            tempArray.push(tempObj)
        }
        // console.log(tempArray)
        setAllLiveMatches(tempArray)
        
    }
    return(
        <div>
            <h1 className="text-3xl font-bold underline" > Live Scores Dashboard </h1>
            <div className = "grid grid-cols-2 gap-2">
                {allLiveMatches.length === 0 ? 'loading' :   (allLiveMatches.map(match=>{
                    return(
                        <MatchCard key={match.key} home={match.homeTeam} away={match.awayTeam} score={match.score} league={match.leagueName} venue={match.venue} timestamp={match.timestamp}  />
                    )
                }))}
            </div>

        </div>
    )
}