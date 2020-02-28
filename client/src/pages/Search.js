import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Title } from '../components/Title'

export const Search = () => {
    return (
        <>
        < Title icon="book" /> 
        <div className="ui container">
            <Container fluid>
                <Header as='h2'>Jonesing for something to read?</Header>
                <p>
                    Whether you're looking for something new or wanting to remind yourself to check out that new Nora Roberts novel your roommate recommended, our search service has just what you need!
                </p>
            </Container>
        </div>
        </>
    )
}