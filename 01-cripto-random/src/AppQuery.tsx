import { useQuery } from '@tanstack/react-query'

import './App.css'
import { RandomNumber } from './components/RandomNumber'

const getCryptoNumber = async (): Promise<number> => {
    // throw "No se pudo obtener el número"
    const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
    ).then((resp) => resp.json())
    return Number(response)
}

export const AppQuery = () => {
    const {
        isLoading,
        isFetching,
        data: number,
        error,
        refetch,
    } = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        // retry: false
        // staleTime: 1000 * 5,
    })

    return (
        <>
            {isFetching ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}
            <div>{JSON.stringify(error)}</div>

            {/* <RandomNumber /> */}

            <button disabled={isFetching} onClick={() => refetch()}>
                Nuevo número
            </button>
        </>
    )
}

export default App
