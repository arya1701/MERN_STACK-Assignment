import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="mainBox">
            <h1>Welcome to the Mentro APP</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              unde voluptates autem tenetur deleniti quisquam maiores earum
              aliquid accusamus! Reprehenderit accusamus quae aliquid nobis
              veniam obcaecati voluptatem repellat modi ipsa!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landingpage;
