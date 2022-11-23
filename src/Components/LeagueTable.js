export default function LeagueTable( { standings } ){
    // standings === undefined ? console.log('hello world')  : console.log(standings)
    console.log(standings)
    console.log(standings[0])
    const myTable = standings[0].map(team =>{
        return(
            <tr key={team.team.id} >
                <td>{team.rank}</td>
                <td>{team.team.name}</td>
                <td>{team.points}</td>
            </tr>
            // console.log(team)
        )
    })
    return(
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                    {/* <th>Artist</th>
                    <th>Year</th> */}
                    </tr>
                </thead>
                <tbody>
                    {myTable}
                </tbody>
            </table>
            {/* {standings.map(team => console.log(team[0]))} */}
        </>
    )
}