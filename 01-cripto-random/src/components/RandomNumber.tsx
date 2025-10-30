import { useQuery } from '@tanstack/react-query'

const getCryptoNumber = async (): Promise<number> => {
    const response = await fetch(
        'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
    ).then((resp) => resp.json())
    return Number(response)
}

export const RandomNumber = () => {
    const { data } = useQuery({
        queryKey: ['randomNumber'],
        queryFn: getCryptoNumber,
        // staleTime: 1000 * 5,
    })

    return <div>Random Number: {data}</div>
}
