import { useRandom } from './hooks/useRandom'

import './App.css'
function App() {
    const { randomQuery } = useRandom()
    return (
        <>
            {randomQuery.isFetching ? <h1>Cargando...</h1> : <h1>Número: {randomQuery.data}</h1>}
            <div>{JSON.stringify(randomQuery.error)}</div>

            {/* <RandomNumber /> */}

            <button disabled={randomQuery.isFetching} onClick={() => randomQuery.refetch()}>
                Nuevo número
            </button>
        </>
    )
}

export default App
