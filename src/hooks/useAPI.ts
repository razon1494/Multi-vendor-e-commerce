import { useEffect, useState } from "react";
import ProductService from "services/Product.Service";
type StatusType = "idle" | "pending" | "success" | "error";
const useAPI = () => {
  /*   useEffect((service) => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err: string) => console.log(err));
  }, []); */
  /*   const [products, setProducts] = useState<[] | IProduct[]>([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err: string) => console.log(err));
  }, []); */
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  return {};
};

export default useAPI;
