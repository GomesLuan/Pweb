import useSWR from 'swr'
import {useState} from 'react'
import {Table} from 'antd'

export default function Movies3() {
    const [url, setUrl] = useState('')
    const {data, error} = useSWR(url, theFetcher)

    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title'
        },
        {
            title: 'Year',
            dataIndex: 'Year',
            key: 'Year'
        }
    ]

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('https://www.omdbapi.com/?apikey=13d3fcf1&s=bagdad')
        else setUrl('')
    }

    return (
        <div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''} columns={columns}/>
        </div>
    )
}

export async function theFetcher(url) {
    if (url === null || url === '') return {Search:''}
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({data, show, columns}) {
    if (!show) return (<div></div>)    
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    return (
        <div> {data.Search.map((m) => <div><a href={`onemovie/${m.imdbID}`} target="_blank">{m.Title}</a></div>)} </div>
    )
}

export function TheLink({url, handler}){    
    return (
        <div>
            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}