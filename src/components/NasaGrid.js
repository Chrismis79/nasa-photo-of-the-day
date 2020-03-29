import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";

import axios from "axios";

function NasaGrid() {
    const [title, setTitle] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);
    const [desc, setDesc] = useState([]);
    const [mediatype, setMediaType] = useState([]);
    
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=vkT7ub2IM8cvNsxxL3QS6sO0bn5FMJjGXPkdxzsl`)
             .then(response => {
                 console.log(response.data);
                 setTitle(response.data.title);
                 setMediaType(response.data.media_type);
                 setPhoto(response.data.hdurl || response.data.url);
                 setDate(response.data.date);
                 setDesc(response.data.explanation);
             })
             .catch(error => {
                 alert("There was an issue fetching the requested data", error);
             })
    }, [])

    return (
        <div>
         
             <NasaCard key={date}
                      title={title}
                      photo={photo}
                      date={date}
                      desc={desc}
                      mediatype={mediatype}/>
          
        </div>
    );
}  


export default NasaGrid;
