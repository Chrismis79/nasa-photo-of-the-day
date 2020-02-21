import React from "react";

import {Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from "reactstrap";
  

const PreviousCards = props => {
    return (
        <Col sm="12" md="6">
            <Card>
            <CardBody>
              <CardTitle> {props.title} </CardTitle>                  
              <CardSubtitle>Date: {props.date}</CardSubtitle>
            </CardBody>
                <div key={props.date}>
                    <CardImg alt='NASA photo of the day' src={props.photos}/>
                </div>
            <CardBody>
                <CardText>{props.desc}</CardText>
            </CardBody>
          </Card>
        </Col>
    );
}

export default PreviousCards;
