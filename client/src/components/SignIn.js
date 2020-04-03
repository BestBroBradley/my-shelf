import React, { useState, useContext } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../utils/API'
import { BookshelfContext } from '../utils/BookshelfContext'

export const SignIn = (props) => {

    const { setUser } = useContext(BookshelfContext)

    const [formState, updateFormState] = useState({
        username: '',
        password: '',
        userError: false,
        passwordError: false,
        errorMessage: '',
        genError: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        updateFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!formState.username) {
            updateFormState({
                ...formState,
                userError: true,
                passwordError: false,
                errorMessage: "Please enter a username",
                genError: true
            })
        } else if (!formState.password) {
            updateFormState({
                ...formState,
                passwordError: true,
                userError: true,
                errorMessage: "Please enter a password",
                genError: true
            })
        } else if (formState.username && formState.password) {
            updateFormState({
                ...formState,
                userError: false,
                passwordError: false,
                errorMessage: '',
                genError: false
            })
            const user = document.getElementById('login-user').value
            const pw = document.getElementById('login-password').value
            const loginUser = {
                user,
                pw
            }
            API.login(loginUser)
                .then((res) => {
                    if (res.data === "Password doesn't match") {
                        updateFormState({
                            ...formState,
                            password: '',
                            userError: false,
                            passwordError: false,
                            errorMessage: 'Incorrect password',
                            genError: true
                        })
                    } else {
                        setUser({
                            ...user,
                            id: res.data._id,
                            books: res.data.books,
                            username: res.data.username,
                            loggedIn: true
                        })
                    }
                })

        }
    }

    return (
        <>
            <Form error unstackable>
                {formState.genError ? <Message
                    error
                    content={formState.errorMessage}
                /> : null}
                <Form.Group widths={2}>
                    <Form.Input id='login-user' label='Username' value={formState.username} name='username' placeholder='Username' onChange={handleChange} />
                    <Form.Input id='login-password' label='Password' value={formState.password} name='password' placeholder='Password' onChange={handleChange} type='password' />
                </Form.Group>
                <br />
                <Button onClick={handleSubmit} type='submit'>Submit</Button>
            </Form>
            <br />
            <hr />
            <br />
            <Link to="/createacct">Need an account?  Click to sign up!</Link>
        </>
    )
}