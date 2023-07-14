import { useJsonFetch } from "./useJsonFetch";

export function Loading() {
    const [{data, isLoading, error}] = useJsonFetch(
        'http://localhost:7070/loading',
        {method: 'GET'}, 
    );

    return(
        <>
            <h3>Загрузка</h3>
            {isLoading && <p>Loading...</p>}
            
        </>
    )
}