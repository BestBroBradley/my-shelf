import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export const Title = (props) => (
    <>
        <div>
            <Header style={{ marginTop: "50px" }} as='h2' icon textAlign='center'>
                <Icon name={props.icon} circular />
            </Header>
        </div>
    </>
)