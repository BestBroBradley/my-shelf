import React from 'react'
import { Title } from "../components/Title"
import { SignIn } from "../components/SignIn"
import { Container, Header } from 'semantic-ui-react'

export const SignInPage = () => {
    return (
        <>
        <Title icon="user secret" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h2'>Sign in to your Account</Header>
                <p>
                    Welcome back, friend!
                </p>
            </Container>
            <SignIn />
        </div>
        </>
    )
}