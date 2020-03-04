import React from 'react'
import { Title } from "../components/Title"
import { SavedContainer } from "../components/SavedContainer"
import { Container, Header } from 'semantic-ui-react'

export const NoMatch = () => {
    return (
        <>
        <Title icon="hdd" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h1'>404</Header>
                <p>
                    Sorry, looks like we can't find that page.  
                </p>
            </Container>
        </div>
        </>
    )
}