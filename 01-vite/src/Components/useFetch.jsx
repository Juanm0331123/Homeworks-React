import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.text();
                if (data.startsWith('<!doctype')) {
                    throw new Error('Error: La respuesta no es JSON');
                }

                setData(JSON.parse(data));
                setIsLoading(false);
            } catch (error) {
                setHasError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, isLoading, hasError };
};
