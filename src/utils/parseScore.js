
export function parseScore(scoreStr) {
    if (scoreStr == null) return null;

    const str = String(scoreStr).trim();
    if (!str) return null;

    const parts = str.split("-");
    if (parts.length !== 2) return null;

    const a = Number(parts[0]);
    const b = Number(parts[1]);

    return { a, b };
}