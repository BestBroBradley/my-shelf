import React, { useContext } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const FinishedCard = (props) => {
    const { removeFromLibrary } = useContext(BookshelfContext)
    const { title, categories, synopsis, author, _id } = props.data

    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{author} | {categories ? categories : "No genre available."}</Card.Meta>
                    <Card.Description>
                        { synopsis ? (synopsis.split("."))[0] : "No summary available for this work"}.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='yellow' onClick={()=> removeFromLibrary(_id)}>
                            Delete this Title
                        </Button>
                    </div>
                </Card.Content>
            </Card>
    )
}