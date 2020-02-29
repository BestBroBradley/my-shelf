import React, { useContext } from 'react'
import { Button, Select, Input } from 'semantic-ui-react'
import { SearchContext } from "../utils/SearchContext"

export const SearchForm = () => {

    const { term, type, handleSelectorChange, handleInputChange, handleSubmit } = useContext(SearchContext)
    
    const options = [
        { key: 'title', data: 'title', text: 'Title', value: 'title' },
        { key: 'author', data: 'author', text: 'Author', value: 'author' },
        { key: 'genre', data: 'genre', text: 'Genre', value: 'genre' },
    ]

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