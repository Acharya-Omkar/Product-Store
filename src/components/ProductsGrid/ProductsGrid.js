import React from "react";
import ProductCard from "../ProductCard/ProductCard.controller";
import "../ProductsGrid/ProductsGrid.css";

const renderGridTiles = (products = []) => {
  return products.map((product) => (
    <div>
      <ProductCard product={product} />
    </div>
  ));
};

export default function ProductsGrid({ products = [] }) {
  return products.length > 0 ? (
    <div className="row">
      <div className="grid">{renderGridTiles(products)}</div>
    </div>
  ) : null;
}
