import useSWR from 'swr'
import {useState} from 'react'

export default function Movies33(){
    const [state, setState] = useState({url:''})
    const {data, error} = useSWR(state.url, async (u) => {
        if (!state.url) return {Search:''}
        if (state.url === '') return {Search:''}
        const res = await fetch(`${state.url}`)
        const json = await res.json();
        return json;
    })

    const onEnterHandler = (e) => {
        e.preventDefault()
        let s = e.target.value
        if (s === '') {
            setState({url:''})
        }
        else setState({url:`https://www.omdbapi.com/?apiKey=13d3fcf1&s=${s}`})
    }

    return (
        <div>
            <TheForm handler={onEnterHandler}/>
            <TheMovies data={error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={state.url !== ''}/>
        </div>
    )
}

export function TheMovies({data,show}){
    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    const [state, setState] = useState({data: data.Search})

    const sortHandler = e => {
        e.preventDefault()
        let cloneData = [...state.data]
        cloneData.sort((m, n) => {if (m.Title < n.Title) return -1})
        if (JSON.stringify(state.data) === JSON.stringify(cloneData)) cloneData.reverse()
        setState({data: cloneData})
    }

    return (
        <div>
            <TheLink handler={sortHandler}/>
            { state.data.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            
        </div>
    )
}

export function TheForm({handler}){
    const keyVerifier = e => {
        if (e.key === ('Enter')) {
            handler(e)
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="titleSearchString">Filtro de Título</label>
                <input id="s" name="titleSearchString" type="text" autoComplete="true" onKeyDown={keyVerifier}/>
            </form>
        </div>
    )
}

export function TheLink({handler}){
    return (
        <div>
            <a href="/movies3.js" onClick={handler}>Ordenar</a>
        </div>
    )
}