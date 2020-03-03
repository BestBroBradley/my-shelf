import React, { useContext } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const Result = (props) => {
    const { title, id, pages, authors, summary, categories } = props.data[0]
    const { addToLibrary, library } = useContext(BookshelfContext)
    
    function check (event) {
        
    }


    function add (event) {
        const { books } = library
        for (let i=0; i < books.length; i++) {
            if ((books[i].hasOwnProperty("title")) && (books[i].title === title)) {
                event.target.textContent = "Already in library"
                return
            }}
        event.target.textContent = "Added to Library"
        const newBook = 
        {title, id, pageCount: pages, author: authors, synopsis: summary, isRead: false, categories }
        addToLibrary(newBook)
    }

    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{ authors ? authors[0] : "No author available"} | {categories ? categories : "No genre available."}</Card.Meta>
                    <Card.Description>
                        {summary ? summary : "No summary available for this work."}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button id="addBook" basic color='green' onClick={add}>
                            {props.c1}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
    )
}