import React, { useContext } from "react"
import { ShelfItem } from "./ShelfItem"
import { Card, Message } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const SavedContainer = () => {
    const { user } = useContext(BookshelfContext)
    const bookshelf = (user.books.filter(book => {
        if ((book.isRead) === false) {
            return book
        }
    })).sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    return (
        <Card.Group style={{ justifyContent: "center" }}>
            {bookshelf.length === 0 ?
                (<Message
                    color='blue'
                    icon='exclamation'
                    header='Your bookshelf is empty'
                    content='Head over to our search page to add some titles to your library.'
                />) : (bookshelf.map(book => <ShelfItem key={book._id} data={book}/>))}
        </Card.Group>
    )
}