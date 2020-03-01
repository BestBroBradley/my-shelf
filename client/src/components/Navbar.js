import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home")

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    return (
        <div>
            <Menu pointing secondary>
                <Link to="/bookshelf">
                <Menu.Item
                    as="div"
                    name='My Bookshelf'
                    active={activeTab === 'bookshelf'}
                    onClick={() => handleItemClick('bookshelf')}
                />
                </Link>
                <Link to="/search">
                <Menu.Item
                    as="div"
                    name='Search'
                    active={activeTab === 'search'}
                    onClick={() => handleItemClick('search')}
                />
                </Link>
                <Link to="/read">
                <Menu.Item
                    as="div"
                    name='Finished Titles'
                    active={activeTab === 'read'}
                    onClick={() => handleItemClick('read')}
                />
                </Link>
                <Menu.Menu position='right'>
                    <Link to="/bookshelf">
                    <Icon style={{marginTop: "8px", marginRight: "8px"}}
                    onClick={() => handleItemClick('bookshelf')}
                    size='large'
                    name='home'
                    />
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
}