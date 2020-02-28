import React from 'react'
import { Title } from '../components/Title'
import { Container, Header } from 'semantic-ui-react'

export const Finished = () => {
    return (
        <>
        <Title icon="check" />
        <div className="ui container">
            <Container fluid>
                <Header as='h2'>Checked off My List</Header>
                <p>
                    Look at you go, you voracious beast, you!
                </p>
                <h3>
                    You've checked __ books off your list!
                </h3>
                <h3>
                    You've read __ pages!
                </h3>
            </Container>
        </div>
        </>
    )
}