import React from "react";
import Cart from "../Cart/Cart.controller";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div position="static">
      <Header>
        <Container
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Row>
            <Col>Footwear Mart</Col>
          </Row>
          <Row item spacing={2}>
            <Cart />
          </Row>
        </Container>
      </Header>
    </div>
  );
};

export default Header;
