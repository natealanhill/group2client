import './App.css';
import GetStarted from './components/GetStarted'
  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Dashboard from './components/Dashboard'

function App() {


  return (
    <Router>
    <div className="App">
      <header className="App-header">

    
          <Switch>
            <Route exact path="/">
              <GetStarted /> 
            </Route>
            {/* <Button variant="contained">Get Started</Button> */}

            <Route exact path="/dashboard">
              <Dashboard />
            </Route>

          </Switch>
<<<<<<< HEAD


        <img src={logo} className="App-logo" alt="logo" style={{ width: '15%', height: '15%' }} />
        <p>
          {/* <code style={welcomeStyles}>Welcome to your Beer Wingman.</code> */}
          {/* <p style={{marginTop: '2px', marginBottom: '3px ', fontSize: '15px'}}> Create your own custom BeerJournal to rate, describe, and remember the beers you taste or drink. </p> */}
        </p>
        <GetStarted />
        <BeerCard />
=======
       
       
        
>>>>>>> 00d97450c00d2f893716485c2a2595d15f20f169
        {/* <Button variant="contained">Get Started</Button> */}

      </header>
    </div>
    </Router>
  );
}

export default App;
