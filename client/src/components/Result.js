import React, { useContext } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const Result = (props) => {
    const { title, id, pages, authors, summary, categories } = props.data[0]
    const { addToLibrary } = useContext(BookshelfContext)

    const add = () => {
        const newBook = 
        {title, id, pageCount: pages, author: authors, synopsis: summary, isRead: false, categories }
        console.log(newBook)
        addToLibrary(newBook)
    }

    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    {/* <Image
                        floated='right'
                        size='mini'
                        src='#'
                    /> */}
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{authors[0]} | {categories ? categories : "No genre available."}</Card.Meta>
                    <Card.Description>
                        {summary ? summary : "No summary available for this work."}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={add}>
                            {props.c1}
                        </Button>
                        <Button basic color='red'>
                            {props.c2}
                        </Button>
                    </div>
                </Card.Content>
            </Card>
    )
}