import React from 'react'
import { Title } from "../components/Title"
import { SavedContainer } from "../components/SavedContainer"
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
            <SavedContainer c1="Mark as Read" c2="Take off my Shelf"/>
        </div>
        </>
    )
}