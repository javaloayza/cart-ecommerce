import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {pedirDatos}  from "../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
      setFilteredProductos(res); 
    });
  }, []);

  // Actualizar productos filtrados cuando cambie el término de búsqueda
  useEffect(() => {
    const filtered = productos.filter(
      (prod) =>
        prod.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prod.categoria.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProductos(filtered);
  }, [searchTerm, productos]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container ">
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchTerm && filteredProductos.length === 0 ? (
        <p className="text-center text-danger">No se encontraron productos.</p>
      ) : (
        <ItemList productos={filteredProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
