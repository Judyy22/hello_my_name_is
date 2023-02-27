import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Card.css";

const Card = (props) => {
    console.log(props);
    return (
        <Card>
            <Card.Text variant="top" style={{ height: "40vh" }} />
            <Card.Body>
                <Card.Text style={{ color: "black" }}>메롱</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Card;
