import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export const Result = (props) => {
    return (
            <Card style={{width: "60%"}}>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Harry Potter and the Sorcerer's Stone</Card.Header>
                    <Card.Meta>J.K. Rowling</Card.Meta>
                    <Card.Description>
                        A young boy discovers that he's a wizard.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
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