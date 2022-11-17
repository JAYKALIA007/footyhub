import axios from 'axios'
import { useState , useEffect } from 'react'
import MatchCard from './MatchCard'
export default function FetchLiveScores() {
    const [ allLiveMatches , setAllLiveMatches ] = useState([])
    const [ toggleFetchAgain , setToggleFetchAgain ] = useState(false)
    useEffect(()=>{
        fetchLiveScores()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[toggleFetchAgain])

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
                homeTeam : {},
                awayTeam : {},
                score : '',
                leagueName : '',
                venue: '',
                timestamp:''
            };
            tempObj.key = i.fixture.id
            tempObj.homeTeam = i.teams.home
            tempObj.awayTeam = i.teams.away
            tempObj.score = `${i.goals.home} - ${i.goals.away}`
            tempObj.leagueName = `${i.league.country} - ${i.league.name}`
            tempObj.venue = i.fixture.venue.name
            tempObj.timestamp = i.fixture.status.elapsed

            // console.log(tempObj)
            tempArray.push(tempObj)
        }
        // console.log(tempArray)
        setAllLiveMatches(tempArray)
    }
    return(
        <div className=" border-2 border-black m-2" >
            <h2 className="text-xl font-bold underline " > Live Scores Dashboard </h2>
            <div className="flex justify-end mr-4 " >
                <p className=" bg-slate-400 p-1 text-xs cursor-pointer inline " onClick={()=>{setToggleFetchAgain(!toggleFetchAgain)}} >Refresh Scores</p>
            </div>
            <div className = "grid grid-cols-2 gap-2 place-content-stretch">
                {allLiveMatches.length === 0 ? 'No matches to show' :   (allLiveMatches.map(match=>{
                    return(
                        <MatchCard key={match.key} home={match.homeTeam} away={match.awayTeam} score={match.score} league={match.leagueName} venue={match.venue} timestamp={match.timestamp}  />
                    )
                }))}
            </div>

        </div>
    )
}