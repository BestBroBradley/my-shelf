import React from 'react'
import { Title } from "../components/Title"
import { ResultContainer } from "../components/ResultContainer"
import { Container, Header } from 'semantic-ui-react'

export const Bookshelf = () => {
    return (
        <>
        <Title icon="hdd" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h2'>Your Library</Header>
                <p>
                    You provide the couch and the reading lamp, we'll provide the bookshelf.  Don't worry--we didn't get it from Ikea.  
                </p>
            </Container>
            <ResultContainer c1="Mark as Read" c2="Take off my Shelf"/>
        </div>
        </>
    )
}