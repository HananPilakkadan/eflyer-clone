import React, { useEffect } from "react";
import PreLoader from "../../PreLoader/PreLoader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../Redux/products/product";

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);
  const preloader = useSelector((state) => state.product.loading);
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts(null));
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {preloader && <PreLoader />}

      {filteredProducts?.map((product, key) => {
        return (
          <div className="product-card" key={key}>
            <div className="name-box">
              <h5>{product?.title.slice(0, 12)}</h5>
              <span className="price">
                <small>Price</small> $ {product?.price}
              </span>
            </div>
            <div className="preview-img">
              <img src={product?.image} alt="Item" />
            </div>
            <div className="buttons">
              <button className="buy">Buy Now</button>
              <button>See More</button>
            </div>
          </div>
        );
      })}
      {error ? <div className="error">{error}</div> : ""}
    </>
  );
};

export default ProductCard;
