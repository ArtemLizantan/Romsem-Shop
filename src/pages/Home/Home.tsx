import Hero from "./Sections/hero/Hero";
import Products from "./Sections/products/Products";

const Home = () => {
  return (
    <div style={{ padding: "30px 0px 60px 0" }} className="Home">
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
