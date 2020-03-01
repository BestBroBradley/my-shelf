import React from 'react'
import { Container, Header, Card, Button, Message } from 'semantic-ui-react'
import { Title } from '../components/Title'
import { FinishedCard } from '../components/FinishedCard'

export const Finished = () => {
    return (
        <>
            <Title icon="check" />
            <div style={{ marginBottom: 50 }} className="ui container">
                <Container fluid>
                    <Header as='h2'>Checked off My List</Header>
                    {/* <p>
                        Look at you go, you voracious beast, you!
                </p> */}
                    {/* <h3>
                        You've checked __ books off your list for a total of __ pages!
                </h3> */}
                </Container>
            <Message
                style={{marginTop: 30}}
                color='olive'
                icon='tasks'
                header="Looks like you haven't finished any books yet."
                content="When you finish books in your bookshelf, they'll show up here."
            />
            </div>
                <Card.Group style={{ justifyContent: "center" }}>
                    < FinishedCard />
                    < FinishedCard />
                    < FinishedCard />
                    < FinishedCard />
                    < FinishedCard />
                </Card.Group>
            <div style={{ margin: 20, textAlign: "center" }}>
                <Button size='huge' basic color='red'>
                    Clear this List
                        </Button>
            </div>
        </>
    )
}