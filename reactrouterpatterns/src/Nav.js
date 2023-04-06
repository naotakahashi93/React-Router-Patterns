import React from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";



const Nav = ({alldogs}) => {

    return(
        <>
        <Switch>
            <>
            <div style={{backgroundColor: "lightblue"}}>
            <NavLink exact to="/"> ALL DOGS </NavLink>
            {alldogs.map(d => <div key={d.name}><NavLink exact to={`/dogs/${d.name}`}>{d.name}</NavLink></div>)}
            </div>
            </>
        </Switch>
        </>
    )

}

export default Nav;