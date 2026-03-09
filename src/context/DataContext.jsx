import { createContext, useEffect, useState } from "react";
import { buildDataStore } from "../services/buildDataStore";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function build() {
            const data = await buildDataStore();
            setState(data);
            setLoading(false);
        }

        build();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    );
}