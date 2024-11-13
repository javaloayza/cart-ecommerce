/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
          <div className="d-flex justify-content-center">
            <img
              src={producto.imagen}
              className="card-img-top"
              alt={producto.titulo}
            />
          </div>
        <div className="card-body">
          <h5 className="card-title">{producto.titulo}</h5>
          <p className="card-text">{producto.descripcion}</p>
          <p className="text-success fw-bold">S/ {producto.precio}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>        
        </div>
      </div>
    </div>
  );
};

export default Item;
