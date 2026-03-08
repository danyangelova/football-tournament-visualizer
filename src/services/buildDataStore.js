import { fetchTextFile } from "./fetchTextFile";
import { parseCSV } from "../utils/parseCSV";
import { mapTeam, mapPlayer, mapMatch, mapRecord } from "../utils/mappers";
import { normalize } from "./normalize";

export async function buildDataStore() {

    // 1. fetch CSV files
    const [teamsText, playersText, matchesText, recordsText] = await Promise.all([
        fetchTextFile("/data/teams.csv"),
        fetchTextFile("/data/players.csv"),
        fetchTextFile("/data/matches.csv"),
        fetchTextFile("/data/records.csv")
    ]);

    // 2. parse CSV text -> raw row objects
    const teamsRows = parseCSV(teamsText);
    const playersRows = parseCSV(playersText);
    const matchesRows = parseCSV(matchesText);
    const recordsRows = parseCSV(recordsText);

    // 3. transform rows -> domain objects
    const teams = teamsRows.map(mapTeam);
    const players = playersRows.map(mapPlayer);
    const matches = matchesRows.map(mapMatch);
    const records = recordsRows.map(mapRecord);

    // 4. normalize domain objects into indexed store
    const store = normalize({ teams, players, matches, records });

    return store;
}