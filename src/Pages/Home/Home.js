import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.controller";
import { fetchProducts } from "../../actions/products.actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <ProductsGrid />
    </Container>
  );
};

export default Home;
