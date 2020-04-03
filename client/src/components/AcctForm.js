import React, { useState, useContext } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import { BookshelfContext } from '../utils/BookshelfContext'

export const AcctForm = (props) => {

    const [formState, updateFormState] = useState({
        username: '',
        password: '',
        email: '',
        usernameError: false,
        passwordError: false,
        emailError: false,
        errorMessage: '',
        genError: false
    })

    const { usernameError, passwordError, emailError, errorMessage, genError } = formState

    const { user, setUser } = useContext(BookshelfContext)

    const handleUpdate = (event) => {
        const { name, value } = event.target
        updateFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        const validPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,25}$/)
        const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (formState.username === '') {
            updateFormState({
                ...formState,
                usernameError: true,
                passwordError: false,
                emailError: false,
                errorMessage: 'Please enter a username',
                genError: true
            })
        } else if (!validPassword.test(formState.password)) {
            updateFormState({
                ...formState,
                passwordError: true,
                usernameError: false,
                emailError: false,
                errorMessage: 'Password must include: 8-25 chars, A-Z, a-z, 0-9',
                genError: true
            })
        } else if (!validEmail.test(formState.email)) {
            updateFormState({
                ...formState,
                emailError: true,
                passwordError: false,
                usernameError: false,
                errorMessage: 'Please enter a valid email address',
                genError: true
            })
        } else {
            updateFormState({
                ...formState,
                emailError: false,
                passwordError: false,
                usernameError: false,
                errorMessage: '',
                genError: false
            })
            const newUser = {
                username,
                password,
                email
            }
            API.createUser(newUser).then((res) => {
                if (res.data === "Username already exists") {
                    updateFormState({
                        ...formState,
                        errorMessage: res.data,
                        genError: true
                    })
                } else {
                    setUser({
                        ...user,
                        loggedIn: true,
                        id: res.data._id,
                        books: res.data.books,
                        username: res.data.username
                    })
                    alert("Successfully created account!")
                    setTimeout(() => {
                        props.props.history.push('/search')
                    }, 2000)
                }
            })
        }
    }

    return (
        <>
            <Form error onSubmit={handleSubmit}>
                {genError ? <Message
                    error
                    header="Look's like there's a problem..."
                    content={errorMessage}
                /> : null}
                <Form.Group widths='equal'>
                    <Form.Field
                        id='username'
                        control={Input}
                        label='Username'
                        name='username'
                        placeholder='Username'
                        value={formState.username}
                        onChange={handleUpdate}
                        error={usernameError}
                    />
                    <Form.Field
                        id='password'
                        control={Input}
                        label='Password'
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={formState.password}
                        onChange={handleUpdate}
                        error={passwordError}
                    />
                </Form.Group>
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    name='email'
                    placeholder='example@example.com'
                    value={formState.email}
                    onChange={handleUpdate}
                    error={emailError}
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Confirm'
                />
            </Form>
            <br />
            <hr />
            <br />
            <Link to="/signin">Already have an account?  Sign in!</Link>
        </>
    )
}