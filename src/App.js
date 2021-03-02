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
       
       
        
        {/* <Button variant="contained">Get Started</Button> */}

      </header>
    </div>
    </Router>
  );
}

export default App;
