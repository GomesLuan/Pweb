export default function Movies({data}) {
    return (
        <div>
            <div>
                {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- <img src={m.Poster} width="100px"/></div>  )}               
            </div>
        </div>
    )
}

export async function getServerSideProps({context, search="bagdad"}) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=13d3fcf1&s=${search}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}