import React from "react";


const NasaCard = props => {
    return (
        <>
        <div className="nasaCard" key={props.date}>
            <img className="apodImg" alt="NASA photo of the Day" src={props.photo}/>

        </div>
    
        <div>        
          <p>{props.title}</p>                
          <p>{props.date}</p>
          <p>{props.desc}</p>         
        </div>
        </>
    );
};

export default NasaCard;