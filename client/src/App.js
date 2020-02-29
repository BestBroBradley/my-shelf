import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchContext } from './utils/SearchContext'
import { Navbar } from "./components/Navbar"
import { Search } from "./pages/Search"
import { Bookshelf } from "./pages/Bookshelf"
import { Finished } from "./pages/Finished"

function App() {

  const [state, setState] = useState ({
    term: "",
    type: "",
    handleInputChange: (event) => {
      const { value } = event.target
      setState({ ...state, term: value })
    },
    handleSubmit: (event) => {
      event.preventDefault()
      console.log(state)
    },
    handleSelectorChange: (event) => {
      const type = event.target.textContent
      setState({ ...state, type: type })
    }
  })

  return (
    <Router>
      <Navbar />
        <SearchContext.Provider value={state}>
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
        </SearchContext.Provider>
    </Router>
      );
    }
    
    export default App;
