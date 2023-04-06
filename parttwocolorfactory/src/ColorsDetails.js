import React from "react";
import { useParams, useHistory } from "react-router-dom";

const ColorsDetails = ({defaultColors}) => {
    const {colorname} = useParams()
    let history = useHistory()
    let bgColor = defaultColors.find( c => c.colorname === colorname)
    console.log(bgColor["colorval"], "BG COLORR")
    return (
        <div style={{ backgroundColor:`${bgColor["colorval"]}`, marginRight:"10%", marginLeft:"10%"}}>
        <h2>{colorname}</h2>
        <br></br>
        <button onClick={() => history.goBack()}> BACK </button>
        </div>
    )
}

export default ColorsDetails;