import React, { useState } from "react";

const ProductList = ({ products, onDelete, onEdit }) => {
  const productsPerPage = 3;  /* Número de produtos por página */
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Função para mudar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description} - R$ {product.price}
            <div>
              <button
                className="edit-button"
                onClick={() => onEdit(product)}
              >
                Editar
              </button>
              <button
                className="delete-button"
                onClick={() => onDelete(product.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {/* Controle de página */}
      <div>
        <button 
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{ fontWeight: currentPage === index + 1 ? "bold" : "normal" }}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default ProductList;
