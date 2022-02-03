import logo from './logo.svg';
import './App.css';
/*bellow we import also a component AdiosMundo that is not using export default. 
  however is better to separate components in their own files*/
// import HolaMundo, { AdiosMundo } from './components/HolaMundo';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import HelloWorld from './components/HelloWorld';
import UserObject from './components/UserObject';
import FnHello from './components/FunctionHello';

function App() {

  const userName = "Tom";
  const userAge = 36;

  //object
  const userObject = {
    // name: "John",
    age: 40,
    color: "red",
  }

  //function
  const saludarFn = name => {
    console.log("Hola " + name );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo nombre="Luis Toro" lugar="Boyaca" />
        <AdiosMundo name ="Alfredo Espitia" place="Colombia" />
        <HelloWorld name={userName} age={userAge}/>
        <UserObject userInfo={userObject} /> */}
        <FnHello userInfo={userObject} saludarFn={saludarFn}/>
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
