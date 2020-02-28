import React, { Component, useState, useEffect } from 'react'
import { Menu, Segment, Icon } from 'semantic-ui-react'

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home")

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    return (
        <div>
            <Menu pointing secondary>
                <Menu.Item
                    name='search'
                    active={activeTab === 'search'}
                    onClick={() => handleItemClick('search')}
                />
                <Menu.Item
                    name='saved'
                    active={activeTab === 'saved'}
                    onClick={() => handleItemClick('saved')}
                />
                <Menu.Menu position='right'>
                    <Icon style={{marginTop: "8px", marginRight: "8px"}}
                    size='large'
                    name='home'
                    />
                </Menu.Menu>
            </Menu>

            <Segment>
                <img src='/images/wireframe/media-paragraph.png' />
            </Segment>
        </div>
    )
}