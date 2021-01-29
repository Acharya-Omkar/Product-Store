import React from "react";
import { Image, Card, Button } from "react-bootstrap";

export default function ProductCard({
  product = null,
  onAddToCart = () => {},
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        alt={product.name}
        src={"https://" + product.imageUrl}
        title={product.name}
        style={{ padding: 0, height: 200, textAlign: "center" }}
        imageStyle={{ width: 200, position: "static" }}
        disableSpinner
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> {product.price.current.text}</Card.Text>
        <Button size="small" variant="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
        <Button size="small" variant="secondary">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}
