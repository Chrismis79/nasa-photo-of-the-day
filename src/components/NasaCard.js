import React from "react";
import styled from "styled-components";


const PhotoOfDay = styled.img`
    max-width: 900px;
    max-height: 1000px;
    object-fit: scale;
    flex-shrink: 2;
    margin: 2% 0;
`;
const Text = styled.p`
    padding-bottom: ${props => (props.primary ? "2%" : null)};
`;
const NasaCard = props => {
    return (
        <>
        <div key={props.date}>
            <PhotoOfDay className="apodImg" alt="NASA photo of the Day" src={props.photo}/>

        </div>
    
        <div>        
          <Text>{props.title}</Text>                
          <Text>Today's date: {props.date}</Text>
          <Text primary>{props.desc}</Text>         
        </div>
        </>
    );
};

export default NasaCard;