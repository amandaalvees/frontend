import React, { useEffect, useState } from "react";
import { fetchProducts, addProduct, deleteProduct, updateProduct } from "./controllers/productController";
import ProductList from "./components/productList";
import ProductForm from "./components/productForm";
import "./style/app.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null); // Armazenar o produto a ser editado

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleAddProduct = async (product) => {
    console.log("Produto recebido para salvar:", product);
  
    if (product.id) {
      try {
        await updateProduct(product.id, product.name, product.description, product.price);
        setProductToEdit(null); // Limpa o estado de edição
      } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
      }
    } else {
      await addProduct(product.name, product.description, product.price);
    }
  
    // Atualiza a lista de produtos
    const data = await fetchProducts();
    setProducts(data);
  };
  

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    const data = await fetchProducts();
    setProducts(data);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product); // Preenche o formulário com os dados do produto após ser editado
  };

  return (
    <div>
      <h1>Adicione seus produtos</h1>
      <ProductForm onAdd={handleAddProduct} productToEdit={productToEdit} />
      <ProductList products={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
    </div>
  );
}

export default App;
