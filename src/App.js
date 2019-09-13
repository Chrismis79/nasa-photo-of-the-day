import React from "react";
import styled from "styled-components";
import NasaGrid from "../src/components/NasaGrid";
import PreviousGrid from "../src/components/PreviousGrid";
// import "./App.css";

const ContainerDiv = styled.div`
  width: 900px;
  margin: 0 auto
`;
const DivWrapper = styled.div`
  width: 100%;
  background-color: #282c34;
  color: white;
  text-align: center;
  margin: 0 auto;
`;
const Heading = styled.h1`
  color: white;
`;
const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`;


function App(props) {
  return (
    <ContainerDiv>

      <DivWrapper>
        <Heading key={props.date}>
          NASA Photo of the Day
        </Heading>

    </DivWrapper>  
    <DivWrapper>
      <NasaGrid key={props.date}
                photo={props.photo}
                 />
    </DivWrapper>
    <CardWrapper>

    </CardWrapper>
      <PreviousGrid key={props.dates}
                    photos={props.photos}/>
    
    </ContainerDiv>
  );
}

export default App;
