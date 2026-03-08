import Layout from "../components/layout/Layout";

const match = {
   date: "14 Jun 2024",
   homeTeam: "Germany",
   awayTeam: "Scotland",
   score: "5 - 1",
};

const homeLineup = {
   goalkeeper: ["Manuel Neuer"],
   defenders: ["Antonio Rüdiger", "Jonathan Tah", "David Raum"],
   midfielders: ["Pascal Groß", "İlkay Gündoğan", "Jamal Musiala"],
   forwards: ["Kai Havertz", "Leroy Sané"],
};

const awayLineup = {
   goalkeeper: ["Angus Gunn"],
   defenders: ["Jack Hendry", "Kieran Tierney", "Andrew Robertson"],
   midfielders: ["Billy Gilmour", "Scott McTominay", "Callum McGregor"],
   forwards: ["Lyndon Dykes", "Ryan Christie"],
};

export default function MatchDetails() {
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
                     <h2>Germany</h2>

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
                     <h2>Scotland</h2>

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
