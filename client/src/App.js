import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { Search } from "./pages/Search"
import { Bookshelf } from "./pages/Bookshelf"
import { Finished } from "./pages/Finished"

function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  );
}

export default App;
