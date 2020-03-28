import React, { useState } from 'react'
import { Menu, Icon, Modal, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home")

    const [modalState, setModalState] = useState({
        modalOpen: false
    })

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    const close = () => setModalState({ modalOpen: false })
    const open = () => setModalState({ modalOpen: true })

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = document.getElementById('login-user').value
        const pw = document.getElementById('login-password').value
        if (user !== '' && pw !== '') {
            const loginUser = {
                user,
                pw
            }
            console.log(loginUser)
            close()
        } else alert("Username and password cannot be blank!")
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
                <Modal
                    open={modalState.modalOpen}
                    trigger={<Menu.Menu position='right'>
                        <Link to="/">
                            <Icon style={{ marginTop: "8px", marginRight: "8px" }}
                                onClick={open}
                                size='large'
                                name='user secret'
                            />
                        </Link>
                    </Menu.Menu>}>
                    <Modal.Content>
                        <Form unstackable>
                            <Form.Group widths={2}>
                                <Form.Input id='login-user' label='Username' placeholder='Username' />
                                <Form.Input id='login-password' label='Password' placeholder='Password' type='password' />
                            </Form.Group>
                            <br />
                            <Button onClick={handleSubmit} type='submit'>Submit</Button>
                        </Form>
                        <br />
                        <hr />
                        <br />
                        <Link onClick={close} to="/createacct">Need an account?  Click to sign up!</Link>
                    </Modal.Content>
                    )
                </Modal>
            </Menu>
        </div>
    )
}
