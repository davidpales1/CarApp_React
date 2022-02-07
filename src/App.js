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
const data = [
  {
      id: 1,
      name: "Leo Messi",
      imageURL: "https://api.sofascore.com/api/v1/player/12994/image"             
  },
  {
      id: 2,
      name: "Frenkie de Jong",
      imageURL: "https://api.sofascore.com/api/v1/player/795222/image"                
  },
  {
      id: 3,
      name: "Philippe Coutinho",
      imageURL: "https://api.sofascore.com/api/v1/player/119159/image"                
  },
  {
      id: 4,
      name: "Gerard Piqué",
      imageURL: "https://api.sofascore.com/api/v1/player/770/image"               
  }
];


function App() {
  const [car1, setCar1] = React.useState("Volvo");
  let handleChange= (e) => {
    setCar1(e.target.value);
  }
  let handleClick= (e) => {
    let i = document.getElementById("input");

    setCar1(i.value);
  }
  let list = data.map(
    player =>(
        <p>
          <div>{player.id}</div>
          <div>{player.name}</div>
          <div>{player.imageURL}</div>
          <img src={player.imageURL}/>
        </p>
    )
  );
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
        <hr/>
        <div id="playerList">

        </div>
        {list}
      </header>
    </div>
  );
}

export default App;
