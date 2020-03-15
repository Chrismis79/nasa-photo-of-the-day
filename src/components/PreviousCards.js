import React, {useState} from "react";

import Media from "../components/Media";
import {Col, Card, CardText, Button, Collapse, CardBody,
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

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

   
    return (
        <Col sm="12" md="6" className="mb-3">
            <Card>
            <CardBody style={cardHeader}>
              <CardTitle style={titleStyle}> {props.title} </CardTitle>                  
              <CardSubtitle style={{color: "#fff"}}>Date: {props.date}</CardSubtitle>
            </CardBody >
                <div key={props.date}>
                  <Media mediatype={props.mediatype} title={props.title} src={props.photo} alt={props.title}/>
                </div>

    <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>{isOpen ? "Close" : "Description"}</Button> 
            
           
            <Collapse isOpen={isOpen}>
              <CardBody>{props.desc}</CardBody>          
            </Collapse>
          </Card>
        </Col>
    );
}

export default PreviousCards;
