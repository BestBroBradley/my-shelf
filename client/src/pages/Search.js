import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'

export const Search = () => {

    return (
        <>
        < Title icon="book" /> 
        <div className="ui container">
            <Container fluid>
                <Header as='h2'>Jonesing for something to read?</Header>
                <p>
                    Whether you're looking for something new or just wanting to set a reminder for yourself, our search service has just what you need!
                </p>
            </Container>
        </div>
        < SearchForm />
        </>
        
    )
}