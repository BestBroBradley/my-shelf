import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const SignIn = () => {

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
        } else alert("Username and password cannot be blank!")
    }

    return (
        <>
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
            <Link to="/createacct">Need an account?  Click to sign up!</Link>
        </>
    )
}