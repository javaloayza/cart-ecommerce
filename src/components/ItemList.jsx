/* eslint-disable react/prop-types */
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((prod) => (
        <Item producto={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default ItemList;
