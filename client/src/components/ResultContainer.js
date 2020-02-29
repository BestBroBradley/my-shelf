import React from "react"
import { Result } from "./Result"
import { Card } from 'semantic-ui-react'

export const ResultContainer = (props) => {
    return (
    <Card.Group style={{justifyContent: "center"}}>
        <Result c1={props.c1} c2={props.c2}/>
        <Result c1={props.c1} c2={props.c2}/>
        <Result c1={props.c1} c2={props.c2}/>
        <Result c1={props.c1} c2={props.c2}/>
    </Card.Group>
    )
}