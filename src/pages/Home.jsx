import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-primary mt-4">Bienvenidos a la Tienda</h1>
      <ItemListContainer />
    </div>
  );
};

export default Home;
