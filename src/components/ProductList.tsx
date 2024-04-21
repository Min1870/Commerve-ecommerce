import React from "react";
// import { useFilterContext } from '../context/filter_context'
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/Filter";

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return (
      <h4 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h4>
    );
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
