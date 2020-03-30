import React from 'react'
import { Title } from "../components/Title"
import { SignIn } from "../components/SignIn"
import { Container, Header } from 'semantic-ui-react'

export const Welcome = () => {
    return (
        <>
        <Title icon="hand spock outline" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h2'>Welcome to My Shelf!</Header>
            </Container>
                <h3>My Shelf lets you browse Google's vast collection of library titles, add them to your list, and keep track of which books you've already crossed off.  Whether you read a little or a lot, My Shelf will keep you reading-fit.</h3>
                <h4>Sign in or sign up below!</h4>
                <br/>
                <br/>
            <SignIn />
        </div>
        </>
    )
}