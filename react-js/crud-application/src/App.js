// import logo from './logo.svg';
import './App.css';
import Create from './Components/create';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Read from './Components/read';
import Update from './Components/update';


function App() {
  return (
    <Router>
      <div className="main">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>
        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
