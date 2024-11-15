import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useCart();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <h1>React</h1>
        </Link>
        <div className="d-flex flex-row px-2 ">
        <Link to="/cart" className="btn btn-outline-primary position-relative d-flex justify-content-end d-lg-none  ">
          🛒
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {getTotalItems()}
          </span>
        </Link>
   
        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
       
          <ul className="navbar-nav ms-auto">
            <Link to="/cart" className="btn btn-outline-primary position-relative d-none d-lg-block ">
              🛒
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getTotalItems()}
              </span>
            </Link>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contacto
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Carrito
              </Link>
            </li> */}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
