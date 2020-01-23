import React, { useState , useEffect } from "react";
import axios from "axios";
import Card from "./card"

export default function Grid() {
  const [nasa, setNasa] = useState([]);
  console.log(nasa);
  useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=E5kTtYjYKN1ngONIG62H00HYqxjt7kcC0bUhrgHc`)
        .then(response => {
          setNasa(response.data);
          console.log(setNasa);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);

    return (
      <div className="img">
          <Card data={nasa}/>

      </div>
    );
}