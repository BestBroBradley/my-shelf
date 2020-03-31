import React, { useState, useContext } from 'react'
import { Menu, Icon, Modal, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BookshelfContext } from '../utils/BookshelfContext'
import API from '../utils/API'

export const UnauthNavbar = () => {

    const { user, setUser } = useContext(BookshelfContext)

    const { loggedIn } = user

    const [activeTab, setActiveTab] = useState("home")
    const [modalState, setModalState] = useState({
        modalOpen: false,
        username: '',
        password: ''
    })

    const handleItemClick = (active) => {
        setActiveTab(active)
    }

    const close = () => setModalState({ modalOpen: false })
    const open = () => setModalState({ modalOpen: true })

    const handleChange = (event) => {
        const { name, value } = event.target
        setModalState({
            ...modalState,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = document.getElementById('login-user').value
        const pw = document.getElementById('login-password').value
        if (user !== '' && pw !== '') {
            const loginUser = {
                user,
                pw
            }
            API.login(loginUser)
                .then((res) => {
                    console.log(res)
                    setUser({
                        ...user,
                        id: res.data._id,
                        books: res.data.books,
                        username: res.data.username,
                        loggedIn: true
                    })
                })
            close()
        } else alert("Username and password cannot be blank!")
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
                                <Form.Input id='login-user' name='username' onChange={handleChange} value={modalState.username} label='Username'/>
                                <Form.Input id='login-password' name='password' onChange={handleChange} value={modalState.password} label='Password' type='password' />
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