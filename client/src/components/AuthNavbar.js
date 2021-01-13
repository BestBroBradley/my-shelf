import React, { useState, useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BookshelfContext } from '../utils/BookshelfContext'

export const AuthNavbar = (props) => {
    
    const { setUser } = useContext(BookshelfContext)

    const [activeTab, setActiveTab] = useState("bookshelf")

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    const handleLogout = () => {
        setUser({
            loggedIn: false,
            books: [],
            username: "",
            id: ""
        })
        alert("Successfully logged out!")
    }

    return (
        <div>
            <Menu pointing secondary>
                <Link to="/">
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
                <Link to="/">
                    <Menu.Item
                        as="div"
                        name='Logout'
                        onClick={handleLogout}
                    />
                </Link>
        </Menu.Menu>
            </Menu>
        </div>
    )
}
