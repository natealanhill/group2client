import './App.css';
import GetStarted from './components/GetStarted'
import logo from './assets/logo.png'
import BeerCard from "./components/Cards/BeerCard"



function App() {

  const welcomeStyles = {
    background: 'rgba(0, 0, 0, 0.55)',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '15%', height: '15%' }} />
        <p>
          <code style={welcomeStyles}>Welcome to your Beer Wingman.</code>
          {/* <p style={{marginTop: '2px', marginBottom: '3px ', fontSize: '15px'}}> Create your own custom BeerJournal to rate, describe, and remember the beers you taste or drink. </p> */}
        </p>
        <GetStarted />
        <BeerCard />
        {/* <Button variant="contained">Get Started</Button> */}
      </header>
    </div>
  );
}

export default App;
