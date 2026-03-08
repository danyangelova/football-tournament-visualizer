import { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";

import "./style/style.css";
import { buildDataStore } from "./services/buildDataStore";

// import Home from "./pages/Home.jsx";
// import MatchDetails from "./pages/MatchDetails.jsx";
// import TeamDetails from "./pages/TeamDetails.jsx";

export default function App() {
   useEffect(() => {
      async function testLoad() {
         try {
            const store = await buildDataStore();

            console.log("FULL STORE:", store);
            console.log("teams:", store.teams);
            console.log("players:", store.players);
            console.log("matches:", store.matches);
            console.log("records:", store.records);
            
            console.log("teamsById:", store.teamsById);
            console.log("playersById:", store.playersById);
            console.log("matchesById:", store.matchesById);

            console.log("playersByTeamId:", store.playersByTeamId);
            console.log("recordsByMatchId:", store.recordsByMatchId);
         } catch (error) {
            console.error("loadAllData failed:", error);
         }
      }
      testLoad();
   }, []);

   // return (
   // <Routes>
   //    <Route path="/" element={<Home />} />
   //    <Route path="/matches" element={<MatchDetails />} />
   //    <Route path="/teams" element={<TeamDetails />} />
   // </Routes>
   // );
}
