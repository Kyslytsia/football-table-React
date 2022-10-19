import { useState } from "react";
import "./App.css";
import logo from "./img/premier-league-logo.svg";

function App() {
  const [teams, setTeams] = useState([]);

  fetch(
    "https://apiv2.apifootball.com/?action=get_standings&league_id=148&APIkey=8ae3335bc62c47e82cc2f25563d77afc32533d4cc114dbad15271a8fe38bc766"
  )
    .then((data) => data.json())
    .then((data) => {
      setTeams(data);
    });

  return (
    <div className="App">
      <div className="title">
        <span className="premier">Premier</span>
        <img alt="logo" className="logo" width="70" src={logo} />
        <span className="league">League</span>
      </div>

      <div className="x">
        <span className="w">G</span>
        <span className="w">W</span>
        <span className="w">D</span>
        <span className="w">L</span>
        <span className="w">P</span>
      </div>

      {teams.map((el) => {
        return (
          <div key={el.team_id} className="table">
            <div className="table-info">
              <div className="position">{el.overall_league_position}</div>

              <img
                className="team-icon"
                alt={el.team_name}
                width="35"
                src={el.team_badge}
              />

              <div className="team-name">{el.team_name}</div>
            </div>

            <div className="table-points">
              <div className="games">{el.overall_league_payed}</div>
              <div className="win">{el.overall_league_W}</div>
              <div className="draw">{el.overall_league_D}</div>
              <div className="lose">{el.overall_league_L}</div>
              <div className="points">{el.overall_league_PTS}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
