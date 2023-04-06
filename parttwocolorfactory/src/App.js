import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import AllColors from "./AllColors"
import ColorsDetails from "./ColorsDetails"
import ColorPicker from "./ColorPicker"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {

  const [defaultColors, setDefaultColors] = useState([{colorval: "#FFB6C1", colorname: "Light Pink"}, {colorval: "#F0FFFF", colorname: "Azure"}, {colorval: "#9FE2BF", colorname: "Seafoam Green"}])

  const addColor = (color) =>{
    let newCol = {
      ...color, 
      id: uuidv4()
    }
    setDefaultColors(defaultColors => [...defaultColors, newCol])
  }

  return (
    <div className="App">
    
     <Switch>
      <Route exact path="/colors/new">
        <ColorPicker addColor={addColor}/>
      </Route>

      <Route exact path="/colors">
        <AllColors defaultColors ={defaultColors}/>
      </Route>

      <Route exact path="/colors/:colorname">
        <ColorsDetails defaultColors ={defaultColors} />
      </Route>

      <Redirect to="/colors" />
     </Switch>
    </div>
  );
}

export default App;
