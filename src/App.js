import './App.css';
import Header from './Components/Header'
import { Routes, Route } from "react-router-dom";

import Home from './Components/Home'
import DisplayAllLeagues from './Components/DisplayAllLeagues';
import DisplayAllCups from './Components/DisplayAllCups';
import LeagueInfo from './Components/LeagueInfo'

function App() {
  return (
    <div className="App max-w-full " >
      <Header/>
      {/* <div className="flex flex-row">
        <div className="basis-1/4"><FetchLeagues/></div>
        <div className="basis-1/2"><FetchLiveScores/></div>
        <div className="basis-1/4 border-2 border-black m-2">Top Teams</div>
      </div> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/leagues" element={<DisplayAllLeagues />}  />
        <Route path="/cups" element={<DisplayAllCups />}  />
        <Route path="league/leagueId=:leagueId" element={<LeagueInfo />} />
      </Routes>
    </div>
  );
}

export default App;
