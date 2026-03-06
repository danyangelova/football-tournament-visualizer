//fetchTextFIle('/data/players.csv')

export async function fetchTextFile(path) {
    const response = await fetch(path);

    if(!response.ok) {
        throw new Error(`Failed to fetch ${path} (${response.status} ${response.statusText})`)
    }
    return await response.text();
}