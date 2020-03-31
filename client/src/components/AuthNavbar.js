import React, { useState, useContext } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BookshelfContext } from '../utils/BookshelfContext'

export const AuthNavbar = (props) => {
    
    const { user, setUser } = useContext(BookshelfContext)

    console.log(user)

    const [activeTab, setActiveTab] = useState("home")
    const [modalState, setModalState] = useState({
        modalOpen: false
    })

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    const close = () => setModalState({ modalOpen: false })
    const open = () => setModalState({ modalOpen: true })

    const handleLogout = () => {
        setUser({
            loggedIn: false,
            books: [],
            username: "",
            id: ""
        })
        console.log("logout")
    }

    const renderModal = <Menu.Menu position='right'>
                <Link to="/">
                    <Menu.Item
                        as="div"
                        name='Logout'
                        onClick={handleLogout}
                    />
                </Link>
        </Menu.Menu>

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
                {renderModal}
            </Menu>
        </div>
    )
}
