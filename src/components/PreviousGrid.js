import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PreviousCards from "./PreviousCards";
import axios from "axios";

const CardHolder = styled.div`
    width: 40%;
`;

function PreviousGrid() {
    // const [titles, setTitles] = useState([]);
    const [photos, setPhotos] = useState([]);
    // const [dates, setDates] = useState([]);
    // const [descs, setDescs] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vkT7ub2IM8cvNsxxL3QS6sO0bn5FMJjGXPkdxzsl&count=100`)
             .then(response => {
                 
                 const photoArray = response.data;
                 console.log(photoArray);
                 setPhotos(photoArray);
                //  setTitles(response.data.title);
                //  setPhotos(response.data.hdurl);
                //  setDates(response.data.date);
                //  setDescs(response.data.explanation);
            

             })
             .catch(error => {
                 alert("Sorry we can't show you all the awesome NASA photos", error);
             })
            }, [])      

    return (
        <CardHolder>
        {photos.map(item => {
            return <PreviousCards key={item}
                      photos={item}                      
                      />;
        })}           

        </CardHolder>
        
        
    );
    
}



export default PreviousGrid;
