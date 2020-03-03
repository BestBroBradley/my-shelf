import React, { useContext } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { BookshelfContext } from '../utils/BookshelfContext'

export const FinishedCard = (props) => {
    const { removeFromLibrary } = useContext(BookshelfContext)
    const { title, synopsis, author, _id } = props.data

    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{author}</Card.Meta>
                    <Card.Description>
                        {synopsis}
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