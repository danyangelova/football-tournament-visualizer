import { useEffect } from "react";
import { fetchTextFile } from "./services/fetchTextFile";
import { parseCSV } from "./utils/parseCSV";
import { mapperTests } from "./tests.js";

export default function App() {
   useEffect(() => {
      async function test() {
         const text = await fetchTextFile("/data/players.csv");
         // console.log(text);
         const rows = parseCSV(text);
         // console.log(rows);
         // console.log("first row:", rows[0]);
      }

      test().catch(console.error);
   }, []);

   useEffect(() => {
      mapperTests(); 
   }, []);
}
