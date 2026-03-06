import { parseDateFlexible } from "./parseDate"
import { parseScore } from "./parseScore"

export function mapPlayer(row) {
    return {
        id: Number(row.ID),
        teamNumber: Number(row.TeamNumber),
        position: row.Position?.trim() ?? "",
        fullName: row.fullName?.trim() ?? "",
        teamId: Number(row.teamID)
    }
}

export function mapTeam(row) {
    return {
        id: Number(row.ID),
        name: row.Name?.trim() ?? "",
        managerFullName: row.ManagerFullName?.trim() ?? "",
        group: row.Group?.trim() ?? "",
    }
}

export function mapRecord(row) {
    return {
        id: Number(row.ID),
        playerId: Number(row.PlayerID),
        matchId: Number(row.MatchID),
        fromMinutes: Number(row.fromMinutes),
        toMinutes: row.toMinutes === null ? 90 : Number(row.toMinutes)
    }
}

export function mapMatch(row) {
    return {
        id: Number(row.ID),
        teamAId: Number(row.ATeamID),
        teamBId: Number(row.BTeamID),
        date: parseDateFlexible(row.Date),
        score: parseScore(row.Score)
    }
}

