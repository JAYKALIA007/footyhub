import { useLocation } from 'react-router-dom';
export default function DisplayAllCups(){
    const {state} = useLocation();
    // console.log(state)
    const displayLeagues = state.map(league=>{
        return(
            <div key={league.league.id}>
                <p>{league.league.name}</p>
                <img className="leagueLogo" src={league.league.logo} alt={`${league.league.name}'s logo`} height='2px' />
            </div>
        )
    })
    
    return(
        <div>
            <h3 className="text-xl font-bold underline">All Cups Info Page</h3> 
            {displayLeagues}
        </div>
    )
}