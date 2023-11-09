import logo from './logo.svg';
import './App.css';
import Map from "./Map"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Custom map example</p>
        <a
          className="App-link"
          href="https://github.com/igormayachenkov/custom-map-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          The code is here
        </a>
      </header>
      <Map/>
    </div>
  );
}

export default App;
