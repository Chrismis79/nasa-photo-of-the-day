import React from "react";
import styled from "styled-components";


const PhotoOfDay = styled.img`
    max-width: 900px;
    max-height: 1000px;
    object-fit: scale;
    flex-shrink: 2;
    margin: 2% 0;
`;
export const Text = styled.p`
    border: 2px solid grey;
    padding: 2%;
    background: white;
    color: #282c34;
`;
const NasaCard = props => {
    return (
        <>
        <div key={props.date}>
            <PhotoOfDay className="apodImg" alt="NASA photo of the Day" src={props.photo}/>

        </div>
    
        <div>        
          <p>{props.title}</p>                
          <p>Today's date: {props.date}</p>
          <Text primary>{props.desc}</Text>         
        </div>
        </>
    );
};

export default NasaCard;