import { useState, useEffect } from 'react'

import './App.css';
import GetStarted from './components/GetStarted'
  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Auth from './components/LoginComponents/Auth'

import Dashboard from './components/Dashboard'
import ViewBeer from './components/Cards/ViewBeer'
function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }


  
 

  return (
    <Router>
    <div className="App">
      <header className="App-header">

    
          <Switch>
            <Route exact path="/">
              <GetStarted updateToken={updateToken} /> 
            </Route>
            {/* <Button variant="contained">Get Started</Button> */}

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            
            <Route exact path="/Cards/viewBeer">
              <ViewBeer /> 
            </Route>

          </Switch>

          {/* Add all entires       */}
          {/* <ViewAllBeers /> */}
        
        {/* <Button variant="contained">Get Started</Button> */}

      </header>
    </div>
    </Router>
  );
}

export default App;
