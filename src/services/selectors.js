
// [
//     {
//         date,
//         homeTeam,
//         homeGroup,
//         awayTeam,
//         awayGroup,
//         score
//     }
// ]
export function selectHomeMatches(state) {
    return state.matches.map((match) => {
        const homeTeam = state.teamsById[match.teamAId];
        const awayTeam = state.teamsById[match.teamBId];

        return {
            id: match.id,
            date: formatDate(match.date),
            homeTeam: homeTeam.name,
            homeGroup: `Group ${homeTeam.group}`,
            awayTeam: awayTeam.name,
            awayGroup: `Group ${awayTeam.group}`,
            score: formatScore(match.score),
        };
    });
}

// {
//     match: {
//         date,
//             homeTeam,
//             awayTeam,
//             score
//     },
//     homeLineup: {
//         goalkeeper,
//             defenders,
//             midfielders,
//             forwards
//     },
//     awayLineup: {
//         goalkeeper,
//             defenders,
//             midfielders,
//             forwards
//     }
// }
export function selectMatchDetails(state, matchId) {
    const matchData = state.matchesById[matchId];

    const homeTeam = state.teamsById[matchData.teamAId];
    const awayTeam = state.teamsById[matchData.teamBId];

    const records = state.recordsByMatchId[matchId] || [];
    const players = records.map((record) => state.playersById[record.playerId]);

    const homePlayers = players.filter((player) => player.teamId === homeTeam.id);
    const awayPlayers = players.filter((player) => player.teamId === awayTeam.id);

    return {
        match: {
            id: matchData.id,
            date: formatDate(matchData.date),
            homeTeam: homeTeam.name,
            homeTeamId: homeTeam.id,
            awayTeam: awayTeam.name,
            awayTeamId: awayTeam.id,
            score: formatScore(matchData.score),
        },
        homeLineup: groupPlayersByPosition(homePlayers),
        awayLineup: groupPlayersByPosition(awayPlayers),
    };
}

// {
//     team: {
//         name,
//             manager,
//             group
//     },
//     roster: [
//         { number, player, position }
//     ]
// }
export function selectTeamDetails(state, teamId) {
    const teamData = state.teamsById[teamId];
    const players = state.playersByTeamId[teamId] || [];

    const roster = players.map((player) => ({
        number: player.teamNumber,
        player: player.fullName,
        position: player.position,
    }));

    return {
        team: {
            name: teamData.name,
            manager: teamData.managerFullName,
            group: teamData.group,
        },
        roster,
    };
}


function groupPlayersByPosition(players) {
    return {
        goalkeeper: players
            .filter((player) => player.position === "GK")
            .map((player) => player.fullName),

        defenders: players
            .filter((player) => player.position === "DF")
            .map((player) => player.fullName),

        midfielders: players
            .filter((player) => player.position === "MF")
            .map((player) => player.fullName),

        forwards: players
            .filter((player) => player.position === "FW")
            .map((player) => player.fullName),
    };
}

function formatDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

function formatScore(score) {
    if (!score || typeof score !== "object") {
        return "";
    }

    return `${score.a} - ${score.b}`;
}