import React, { useContext } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const ShelfItem = (props) => {
    const { data } = props
    const { title, author, categories, synopsis, _id } = data
    const { markAsRead, removeFromLibrary } = useContext(BookshelfContext)

    const update = () => {
        console.log("update")
        markAsRead(_id)
    }

    const remove = (id) => {
        console.log("remove")
        removeFromLibrary(_id)
    }

    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{author[0]} | {categories ? categories : "No genre available."}</Card.Meta>
                    <Card.Description>
                        {synopsis ? synopsis : "No summary available for this work."}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={update}>
                            Mark as Read
                        </Button>
                        <Button basic color='red' onClick={remove}>
                            Remove from my library
                        </Button>
                    </div>
                </Card.Content>
            </Card>
    )
}