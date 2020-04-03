import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchContext } from './utils/SearchContext'
import { BookshelfContext } from './utils/BookshelfContext'
import API from './utils/API'
import { AuthNavbar } from "./components/AuthNavbar"
import { UnauthNavbar } from "./components/UnauthNavbar"
import { Search } from "./pages/Search"
import { Welcome } from "./pages/Welcome"
import { Bookshelf } from "./pages/Bookshelf"
import { Finished } from "./pages/Finished"
import { NoMatch } from "./pages/NoMatch"
import { CreateAcct } from "./pages/CreateAcct"
import { SignInPage } from "./pages/SignInPage"

function App() {

  const [user, setUser] = useState({
    loggedIn: false,
    books: [],
    username: "",
    id: ""
  })

  const [search, updateSearch] = useState({
    term: "",
    type: "Title",
    results: []
  })

  const [library, updateLibrary] = useState({
    books: [],
    totalPages: 0
  })

  useEffect(() => {
    loadBooks()
  }, [user.loggedIn])

  const getCount = () => {
    let totalPages = 0
    const { books } = library
    for (const book of books) {
      if (book.isRead === true) { totalPages += books.pageCount }
    }
    updateLibrary({ ...library, totalPages: totalPages })
  }

  const addToLibrary = (data) => {
    API.addBook(data)
      .then(res => {
        console.log(res)
        loadBooks()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const loadBooks = () => {
    API.getUserBooks(user.id)
      .then(res => {
        setUser({ ...user, books: res.data })
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

  const emptyFinished = () => {
    API.deleteRead(user.id)
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
    document.getElementById("submit-form").reset()
  })

  const handleSelectorChange = (event => {
    const type = event.target.textContent
    updateSearch({ ...search, type: type })
  })

  const googleSearch = (query => {
    API.search(query)
      .then(res => {
        const results = res.data.items.map(item => [{
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          pages: item.volumeInfo.pageCount,
          summary: item.volumeInfo.description,
          categories: item.volumeInfo.categories
        }])
        updateSearch({ ...search, results: results })
      })
      .catch(err => console.log(err))
  })

  return (
    <>
      {user.loggedIn ? <Router>
        <SearchContext.Provider value={{ search, handleInputChange, handleSubmit, handleSelectorChange, googleSearch }}>
          <BookshelfContext.Provider value={{ user, setUser, library, getCount, addToLibrary, emptyFinished, removeFromLibrary, markAsRead, loadBooks }}>
            <AuthNavbar />
            <Switch>
              <Route exact path="/" component={Bookshelf} />
              <Route exact path="/read" component={Finished} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/createacct" component={CreateAcct} />
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="*" component={NoMatch} />
            </Switch>
          </BookshelfContext.Provider>
        </SearchContext.Provider>
      </Router> : <Router>
          <BookshelfContext.Provider value={{ user, setUser }}>
            <UnauthNavbar />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/createacct" component={CreateAcct} />
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="*" component={Welcome} />
            </Switch>
          </BookshelfContext.Provider>
        </Router>}
    </>
  );
}

export default App;
