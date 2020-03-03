import React, { useContext } from 'react'
import { Container, Header, Card, Button, Message } from 'semantic-ui-react'
import { Title } from '../components/Title'
import { FinishedCard } from '../components/FinishedCard'
import { BookshelfContext } from '../utils/BookshelfContext'

export const Finished = () => {
    const { library, emptyFinished } = useContext(BookshelfContext)
    const finishedBooks = (library.books.filter(book => {
        if ((book.isRead) === true) {
            return book
        }
    }))

    return (
        <>
            <Title icon="check" />
            <div style={{ marginBottom: 50 }} className="ui container">
                <Container fluid>
                    <Header as='h2'>Checked off My List</Header>
                    {(finishedBooks.length !== 0) ? (<><p>
                        Look at you go, you voracious beast, you!
                </p></>) : (null)}
                </Container>
                {(finishedBooks.length === 0) ? (<Message
                    style={{ marginTop: 30 }}
                    color='olive'
                    icon='tasks'
                    header="Looks like you haven't finished any books yet."
                    content="When you finish books in your bookshelf, they'll show up here."
                />) : (null)}
            </div>
            <Card.Group style={{ justifyContent: "center" }}>
                {finishedBooks.map(book => < FinishedCard key={book._id} data={book}/>)}
            </Card.Group>
            {(finishedBooks.length !== 0) ? (<div style={{ margin: 20, textAlign: "center" }}>
                <Button size='huge' basic color='red' onClick={emptyFinished}>
                    Clear this List
                        </Button>
            </div>) : (null) }
        </>
    )
}