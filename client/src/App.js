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
import { NoAccess } from "./pages/NoAccess"

function App() {

  const [user, setUser] = useState({
    loggedIn: true,
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
  }, [])

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
        loadBooks()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const loadBooks = () => {
    API.getUserBooks()
      .then(res => {
        updateLibrary({ books: res.data })
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
    API.deleteRead()
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

  const handleLogin = (data => {
    API.login(data)
      .then((res) => {
        console.log(res)
        setUser({
          ...user,
          id: res.data._id,
          books: res.data.books,
          username: res.data.username
        })
      })
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
          summary: item.volumeInfo.description,
          categories: item.volumeInfo.categories
        }])
        console.log(results)
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
              <Route exact path="/">
                <Bookshelf />
              </Route>
              <Route exact path="/read">
                <Finished />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/createacct">
                <CreateAcct />
              </Route>
              <Route exact path="/signin">
                <SignInPage />
              </Route>
              <Route exact path="*">
                <NoMatch />
              </Route>
            </Switch>
          </BookshelfContext.Provider>
        </SearchContext.Provider>
      </Router> : <Router>
          <BookshelfContext.Provider value={{ user, setUser, handleLogin }}>
          <UnauthNavbar />
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/createacct" component={CreateAcct} />
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="*" component={NoAccess} />
            </Switch>
          </BookshelfContext.Provider>
        </Router>}
    </>
  );
}

export default App;
