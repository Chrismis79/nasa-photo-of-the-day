import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PreviousCards from "./PreviousCards";
import axios from "axios";



function PreviousGrid() {
    
    const [photoArray, setPhotoArray] = useState([]);
    

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vkT7ub2IM8cvNsxxL3QS6sO0bn5FMJjGXPkdxzsl&count=20`)
             .then(response => {
                 
                 const photoArray = response.data;
                 console.log(photoArray);
                 setPhotoArray(photoArray);

             })
             .catch(error => {
                 alert("Sorry we can't show you all the awesome NASA photos", error);
             })
            }, [])      

    return (
        <div>
        {photoArray.map(item => {
            return <PreviousCards key={item.date}
                      photos={item.hdurl} 
                      title={item.title}
                      date={item.date}
                      desc={item.explanation}
                                           
                      />;
        })}           

        </div>
        
        
    );
    
}



export default PreviousGrid;
