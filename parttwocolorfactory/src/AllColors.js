import React from "react";
import { Route, NavLink, Redirect, Switch, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const AllColors = ({defaultColors}) => {
    console.log(defaultColors, "DEF COLORS")
    return(
        <>
        <div>
        <Link exact="true" to="/colors/new"> ADD A COLOR </Link>
        </div>
        <p> Select a color </p>
        {defaultColors.map(c => <div key={uuidv4()}><Link exact="true" to={`/colors/${c.colorname}`}> {c.colorname} </Link></div>)}
        </>
    )

}

export default AllColors;