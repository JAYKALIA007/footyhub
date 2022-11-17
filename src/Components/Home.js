import FetchLiveScores from './FetchLiveScores';
import FetchLeagues from './FetchLeagues';
export default function Home(){
    return(
        <div className="flex flex-row">
            <div className="basis-1/4"><FetchLeagues/></div>
            <div className="basis-1/2"><FetchLiveScores/></div>
            <div className="basis-1/4 border-2 border-black m-2">Top Teams</div>
        </div>
    )
}