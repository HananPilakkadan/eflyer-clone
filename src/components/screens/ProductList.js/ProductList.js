import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  return (
    <>
      <div className="product-section">
        <div className="head">
          <h3>Man & Woman Fashion</h3>
        </div>
        <div className="porduct-list">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductList;
