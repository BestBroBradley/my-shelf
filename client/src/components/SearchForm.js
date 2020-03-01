import React, { useContext } from 'react'
import { Button, Select, Input } from 'semantic-ui-react'
import { SearchContext } from "../utils/SearchContext"

export const SearchForm = () => {

    console.log(useContext(SearchContext))
    const { term, type, handleSelectorChange, handleInputChange, handleSubmit } = useContext(SearchContext)
    
    const options = [
        { key: 'title', data: 'title', text: 'Title', value: 'title'},
        { key: 'author', data: 'author', text: 'Author', value: 'author'},
        { key: 'subject', data: 'subject', text: 'Subject', value: 'subject'},
    ]

    return (
        <div style={{ textAlign: "center", margin: 50 }}>
            <form id="submit-form" onSubmit={handleSubmit} >
                <Input type='text' placeholder='Search...' action>
                    <input onChange={handleInputChange} />
                    <Select onChange={handleSelectorChange} compact options={options} defaultValue='title' id="selectBtn" />
                    <Button type='submit'>Search</Button>
                </Input>
            </form>
        </div>
    )
}