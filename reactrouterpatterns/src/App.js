import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
import Dogs from './Dogs';
import Nav from './Nav';
import DogDetails from './DogDetails'
import whiskey from "./dogphotos/whiskey.jpg"
import duke from "./dogphotos/duke.jpg"
import perry from "./dogphotos/perry.jpg"
import tubby from "./dogphotos/tubby.jpg"

function App({dogs}) {
  // console.log(dogs, "DOGSS") 
  // dogs.map(d => console.log(d.name, d.age, d.src, "DDD"))
  return (
    <div className="App">
      <Nav alldogs={dogs}/>

      <Switch>
        <Route exact path="/dogs" >
          <Dogs alldogs={dogs}/> 
        </Route>

        <Route exact path="/dogs/:dogname" >
          <DogDetails alldogs={dogs}/> 
        </Route>

        <Redirect to="/dogs" />
    </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
