import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const UnauthNavbar = () => {

    const [activeTab, setActiveTab] = useState("welcome")

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    return (
        <div>
            <Menu pointing secondary>
                <Link to="/">
                    <Menu.Item
                        as="div"
                        name='Welcome'
                        active={activeTab === 'welcome'}
                        onClick={() => handleItemClick('welcome')}
                    />
                </Link>
                <Link to="/createacct">
                    <Menu.Item
                        as="div"
                        name='Create Account'
                        active={activeTab === 'create'}
                        onClick={() => handleItemClick('create')}
                    />
                </Link>
                <Link to="/signin">
                    <Menu.Item
                        as="div"
                        name='Sign In'
                        active={activeTab === 'signin'}
                        onClick={() => handleItemClick('signin')}
                    />
                </Link>
            </Menu>
        </div>
    )
}