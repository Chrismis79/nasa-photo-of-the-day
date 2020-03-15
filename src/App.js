import React from "react";
import styled from "styled-components";
import NasaGrid from "../src/components/NasaGrid";
import PreviousGrid from "../src/components/PreviousGrid";

import "./App.css";

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
    
    align-items: center;
    flex-flow: column wrap;
    width: 1000px;
    
    margin: 0 auto;
   
`;
const CardHolder = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


function App() {
  
  return (
    <>

    <ContainerDiv>

      <DivWrapper>
        <Heading>
          NASA Photo of the Day
        </Heading>

      </DivWrapper> 

      <DivWrapper>
        <NasaGrid/>
      </DivWrapper>
    </ContainerDiv>
    
    <CardWrapper>
      <CardHolder>
          <PreviousGrid/>
      </CardHolder>
    </CardWrapper>
    </>
    
    
  );
}

export default App;
