import { ProductCard } from "../common/ProductCard";

const array1 = [2, 3, 4, 5, 6, 7, 8, 9];
export const ProductsArray = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {array1.map((item) => (
        <ProductCard></ProductCard>
      ))}
    </div>
  );
};
