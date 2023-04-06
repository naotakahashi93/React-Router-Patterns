import React, { useEffect, useState } from "react";
import { useParams, NavLink} from "react-router-dom";

const DogDetails = ({alldogs}) =>{
    const {dogname} =useParams();
    // console.log(dogname, "DOG NAME URL PARAM")
    const [dog, setDog] = useState([])

    useEffect(function getDog(){
        console.log("effect running")
        setDog(alldogs.filter(d => d.name === dogname)[0])
            }, [dogname]
        )
        // console.log(dog, "DOFG STTEE")
    return(
        <>
        <div key={dog.name} style={{borderStyle:"solid", marginLeft:"90px", marginRight:"90px", marginTop:"40px", backgroundColor:"lightgreen"}}>
                <p>Name: {dog.name}</p>
                <p>Age: {dog.age}</p>
                <p>Facts about {dog.name}: {dog.facts ? dog.facts.map(f => (<li> {f} </li>)) : null}</p>
                <img style={{ maxWidth: "90%"}} src={dog.src}></img>
        </div> 
        </>
    )
}

export default DogDetails 