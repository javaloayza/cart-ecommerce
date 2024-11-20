import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2>Tu carrito de compras</h2>
      <div className="row">
        {cart.length === 0 ? (
          <p>No tienes productos en el carrito.</p>
        ) : (
          cart.map((item) => (
            <div className="col-12 mb-3" key={item.id}>
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src={item.imagen} className="card-img" alt={item.titulo} />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title">{item.titulo}</h5>
                      <p className="card-text">Cantidad: {item.quantity}</p>
                      <p className="card-text">
                        Precio: S/ {item.precio * item.quantity}
                      </p>
                      <div>
                        <button
                          className="btn btn-secondary"
                          onClick={() => decrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-secondary ms-2"
                          onClick={() => incrementQuantity(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger ms-2"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-4">
          <h3>Total: S/ {getTotalPrice()}</h3>
          <Link to="/" className="btn btn-primary">
            Seguir Comprando
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
