import React from "react";
import ProductCard from "../ProductCard/ProductCard.controller";
import { Container, Row, Col } from "react-bootstrap";

const renderGridTiles = (products = []) => {
  return products.map((product) => (
    <Container>
      <Row>
        <Col sm={4} key={product.id}>
          <ProductCard product={product} />
        </Col>
      </Row>
    </Container>
  ));
};

export default function ProductsGrid({ products = [] }) {
  return products.length > 0 ? (
    <Container cellHeight="auto" cols={3}>
      {renderGridTiles(products)}
    </Container>
  ) : null;
}
