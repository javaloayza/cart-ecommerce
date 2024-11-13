/* eslint-disable react/prop-types */

const ItemDetail = ({ item }) => {
  console.log(item);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={`/${item.imagen}`} alt={item.titulo} className="img-fluid img-detail" />
        </div>
        <div className="col-md-6">
          <h2>{item.titulo}</h2>
          <p>{item.descripcion}</p>
          <p className="text-success fw-bold">S/ {item.precio}</p>

        </div>
      </div>
    </div>
  );
}; 

export default ItemDetail;
