import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Book from "./components/Book/Book";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Movies from "./components/Home/Movies/Movies";
import Login from "./components/Login/Login";
import MobileApp from "./components/MobileApp/MobileApp";
import NoMatch from "./components/NoMatch/NoMatch";
import Offers from "./components/Offers/Offers";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Theaters from "./components/Theaters/Theaters";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Header />
            <Movies />
          </Route>
          <Route exact path="/theaters">
            <Theaters />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route exact path="/offers">
            <Offers />
          </Route>
          <Route exact path="/mobile_app">
            <MobileApp />
          </Route>
          <PrivateRoute exact path="/book">
            <Book />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
