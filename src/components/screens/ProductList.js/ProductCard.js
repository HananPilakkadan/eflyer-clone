import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../axiosConfig";
import axios from "axios";
import PreLoader from "../PreLoader/PreLoader";

const ProductCard = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setProducts(response.data);
        setPreloader(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {preloader && <PreLoader />}

      {products?.map((product, key) => {
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
