import api from "../services/api";

export const fetchProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const addProduct = async (name, description, price) => {
  try {
    await api.post("/products", { name, description, price });
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
};

export const deleteProduct = async (id) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
  }
};

export const updateProduct = async (id, name, description, price) => {
  try {
    await fetch(`http://localhost:8080/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price }),
    });
  } catch (error) {
    console.error("Erro ao atualizar o produto", error);
  }
};
