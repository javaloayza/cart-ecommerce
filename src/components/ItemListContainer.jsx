import { useState, useEffect } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-4">Productos</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
