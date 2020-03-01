import React, { useContext } from "react"
import { Result } from "./Result"
import { Card } from 'semantic-ui-react'
import { SearchContext } from '../utils/SearchContext'

export const ResultContainer = (props) => {
    const { search } = useContext(SearchContext)
    const results = search.results
    return (
    <Card.Group style={{justifyContent: "center"}}>
        {results.map(result => <Result c1={props.c1} c2={props.c2}/>)}
    </Card.Group>
    )
}