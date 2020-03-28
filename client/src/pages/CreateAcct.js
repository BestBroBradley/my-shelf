import React from 'react'
import { Title } from "../components/Title"
import { AcctForm } from "../components/AcctForm"
import { Container, Header } from 'semantic-ui-react'

export const CreateAcct = () => {
    return (
        <>
        <Title icon="paperclip" />
        <div className="ui container">
            <Container fluid style={{marginBottom: 50}}>
                <Header as='h2'>Create a New Account</Header>
                <p>
                    Hello there!  Your virtual bookshelf awaits.
                </p>
            </Container>
            <AcctForm />
        </div>
        </>
    )
}