import React from "react";
import Banner from "../components/Banner";
import Page from "../components/Page";
import Product from "../components/_product/Product";
import ProductMOCK from "../_mocks_/products";

function Feed() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = React.useState(ProductMOCK);

  return (
    <Page title="feed">
      {/* Slider Here */}
      <div className="z-30">
        <Banner />
      </div>
      {/* display first 3 products */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 grid-flow-row-dense md:grid-cols-3 lg:grid-cols-5 w-full -mt-8 px-4">
        {products?.slice(0, 5).map((product) => (
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
