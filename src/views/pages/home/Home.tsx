import { Dslider } from "views/components/custom/Dslider";
import { ProductsArray } from "views/components/home/ProductsArray";
import Increment from "./Increment";

const Home = () => {
  return (
    <main>
      <div className="py-20">
        <Dslider></Dslider>
      </div>
      <div className="products">
        <ProductsArray></ProductsArray>
      </div>
      <Increment></Increment>
    </main>
  );
};
export default Home;
