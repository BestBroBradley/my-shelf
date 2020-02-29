import React, { useState } from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

export const SearchForm = () => {

    const [input, setInput] = useState({
        type: "",
        term: ""
    });

    const { type, term } = input

    const options = [
        { key: 'title', data: 'title', text: 'Title', value: 'title' },
        { key: 'author', data: 'author', text: 'Author', value: 'author' },
        { key: 'genre', data: 'genre', text: 'Genre', value: 'genre' },
    ]

    const handleInputChange = (event) => {
        const { value } = event.target
        setInput({...input, term: value})
        
    }

    const handleSelectorChange = (event) => {
        let searchType = event.target.textContent
        setInput( {...input, type: searchType })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Add API get here.
        console.log(input)
        setInput({
            type: "",
            term: ""
        })
    }

    return (
        <div style={{ textAlign: "center", margin: 50 }}>
            <form id="submit-form" onSubmit={handleSubmit} >
                <Input type='text' placeholder='Search...' action>
                    <input value={term} onChange={handleInputChange} />
                    <Select onChange={handleSelectorChange} compact options={options} defaultValue='title' id="selectBtn" />
                    <Button type='submit'>Search</Button>
                </Input>
            </form>
        </div>
    )
}