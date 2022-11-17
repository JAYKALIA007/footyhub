import  { Link } from 'react-router-dom'
export default function DisplayLeagues( { leagues } ){
    const displayLeagues = leagues.map(league=>{
        return(
            <Link to={`/league/leagueId=${league.league.id}`} key={league.league.id} className="hover:underline " >
                <p>{league.league.name}</p>
                {/* <img src={league.league.logo} alt={`${league.league.name}'s logo`} /> */}
            </Link>
        )
    })
    return(
        <div>
            {displayLeagues}
        </div>
    )
}