import { mapTeam, mapMatch, mapRecord } from "./utils/mappers";

export function mapperTests() {

    const teamRow = {
        ID: "1",
        Name: "Germany",
        ManagerFullName: "Julian Nagelsmann",
        Group: "A",
    };

    const matchRow = {
        ID: "1",
        ATeamID: "1",
        BTeamID: "2",
        Date: "6/14/2024",
        Score: "5.0-1",
    };

    const recordRow = {
        ID: "1",
        PlayerID: "1",
        MatchID: "1",
        fromMinutes: "0",
        toMinutes: null,
    };

    console.log("team:", mapTeam(teamRow));
    console.log("match:", mapMatch(matchRow));
    console.log("record:", mapRecord(recordRow));
}