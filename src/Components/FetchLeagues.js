import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayLeagues from './DisplayLeagues'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function FetchLeagues(){
    const [ leagues , setLeagues ] = useState([])
    const [ cups , setCups ] = useState([])
    const [ familiarLeagues , setFamiliarLeagues ] = useState([])
    const [ familiarCups , setFamiliarCups ] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        fetchLeagues()
    },[])
    function fetchLeagues(){
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            headers: {
              'X-RapidAPI-Key': '4f48992262msheadf358a529140dp19b4cdjsn31eee22ed35a',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            // console.log(response.data.response);
            processData(response.data.response)
          }).catch(function (error) {
            console.error(error);
          });
    }
    function processData(data) {
        let leaguesArray = [] , cupsArray = [] ;
        for(let i of data){
            if(i.league.type === 'Cup')
                cupsArray.push(i)
            else if(i.league.type === 'League')
                leaguesArray.push(i)
        }
        // console.log(leaguesArray)
        setLeagues(leaguesArray)
        setCups(cupsArray)
        
        const temp1 = JSON.parse(JSON.stringify(leaguesArray.slice(0,10)))
        const temp2 = JSON.parse(JSON.stringify(cupsArray.slice(0,5)))
        setFamiliarLeagues(temp1)
        setFamiliarCups(temp2)
    }
    function navigateToAll(arg){
        if(arg === 'leagues')
            navigate('/leagues', { state: leagues });
        else if(arg === 'cups')
            navigate('/cups', { state: cups });
    }

    return(
        <div className=" border-2 border-black m-2 max " >

            <div>
                <h3 className="text-xl font-bold underline">Leagues</h3>   
                { familiarLeagues.length===0 ? 'Loading' :  <DisplayLeagues  leagues={familiarLeagues} />} 
                <button className="bg-slate-400 p-1 m-5" onClick={()=>{navigateToAll('leagues')}}  > Show More </button> 
            </div>

            <div>
                <h3 className="text-xl font-bold underline">Leagues</h3>   
                { familiarCups.length===0 ? 'Loading' :  <DisplayLeagues  leagues={familiarCups} />} 
                <button className="bg-slate-400 p-1 m-5" onClick={()=>{navigateToAll('cups')}}  > Show More </button> 
            </div>
        </div>
    )
}