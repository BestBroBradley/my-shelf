import React, { useContext } from "react"
import { Result } from "./Result"
import { Card } from 'semantic-ui-react'
import { SearchContext } from '../utils/SearchContext'

export const ResultContainer = (props) => {
    const { search } = useContext(SearchContext)
    const results = search.results

    return (
    <Card.Group style={{justifyContent: "center"}}>
        {results.map(result => <Result key={result[0].id} c1={props.c1} data={result}/>)}
    </Card.Group>
    )
}