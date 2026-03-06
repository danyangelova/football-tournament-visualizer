
export function parseCSV(text) {
    if (typeof text !== "string") {
        throw new TypeError("The function parseCSV(text) expected a string");
    }

    const trimmed = text.trim();
    if (!trimmed) return [];

    const lines = trimmed.split(/\r?\n/).filter(line => line.trim() !== "");
    if (lines.length === 0) return [];

    const headers = lines[0].split(",").map(header => header.trim());

    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",").map(value => value.trim());

        const row = {};
        for (let j = 0; j < headers.length; j++) {
            let value = values[j] ?? "";
            if (value === "NULL") value = null;

            row[headers[j]] = value;
        }
        rows.push(row);
    }

    return rows;
}