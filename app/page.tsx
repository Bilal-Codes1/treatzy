import BestSelling from "@/components/BestSelling";
import Cards from "@/components/Cards";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Slider from "@/components/Slider";
import Testiomonials from "@/components/Testiomonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Slider />
      <Products />
      <BestSelling />
      <Cards />
      <Testiomonials />
      <Footer />
    </div>
  );
};
export default Home;
