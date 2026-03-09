export function parseScore(scoreStr) {
    if (scoreStr == null) return null;

    const str = String(scoreStr).trim();
    if (!str) return null;

    const parts = str.split("-");
    if (parts.length !== 2) return null;

    const a = parseInt(parts[0], 10);
    const b = parseInt(parts[1], 10);

    return { a, b };
}