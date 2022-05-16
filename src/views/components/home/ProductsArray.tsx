import { ProductCard } from "../common/ProductCard";

const array1 = [2, 3, 4, 5, 6, 7, 8, 9];
export const ProductsArray = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-gray-800 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product: IProduct) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
      <h1>dfgfdgdfg</h1>
      <h1>dfgfdgdfg</h1>
      <h1>dfgfdgdfg</h1>
      <h1>dfgfdgdfg</h1>
    </div>
  );
};
