import axios from "axios";
import {useEffect, useState} from "react";

function StarWars() {

    const [people, setPeople] = useState([]);


    const getPeople = async () => {
        let response = await axios("https://swapi.dev/api/people/");
        setPeople(response.data.results)
    }

    useEffect (() => {
        getPeople();
    }, [])

    return(
        <>
  
        <h1 id="fav">Star Wars Info</h1>
        {people.length ? 
        people.map(person => <h2>Hola</h2>) : 
        <p>Cargando personajes...</p>
    }
        </>
    )
}

export default StarWars;