
export function normalize({ teams, players, matches, records }) {
    const teamsById = {};
    for (const team of teams) {
        teamsById[team.id] = team;
    }

    const playersById = {};
    const playersByTeamId = {};
    for (const player of players) {
        playersById[player.id] = player;

        const teamId = player.teamId;
        if (!playersByTeamId[teamId]) {
            playersByTeamId[teamId] = [];
        }
        playersByTeamId[teamId].push(player);
    }

    const matchesById = {};
    for (const match of matches) {
        matchesById[match.id] = match;
    }

    const recordsByMatchId = {};
    for (const record of records) {
        const matchId = record.matchId;

        if (!recordsByMatchId[matchId]) {
            recordsByMatchId[matchId] = [];
        }
        recordsByMatchId[matchId].push(record);
    }

    return {
        teams,
        players,
        matches,
        records,
        teamsById,
        playersById,
        matchesById,
        playersByTeamId,
        recordsByMatchId,
    };
}