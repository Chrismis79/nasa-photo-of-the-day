import React, {useState, useEffect} from "react";

import PreviousCards from "./PreviousCards";
import axios from "axios";
import {Container, Row} from 'reactstrap';



function PreviousGrid() {
    
    const [photoArray, setPhotoArray] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vkT7ub2IM8cvNsxxL3QS6sO0bn5FMJjGXPkdxzsl&count=20`)
             .then(response => {
                 
                 const photoArray = response.data;
                 console.log("photoArray", photoArray);
                 setPhotoArray(photoArray);
                

             })
             .catch(error => {
                 console.log("Sorry we can't show you all the awesome NASA photos", error);
             })
            }, [])      

    return (
        <Container>
            <Row>
                {photoArray.map(item => {
                    return <PreviousCards key={item.date}
                            photo={item.hdurl || item.url} 
                            title={item.title}
                            date={item.date}
                            desc={item.explanation}
                            mediatype={item.media_type}             
                            />;
                })}           
            </Row>
        </Container>
        
        
    );
    
}

export default PreviousGrid;
