import { useState, useEffect } from "react";
import "./App.css";
import GetStarted from "./components/GetStarted";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./components/LoginComponents/Auth";
import Dashboard from "./components/Dashboard";
import ViewBeer from "./components/Cards/ViewBeer";

//additions while implmenting the edit endpoint using workout log as template
import {Container, Row, Col} from 'reactstrap';
import EditBeer from './components/Cards/EditBeer';



function App() {
  const [sessionToken, setSessionToken] = useState("");
  //State variables associated with edit endpoint
  const [beers, setBeers] = useState({});
  const [updateActive, setUpdateActive] = useState(false);
  const [beerToUpdate, setBeerToUpdate] = useState({});
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Router>
        <Switch>
          <Route exact path="/">
          <Dashboard /> 
          </Route>
          {/* <Button variant="contained">Get Started</Button> */}

          <Route exact path="/dashboard">
              <Auth updateToken={updateToken} />
          </Route>

          <Route exact path="/Cards/viewBeer">
            <ViewBeer token={sessionToken} />
          </Route>
          <Route exact path="/Cards/viewBeer">
            <ViewBeer token={sessionToken} />
          </Route>
        </Switch>
      </Router>
    ) : (
      <GetStarted updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {protectedViews()}

        {/* Add all entires       */}
        {/* <ViewAllBeers /> */}

        {/* <Button variant="contained">Get Started</Button> */}
      </header>
    </div>
  );
}

export default App;
