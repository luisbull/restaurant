import logo from './logo.svg';
import './App.css';
/*bellow we import also a component AdiosMundo that is not using export default. 
  however is better to separate components in their own files*/
// import HolaMundo, { AdiosMundo } from './components/HolaMundo';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo/>
        <AdiosMundo/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
