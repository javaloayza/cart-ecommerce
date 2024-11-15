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
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
