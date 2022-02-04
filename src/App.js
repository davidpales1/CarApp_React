import logo from './logo.svg';
import './App.css';
import Owner from './Owner.js'
import React from 'react';
let Car = (props) => {
  return(
    <div><div>Brand: {props.brand}</div><div>Model:{props.model}</div>
            <Owner date={props.date} owner={props.owner}/>
</div>
    
  );
}

function App() {
  const [car1, setCar1] = React.useState("Volvo");
  let handleChange= (e) => {
    setCar1(e.target.value);
  }
  let handleClick= (e) => {
    let i = document.getElementById("input");

    setCar1(i.value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
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
        <Car brand={car1} model="444" date="2001" owner="jihad"/>
        <hr/>
        <Car brand="Tesla" model="222" date="2010" owner="jihad"/>
        <input type="text" id="input" onChange={handleChange}></input>
        <button onClick={handleClick}>button</button>
      </header>
    </div>
  );
}

export default App;
