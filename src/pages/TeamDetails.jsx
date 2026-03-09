import Layout from "../components/layout/Layout";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { selectTeamDetails } from "../services/selectors";

// const team = {
//    name: "Germany",
//    manager: "Julian Nagelsmann",
//    group: "A",
// };

// const roster = [
//    { number: 1, player: "Manuel Neuer", position: "GK" },
//    { number: 2, player: "Antonio Rüdiger", position: "DF" },
// ];

export default function TeamDetails() {
   const state = useContext(DataContext);
   const { teamId } = useParams();

   const { team, roster } = selectTeamDetails(state, Number(teamId));

   return (
      <Layout>
         <main className="team-layout">
            <section className="team-section">
               <div className="section-header">
                  <h1>Team Details</h1>
                  <p>List of all players in the team</p>
               </div>

               <div className="team-info-card">
                  <h2>{team.name}</h2>
                  <div className="team-details">
                     <span>
                        <strong>Manager:</strong>
                        {team.manager}
                     </span>
                     <span>
                        <strong>Group:</strong>
                        {team.group}
                     </span>
                  </div>
               </div>

               <div className="roster-card">
                  <h3>Team Roster</h3>

                  <table className="roster-table">
                     <thead>
                        <tr>
                           <th>#</th>
                           <th>Player</th>
                           <th>Position</th>
                        </tr>
                     </thead>

                     <tbody>
                        {roster.map((player) => (
                           <tr key={player.number}>
                              <td>{player.number}</td>
                              <td>{player.player}</td>
                              <td>{player.position}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </section>
         </main>
      </Layout>
   );
}
