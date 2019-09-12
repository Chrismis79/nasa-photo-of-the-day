import React from "react";
import NasaGrid from "../src/components/NasaGrid";
import "./App.css";

function App(props) {
  return (
    <>
    <div className="App">
      <h1>
       NASA Photo of the Day!
      </h1>
    </div>  
    <div className="card-container">
      <NasaGrid key={props.date}
                photo={props.photo}
                 />
    </div>
    
    </>
  );
}

export default App;
