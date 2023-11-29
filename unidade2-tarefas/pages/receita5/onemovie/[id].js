import useSWR from 'swr'
import { useRouter } from 'next/router'
import {theFetcher} from '../movies3'
import {Table} from 'antd'

export default function Movies3() {
    const router = useRouter() //ex.: tt0044388
    const {data, error} = useSWR(`https://www.omdbapi.com/?apikey=13d3fcf1&i=${router.query.id}`, theFetcher)

    const columns = [
        {
            title: 'Poster',
            dataIndex: 'Poster',
            key: 'Poster'
        },
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title'
        },
        {
            title: 'Year',
            dataIndex: 'Year',
            key: 'Year'
        },
        {
            title: 'Runtime',
            dataIndex: 'Runtime',
            key: 'Runtime'
        },
    ]

    return (
        <div>
            <TheMovie data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''}} columns={columns}/>
        </div>
    )
}

export function TheMovie({data, columns}) {
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)

    data.Poster = <img src={data.Poster}/>

    return (
        <div> 
            {
                <div> {<Table dataSource={[data]} columns={columns}/>} </div>
            } 
        </div>
    )
}