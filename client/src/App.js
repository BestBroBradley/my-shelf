import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchContext } from './utils/SearchContext'
import { BookshelfContext } from './utils/BookshelfContext'
import API from './utils/API'
import { Navbar } from "./components/Navbar"
import { Search } from "./pages/Search"
import { Bookshelf } from "./pages/Bookshelf"
import { Finished } from "./pages/Finished"

function App() {
  const [search, updateSearch] = useState({
    term: "",
    type: "Title",
    results: []
  })

  const [library, updateLibrary] = useState({
    books: []
  })

  useEffect(() => {
    loadBooks()
  }, [])

  const addToLibrary = (data) => {
    API.addBook(data)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const loadBooks = () => {
    API.getUserBooks()
    .then(res => {
      updateLibrary(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const removeFromLibrary = (id) => {
    API.deleteBook(id)
    .then(res => {
      loadBooks()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const markAsRead = (id) => {
    API.updateBook(id)
    .then(res => {
      loadBooks()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleInputChange = ((event) => {
    const { value } = event.target
    updateSearch({ ...search, term: value })
  })

  const handleSubmit = (event => {
    event.preventDefault()
    googleSearch(search)
  })

  const handleSelectorChange = (event => {
    const type = event.target.textContent
    updateSearch({ ...search, type: type })
  })

  const googleSearch = (query => {
    API.search(query)
      .then(res => {
        console.log(res)
        const results = res.data.items.map(item => [{
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          pages: item.volumeInfo.pageCount,
          // image: item.volumeInfo.imageLinks.smallThumbnail,
          summary: item.volumeInfo.description,
          categories: item.volumeInfo.categories
        }])
        console.log(results)
        updateSearch({ ...search, results: results })
      })
      .catch(err => console.log(err))
  })

  return (
    <Router>
      <Navbar />
      <SearchContext.Provider value={{search, handleInputChange, handleSubmit, handleSelectorChange, googleSearch} }>
      <BookshelfContext.Provider value={{library, addToLibrary, removeFromLibrary, markAsRead, removeFromLibrary, loadBooks } }>
        <Switch>
          <Route exact path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route exact path="/read">
            <Finished />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </BookshelfContext.Provider>
      </SearchContext.Provider>
    </Router>
  );
}

export default App;
