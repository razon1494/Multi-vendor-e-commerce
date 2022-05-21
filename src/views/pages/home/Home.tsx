import { useEffect, useState } from "react";
import ProductService from "services/Product.Service";
import { Dslider } from "views/components/custom/Dslider";
import { ProductsArray } from "views/components/home/ProductsArray";
import Increment from "./Increment";

const Home = () => {
  const [products, setProducts] = useState<[] | IProduct[]>([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err: string) => console.log(err));
  }, []);
  return (
    <main>
      <div className="py-20">
        <Dslider></Dslider>
      </div>
      <div className="products">
        <ProductsArray products={products}></ProductsArray>
        <h1 className="1"></h1>
        <h1 className="2"></h1>
        <h1 className="3"></h1>
        <h1 className="4"></h1>
        <h1 className="5"></h1>
        <h1 className="6"></h1>
        <h1 className="7"></h1>
        <h1 className="8"></h1>
        <h1 className="9"></h1>
        <h1 className="10"></h1>
        <h1 className="11"></h1>
        <h1 className="12"></h1>
        <h1 className="13"></h1>
        <h1 className="14"></h1>
        <h1 className="15"></h1>
        <h1 className="16"></h1>
        <h1 className="17"></h1>
        <h1 className="18"></h1>
      </div>
      <Increment></Increment>
    </main>
  );
};
export default Home;
