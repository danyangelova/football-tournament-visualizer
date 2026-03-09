
import { Route, Routes } from "react-router-dom";
import "./style/style.css";
import Home from "./pages/Home.jsx";
import MatchDetails from "./pages/MatchDetails.jsx";
import TeamDetails from "./pages/TeamDetails.jsx";
import { DataProvider } from "./context/DataContext.jsx";

export default function App() {
   return (
      <DataProvider>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches/:matchId" element={<MatchDetails />} />
            <Route path="/teams/:teamId" element={<TeamDetails />} />
         </Routes>
      </DataProvider>
   );
}
