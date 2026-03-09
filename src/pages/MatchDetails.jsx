import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { selectMatchDetails } from "../services/selectors";
import { Link } from "react-router-dom";

export default function MatchDetails() {
   const state = useContext(DataContext);
   const { matchId } = useParams();

   const { match, homeLineup, awayLineup } = selectMatchDetails(state, Number(matchId));

   return (
      <Layout>
         <main className="match-layout">
            <section className="match-details-section">
               <div className="section-header">
                  <div>
                     <h1>Match Details</h1>
                  </div>
               </div>

               <div className="match-result-card">
                  <div className="team-name">{match.homeTeam}</div>
                  <div className="match-score">{match.score}</div>
                  <div className="team-name">{match.awayTeam}</div>
               </div>

               <div className="match-date">{match.date}</div>

               <div className="lineups">
                  <div className="lineup-card">
                     <h2>
                        <Link to={`/teams/${match.homeTeamId}`}>{match.homeTeam}</Link>
                     </h2>
                     <div className="position-group">
                        <h4>Goalkeeper</h4>
                        <ul>
                           {homeLineup.goalkeeper.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="position-group">
                        <h4>Defenders</h4>
                        <ul>
                           {homeLineup.defenders.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="position-group">
                        <h4>Midfielders</h4>
                        <ul>
                           {homeLineup.midfielders.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>
                     <div className="position-group">
                        <h4>Forwards</h4>
                        <ul>
                           {homeLineup.forwards.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className="lineup-card">
                     <h2>
                        <Link to={`/teams/${match.awayTeamId}`}>{match.awayTeam}</Link>
                     </h2>

                     <div className="position-group">
                        <h4>Goalkeeper</h4>
                        <ul>
                           {awayLineup.goalkeeper.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>

                     <div className="position-group">
                        <h4>Defenders</h4>
                        <ul>
                           {awayLineup.defenders.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>

                     <div className="position-group">
                        <h4>Midfielders</h4>
                        <ul>
                           {awayLineup.midfielders.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>

                     <div className="position-group">
                        <h4>Forwards</h4>
                        <ul>
                           {awayLineup.forwards.map((player, index) => (
                              <li key={index}>{player}</li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </Layout>
   );
}
