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

import react, {useState} from "react";

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
    console.log(`Hola ${name}` );
  }

  const [stateCar, setStateCar] = useState(false);

  const prenderApagar = () => {
    setStateCar(!stateCar);
    // setStateCar(preValue => !preValue); // when we pass it to other components that don't have access to the setCar
    setContar(contar + 1);
  }

  const [contar, setContar] = useState(0);

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HolaMundo nombre="Luis Toro" lugar="Boyaca" />
        <AdiosMundo name ="Alfredo Espitia" place="Colombia" />
        <HelloWorld name={userName} age={userAge}/>
        <UserObject userInfo={userObject} /> */}
        <FnHello userInfo={userObject} saludarFn={saludarFn}/>
        <h4>Clicks: {contar}</h4> 
        <p>El carro esta {stateCar ? "Prendido" : "Apagado"} </p>
        <button onClick={prenderApagar}>prender / apagar</button>

      </header>
    </div>
  );
}

export default App;
