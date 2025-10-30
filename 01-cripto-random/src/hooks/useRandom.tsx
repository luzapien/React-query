import { useQuery } from '@tanstack/react-query'

const getCryptoNumber = async (): Promise<number> => {
    // throw "No se pudo obtener el número"
    const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
    ).then((resp) => resp.json())
    return Number(response)
}

export const useRandom = () => {
    const randomQuery = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        // retry: false
        // staleTime: 1000 * 5,
    })

    return { randomQuery }
}
