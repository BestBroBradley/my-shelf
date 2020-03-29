import React, { useState } from 'react'
import { Form, Input, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../utils/API'

export const AcctForm = () => {

    const [formState, updateFormState] = useState({
        username: '',
        password: '',
        email: '',
        usernameError: true,
        passwordError: true,
        emailError: true
    })

    const handleUpdate = (event) => {
        const {name, value} = event.target
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
        const newUser = {
            username,
            password,
            email
        }
        console.log(newUser)
        if (username && password && email) {
            API.createUser(newUser)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='username'
                        control={Input}
                        label='Username'
                        name='username'
                        placeholder='Username'
                        value={formState.username}
                        onChange={handleUpdate}
                        error={{
                            content: 'Username must be at least 8 characters',
                            pointing: 'below',
                          }}
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
                        error={{
                            content: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and a number',
                            pointing: 'below',
                          }}
                    />
                </Form.Group>
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    name='email'
                    placeholder='joe@schmoe.com'
                    value={formState.email}
                    onChange={handleUpdate}
                    error={{
                        content: 'Please enter a valid email address',
                        pointing: 'below',
                      }}
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