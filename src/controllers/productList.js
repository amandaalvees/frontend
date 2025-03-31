import React from "react";

const ProductList = ({ products, onDelete }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.description} - R$ {product.price}
          <button onClick={() => onDelete(product.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
