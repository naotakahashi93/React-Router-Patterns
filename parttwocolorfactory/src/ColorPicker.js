import React, { useState } from "react";
import { Route, NavLink, Redirect, Switch, Link, useHistory } from "react-router-dom";

const ColorPicker = ({addColor}) => {
    let history = useHistory()
    const [colorForm, setColorForm] = useState(
                                        {colorval: "#000000",
                                        colorname: "Black"})


    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setColorForm(colorForm =>(
            {
                ...colorForm,
                [name]: value
            }))
    }
    // console.log(colorForm, "COLOR FORM")

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor(colorForm);
        setColorForm({colorval: "#000000",
                    colorname: "Black"})
        history.push("/")
    }

    return(
      <>
      <form onSubmit={handleSubmit}>
      <label htmlFor="colorval">COLOR</label>
      <input id="colorval" name="colorval" type="color" onChange={handleChange}/>
      <br></br>
      <label htmlFor="colorname">COLOR NAME</label>
      <input id="colorname" name="colorname" type="text" onChange={handleChange}/>
      <br></br>
      <button > ADD COLOR </button>
      </form>

      <button onClick={() => history.goBack()}> BACK </button>
      </>
    )

}

export default ColorPicker;