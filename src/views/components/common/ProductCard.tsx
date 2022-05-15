export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="p-3 rounded-sm shadow hover:shadow-xl hover:cursor-pointer">
      <div className="">
        <img
          src={process.env.REACT_APP_IMAGE_BASE_URL + product.image}
          alt=""
        />
      </div>
      <div className="product-details">
        <h4>Product Name</h4>
        <p>Product Price</p>
      </div>
    </div>
  );
};
