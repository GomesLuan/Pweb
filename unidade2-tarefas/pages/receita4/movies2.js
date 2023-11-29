import useSWR from 'swr'

export default function Movies2(){
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=13d3fcf1&s=bagdad`, fetcher)    
    console.log(data)
    console.log(error)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            { data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div> ) }
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}