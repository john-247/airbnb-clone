import React from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import "../styles/App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
