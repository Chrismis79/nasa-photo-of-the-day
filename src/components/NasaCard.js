import React from "react";
import styled from "styled-components";
import Media from "../components/Media";



export const Text = styled.p`
    border: 2px solid grey;
    padding: 2%;
    background: white;
    color: #282c34;
`;
const NasaCard = props => {
    console.log("NasaCard props:", props)
    return (
        <>
        <div className="box" key={props.date} >
            <Media title={props.title} mediatype={props.mediatype} src={props.photo}/>
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