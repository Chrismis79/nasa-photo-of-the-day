import React from "react";
import styled from "styled-components";
import {Text} from "./NasaCard";

const PhotoOfPrevDays = styled.img`
    max-width: 900px;
    max-height: 1000px;
    object-fit: scale;
    flex-shrink: 2;
    margin: 2% 0;
`;

const PreviousCards = props => {
    return (
        <>
        <div key={props.date}>
            <PhotoOfPrevDays alt='NASA photo of the day'src={props.photo}/>

        </div>
    
        <div>        
          <p>{props.title}</p>                
          <p>Today's date: {props.date}</p>
          <Text>{props.desc}</Text>         
        </div>
        </>
    );
}

export default PreviousCards;