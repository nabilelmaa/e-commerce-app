import React from "react";
import ProductCard from "../_components/ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-between">
      {products.map((item) => (
        <div key={item?.id}> 
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

