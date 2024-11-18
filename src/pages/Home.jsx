import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    
    <div>
      <div className="banner text-white text-center ">
      <img
        src="images/banner1.webp" 
        alt="Banner Promocional"
        className="img-fluid"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      {/* <div className="overlay">
        <h2>¡Ofertas Especiales Solo Hoy!</h2>
        <p>Disfruta de grandes descuentos en toda la tienda. ¡Compra ahora!</p>
      </div> */}
    </div>
      <h1 className="text-center text-primary mt-4">Bienvenidos a la Tienda!!!</h1>
      <ItemListContainer />
    </div>
  );
};

export default Home;
