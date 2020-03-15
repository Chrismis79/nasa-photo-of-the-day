import React from "react";


const Media = props => {
 
    if(props.mediatype === "image"){
        return <img className="card-img"
                    alt={props.title} 
                    src={props.src}
                    />;
    }else if(props.mediatype === "video"){
        return (
            <iframe
                alt={props.title}
                title={props.title}
                width={400}
                height={300}
                allowFullScreen={true}
                src={props.src}
                />
        );
    }else {
        return <div> Unknown media type, please try back tomorrow! </div>
    }
};
export default Media;
