import Layout from "../components/layout/Layout";

const matches = [
   {
      date: "14 Jun 2024",
      homeTeam: "Germany",
      homeGroup: "Group A",
      awayTeam: "Scotland",
      awayGroup: "Group A",
      score: "5 - 1",
   },
   {
      date: "15 Jun 2024",
      homeTeam: "Hungary",
      homeGroup: "Group A",
      awayTeam: "Switzerland",
      awayGroup: "Group A",
      score: "1 - 3",
   }, 
   {
      date: "14 Jun 2024",
      homeTeam: "Germany",
      homeGroup: "Group A",
      awayTeam: "Scotland",
      awayGroup: "Group A",
      score: "5 - 1",
   },
   {
      date: "15 Jun 2024",
      homeTeam: "Hungary",
      homeGroup: "Group A",
      awayTeam: "Switzerland",
      awayGroup: "Group A",
      score: "1 - 3",
   }, 
];

export default function Home() {
   return (
      <Layout>
         <main className="home-layout">
            <section className="matches-section">
               <div className="section-header">
                  <div>
                     <h1>Tournament Matches</h1>
                  </div>
               </div>

               <div className="matches-list">
                  {matches.map((match, index) => (
                     <article className="match-card" key={index}>
                        <div className="match-date">{match.date}</div>

                        <div className="match-row">
                           <div className="team">
                              <div className="team-info">
                                 <h3>{match.homeTeam}</h3>
                                 <span>{match.homeGroup}</span>
                              </div>
                           </div>

                           <div className="match-score">
                              <span className="score">{match.score}</span>
                           </div>

                           <div className="team team-right">
                              <div className="team-info align-right">
                                 <h3>{match.awayTeam}</h3>
                                 <span>{match.awayGroup}</span>
                              </div>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>
            </section>
         </main>
      </Layout>
   );
}
