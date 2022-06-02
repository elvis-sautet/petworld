import React from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Page from "../components/Page";
import Product from "../components/_product/Product";

function Feed() {
  const { products } = useSelector((state) => state.products);

  return (
    <Page title="feed">
      {/* Slider Here */}
      <div className="z-30">
        <Banner />
      </div>
      {/* display first 3 products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-4 w-full -mt-8 px-4">
        {products?.slice(0, 4).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <img
        className="w-full h-auto object-cover py-2 px-4"
        src={require("../images/add1.webp")}
        alt="banner"
      />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-5 w-full px-4">
        {products.slice(5, products?.length).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Page>
  );
}

export default Feed;
