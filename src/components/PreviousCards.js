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
          <Text>{props.title}</Text>                
          <Text>Today's date: {props.date}</Text>
          <Text primary>{props.desc}</Text>         
        </div>
        </>
    );
}

export default PreviousCards;