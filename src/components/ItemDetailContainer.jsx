import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
