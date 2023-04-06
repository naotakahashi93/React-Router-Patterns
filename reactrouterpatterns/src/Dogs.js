import React from "react";
import DogDetails from "./DogDetails";
import { Route, NavLink, Switch } from "react-router-dom";

const Dogs = ({alldogs})=>{

    return(
        <>
        <Switch>
            <Route exact path="/dogs">
                <h3> HERE ARE ALL THE DOGS </h3>
            {alldogs.map(d => 
            <div key={d.name} style={{borderStyle:"solid", marginLeft:"90px", marginRight:"90px", marginTop:"40px", backgroundColor:"lightcoral"}}>
                 <NavLink exact to={`/dogs/${d.name}`}> {d.name}! </NavLink>
                <p>Name: {d.name}</p>
                <p>Age: {d.age}</p>
                <p>Facts about {d.name}: {d.facts.map(f => <li key={f}> {f} </li>)}</p>
                <img style={{ maxWidth: "90%"}} src={d.src}></img>
            </div>)}
            </Route>
        </Switch>
        </>
    )


}

export default Dogs;