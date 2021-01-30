import React from "react";
import "../ProductCard/ProductCard.css";
import { Image, Card } from "react-bootstrap";

export default function ProductCard({
  product = null,
}) {
  var random_number = Math.floor(Math.random() * 5);
  return (
    <Card classname="card" style={{ width: "22rem" }}>
      <Image
        alt={product.name}
        src={product.image}
        title={product.name}
        style={{ padding: 10, height: 200, textAlign: "center" }}
      />
      <Card.Body>
        <Card.Title style={{fontWeight:'800'}} >{product.name}</Card.Title>
        <Card.Text
          style={{ maxWidth: "300px", fontSize: "14px"}}
        >
          {" "}
          {product.description}
        </Card.Text>
        <Card.Text style={{fontWeight:'800'}}> ₹{product.price}</Card.Text>
        <Card.Text> Rating: {random_number}</Card.Text>
        {/* <Link to="/products"> */}
    
        {/* </Link> */}
      </Card.Body>
    </Card>
  );
}
