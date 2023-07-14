import { useJsonFetch } from "./useJsonFetch";

export function GetData() {
    const [{data, isLoading, error}] = useJsonFetch(
        'http://localhost:7070/data',
        {method: 'GET'}, 
    );

    return(
        <>
            {data && <p>data</p>}
        </>
    )
}