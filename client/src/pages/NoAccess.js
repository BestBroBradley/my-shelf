import React from 'react'
import { Title } from "../components/Title"
import { SignIn } from "../components/SignIn"
import { Container, Header } from 'semantic-ui-react'

export const NoAccess = () => {
    return (
        <>
        <Title icon="user secret" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h2'>You need to sign in to view this page.</Header>
            </Container>
            <SignIn />
        </div>
        </>
    )
}