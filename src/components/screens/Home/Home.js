import React from "react";
import Banner from "./Banner/Banner";
import ProductList from "./ProductList/ProductList";

function Home() {
  return (
    <>
      <div className="home">
        <Banner />
        <ProductList />
      </div>
    </>
  );
}

export default Home;
