import React, { useState, useEffect } from "react";

const ProductForm = ({ onAdd, productToEdit }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setId(productToEdit.id || null);
      setName(productToEdit.name || "");
      setDescription(productToEdit.description || "");
      setPrice(productToEdit.price || "");
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({ id, name, description, price }); // Passa o ID para evitar duplicação

    // Limpa os campos após salvar
    setId(null);
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{id ? "Salvar alterações" : "Adicionar produto"}</button>
    </form>
  );
};

export default ProductForm;
