
export function parseDateFlexible(input) {
    if (!input) return null;

    const str = String(input).trim();

    // YYYY-MM-DD
    if (str.includes("-")) {
        const date = new Date(str);
        return isValidDate(date) ? date : null;
    }
    // M/D/YYYY ili D/M/YYYY
    if (str.includes("/")) {
        const [monthOrDay, dayOrMonth, year] = str.split("/").map(Number);
        
        // purvo priemame M/D/YYYY
        let date = new Date(year, monthOrDay - 1, dayOrMonth);
        if (isValidDate(date)) return date;

        // ako ne stane -> D/M/YYYY
        date = new Date(year, dayOrMonth - 1, monthOrDay);
        if (isValidDate(date)) return date;
    }

    return null;
}

function isValidDate(date) {
    return date instanceof Date && !Number.isNaN(date.getTime());
}