import { useJsonFetch } from "./useJsonFetch";

export function GetError() {
    const [{data, isLoading, error}] = useJsonFetch(
        'http://localhost:7070/error',
        {method: 'GET'}, 
    );
    
    return(
        <>
            <h3>Ошибка</h3>
            {error && <p>Error</p>}
            
        </>
    )
}