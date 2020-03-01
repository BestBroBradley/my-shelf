import React, { useContext } from "react"
import { Result } from "./Result"
import { Card, Message } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const SavedContainer = (props) => {

    const items = useContext(BookshelfContext)
    console.log(items)
    return (
        <Card.Group style={{ justifyContent: "center" }}>
            <Message
                color='blue'
                icon='exclamation'
                header='Your bookshelf is empty'
                content='Head over to our search page to add some titles to your library.'
            />
        </Card.Group>
    )
}