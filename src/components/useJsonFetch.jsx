import { useState, useEffect } from 'react';

export const useJsonFetch = (url, method) => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url, method);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                setData(data);
                setError(null);
            } catch (e) {
                if (e instanceof Error) setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[url, method]);

    return [{ data, isLoading, error}];
};