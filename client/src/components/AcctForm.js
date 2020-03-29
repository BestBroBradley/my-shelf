import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../utils/API'

export const AcctForm = () => {


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
                        placeholder='Username'
                    />
                    <Form.Field
                        id='password'
                        control={Input}
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />
                </Form.Group>
                <Form.Field
                    id='email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com'
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