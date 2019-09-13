import React from "react";
import styled from "styled-components";
import {Text} from "./NasaCard";

const PhotoOfPrevDays = styled.img`
    max-width: 80%;
    max-height: 800px;
    object-fit: scale;
    flex-shrink: 2;
    
`;

const PreviousCards = props => {
    return (
        <>
        <div key={props.date}>
            <PhotoOfPrevDays alt='NASA photo of the day'src={props.photos}/>

        </div>
    
        <div>        
          <p>{props.title}</p>                
          <p>Date: {props.date}</p>
          <Text>{props.desc}</Text>         
        </div>
        </>
    );
}

export default PreviousCards;