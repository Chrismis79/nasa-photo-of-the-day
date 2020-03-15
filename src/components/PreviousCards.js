import React from "react";

import Media from "../components/Media";
import {Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from "reactstrap";
  

const PreviousCards = props => {
    const titleStyle={
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold"
    }

    const cardHeader = {
        background: "#282c34",

    }
    return (
        <Col sm="12" md="6" className="mb-3">
            <Card>
            <CardBody style={cardHeader}>
              <CardTitle style={titleStyle}> {props.title} </CardTitle>                  
              <CardSubtitle style={{color: "#fff"}}>Date: {props.date}</CardSubtitle>
            </CardBody >
                <div key={props.date}>
                        {/* <CardImg title={props.title} mediatype={props.media_type} src={props.photo} alt={props.title}/> */}
                        <Media mediatype={props.mediatype} title={props.title} src={props.photo} alt={props.title}/>
                </div>
            <CardBody>
                <CardText>{props.desc}</CardText>
            </CardBody>
          </Card>
        </Col>
    );
}

export default PreviousCards;
