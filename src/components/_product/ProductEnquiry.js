import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Product from "../../components/_product/Product";
import { Icon } from "@iconify/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import Page from "../Page";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_NEW_VIEWED_PRODUCT_SUCCESS,
  ADD_TO_CART,
} from "../../actions/types";
import { enqueueSnackbar } from "../../actions/enqueueSnackbar.action";
import { CircularProgress } from "@mui/material";
import { numberWithCommas } from "../../utils/productUtils";
import SimilarProductsSlide from "./related-products-slide";
import CustomersAlsoSearched from "./customers-also-searched";
import YouMayAlsoLike from "./you-may-also-like";
import { LOCAL_STORAGE_CACHED_DATABASE } from "../../reducers/products.reducer";

function ProductItem() {
  const dispatch = useDispatch();
  const [ErrorFound, setErrorFound] = React.useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { products, error, loading, viewedProducts } = useSelector(
    (state) => state?.products
  );
  // scroll to top
  const { pathname } = useLocation();

  // function to scroll to top when page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // when this page is loaded, create get the cached database from local storage
  // and set it to the viewed products
  // useEffect(() => {
  //   (async () => {
  //     const localStorageCachedDatabase = await localStorage.getItem(
  //       LOCAL_STORAGE_CACHED_DATABASE
  //     );

  //     // if the local storage database is not created yet, create it and set it to the viewed products
  //     if (
  //       localStorageCachedDatabase === null ||
  //       localStorageCachedDatabase === undefined
  //     ) {
  //       console.log("local storage database is not created yet");
  //       console.log(
  //         "....................creating local storage database...................."
  //       );
  //       localStorage.setItem(LOCAL_STORAGE_CACHED_DATABASE, JSON.stringify([]));
  //     } else {
  //       //if we have the database cached, get it and set it to the viewed products
  //       const cachedData = localStorage.getItem(LOCAL_STORAGE_CACHED_DATABASE);
  //       console.log("cachedData in poduct enquiry", cachedData);
  //       // const cachedDataParsed = JSON.parse(cachedData);
  //       // console.log("cachedDataParsed", cachedDataParsed);

  //       // if the cached data is not empty, set it to the viewed products in the redux store
  //       if (cachedData.length > 0) {
  //         dispatch({
  //           type: ADD_NEW_VIEWED_PRODUCT_SUCCESS,
  //           payload: JSON.parse(cachedData),
  //         });
  //       }

  //       console.log("fetched cached | user viewed products", cachedData);
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  //functionality of finding the product using the id when the page loads
  const productFound = useMemo(() => {
    // set the error to null
    setErrorFound("");
    // check to see the products
    if (products?.length > 0) {
      // find the product using the id
      const product = products?.find((product) => product?.id === id);
      // if the product is found
      if (product !== undefined && product !== null && product !== "") {
        setErrorFound("");
        // add the product image once to the images array so that the image can be displayed
        const productImage = product.productGallery?.productImage;
        const productImages = product?.productGallery?.productImages;
        // add the product image to the images array at the beginning
        const images = [productImage, ...productImages];

        // product viewed
        // get this product id
        const productId = product?.id;

        // get all the viewed products
        const viewedProductsFromCache = viewedProducts?.map(
          (product) => product
        );

        console.log("viewedProducts", viewedProductsFromCache);

        return {
          ...product,
          productGallery: {
            ...product.productGallery,
            productImages: images,
          },
        };
      } else {
        // if the product is not found
        setErrorFound("Product not found");
        return null;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, id]);

  //if we have no product then we have to redirect to the home page check if the product found is null or undefined
  if (
    productFound === null ||
    productFound === undefined ||
    ErrorFound === "Product not found"
  ) {
    return (
      <Page title="Product Not Found">
        <div className="lg:px-10 sm:px-3">
          <h2>Opps, the product you are looking for is not found</h2>
          <div>
            <p>page will redirect to the home page in 3 seconds</p>
          </div>
        </div>
      </Page>
    );
  }

  //other products you may also like, this are products that are not the same as the product we are looking at but are similar to it based on product

  // //similar products algorithm
  const similarProducts = products.filter(
    (product) => product.categoryName === productFound.categoryName
  );

  const similarProductsArray = similarProducts.filter(
    (product) => productFound.id !== product.id
  );

  // // similar array without repeating the same product
  const similarProductsArrayUnique = similarProductsArray.filter(
    (product, index) =>
      similarProductsArray.findIndex((p) => p.id === product.id) === index
  );

  // add quantity
  function addQuantity() {
    setQuantity((pre) => {
      return pre + 1;
    });
  }

  //subtract quantity
  function subtractQuantity() {
    if (quantity > 1) {
      setQuantity((pre) => {
        return pre - 1;
      });
    }
  }

  // function to add to cart
  const addToCart = (product) => {
    const cartItem = {
      quantity,
      ...product,
    };
    dispatch({
      type: ADD_TO_CART,
      payload: cartItem,
    });
    // dispach a snackbar
    dispatch(
      enqueueSnackbar({
        message: `product added to cart`,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      })
    );

    // reset the quantity
    setQuantity(1);
  };

  // function to get all the product viewed on this page

  // if loading is true then we have to show the loading icon
  if (loading) {
    return (
      <Page title={`Product ${id} Loading`}>
        <div className="lg:px-10 sm:px-3">
          <div
            className="!w-full
          !mt-10 !flex !justify-center
          !items-center"
          >
            <CircularProgress />
          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page title={`Enquiry of ${productFound?.productName}`}>
      <div className="">
        <div className="lg:px-10 sm:px-3">
          <div className="bg-white lg:grid lg:grid-cols-3 gap-1 ">
            {/* show the product and its image */}
            <div className="lg:flex lg:flex-row-reverse lg:place-content-start lg:col-span-2 gap-3 p-3 ">
              <div className="flex py-6 h-full w-full">
                <div className="flex w-full  flex-grow p-3 h-72 lg:h-96 border border-gray-300 rounded-md">
                  <img
                    src={productFound.productGallery.productImages[imageIndex]}
                    alt="product"
                    className="lg:h-80 h-full  lg:p-6 w-full object-contain "
                  />
                </div>
              </div>

              {/* thumbnails */}
              <div className="">
                {productFound.productGallery.productImages.length > 0 && (
                  <div className="flex space-x-3 lg:space-x-0 lg:flex-col lg:space-y-3 p-3">
                    {productFound.productGallery.productImages.map(
                      (image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="product"
                          className={`${
                            imageIndex === index
                              ? "border-2 border-fountain-blue  "
                              : "border border-gray-300"
                          } lg:h-32 lg:w-32 h-16 w-16 p-2 md:h-28 md:w-28 cursor-pointer object-cover rounded-md lg:p-6 hover:opacity-75`}
                          onClick={() => setImageIndex(index)}
                        />
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* other component */}
            <div className="lg:p-6">
              {/* product name */}
              <div className="lg:font-semibold tracking-wide leading-7">
                <h3>{productFound.productName}</h3>
              </div>
              {/* product price */}
              <div className="text-slate-600 text-sm font-semibold mt-2">
                <div className="flex space-x-2">
                  <p className="text-black text-md">
                    KSH{" "}
                    <span>
                      {numberWithCommas(productFound?.productPrice?.salePrice)}
                    </span>
                  </p>
                  <span>-</span>
                  <p className="line-through text-dune/70 text-slate-500 text-md">
                    KSH{" "}
                    <span>
                      {numberWithCommas(
                        productFound?.productPrice?.regularPrice
                      )}
                    </span>
                  </p>
                </div>
              </div>
              {/* button to add to and subtract item from cart */}
              <div className="flex space-x-8 items-center text-center justify-center w-full border border-gray-300  text-gray-500 py-2 h-10 rounded-sm mt-4 bg-primary-contrastText/10">
                <button className="text-lg" onClick={() => subtractQuantity()}>
                  <RemoveRoundedIcon className="hover:bg-slate-200 rounded-full" />
                </button>
                <span className="font-semibold">{quantity}</span>
                <button onClick={() => addQuantity()}>
                  <AddRoundedIcon className="hover:bg-slate-200 rounded-full" />
                </button>
              </div>
              {/* add to cart */}
              <div className="w-full mt-2">
                <button
                  onClick={() => addToCart(productFound)}
                  className="bg-secondary-main/90 rounded-sm flex space-x-2 items-center text-sm text-center justify-center w-full border h-10  text-white font-semibold tracking-wide py-2 border-secondary-main hover:bg-secondary-main hover:text-white"
                >
                  Add to cart
                </button>
              </div>

              {/* wishlist and share */}
              <div className="mt-2 lg:flex lg:gap-3">
                {/* wishlist */}
                <button className="flex space-x-2 items-center text-sm text-center justify-center w-full border border-gray-300 rounded-sm text-gray-500 h-10 hover:text-fountain-blue py-2">
                  <Icon icon="akar-icons:heart" />
                  <span className="tracking-wide">Wishlist</span>
                </button>
                {/* share */}
                <button className="flex space-x-2 items-center text-sm text-center justify-center w-full border border-gray-300 rounded-sm hover:text-fountain-blue text-gray-500 py-2 h-10">
                  <Icon icon="eva:share-fill" />
                  <span className="tracking-wide">Share</span>
                </button>
              </div>

              {/* tags */}
              <div className="text-sm mt-4">
                <div className="flex space-x-2 items-center">
                  <p className="flex items-center space-x-2">
                    <Icon icon="bytesize:tag" />
                    <span className="inline-block">Categories</span>
                  </p>
                  {/* {productFound.productTags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block hover:text-fountain-blue cursor-pointer text-sm capitalize px-2 py-.5 border border-gray-300 rounded-sm text-gray-500 mr-2"
                >
                  {tag}
                </span>
              ))} */}
                </div>
              </div>
            </div>
          </div>

          {/* product description */}
          <div className="mt-4 bg-white  p-3">
            <div className="relative text-center max-w-max">
              <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-lg">
                Product Description
              </h3>
              {/* a small line */}
              <div className="w-16 rounded-full text-center  h-1  bg-secondary-main absolute -bottom-1 -pt-3"></div>
            </div>
            <div className="mt-5 w-full text-gray ">
              <p className="text-sm sm:text-[15px] w-full lg:text-[16px] tracking-wide leading-7">
                {productFound.productDescription}
              </p>
            </div>
          </div>
          {/* related products */}
          {similarProductsArray.length > 0 && (
            <div className="mt-5 bg-white  p-3">
              <div className="relative text-center max-w-max">
                <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-[20px]">
                  Related Products
                </h3>
                {/* a small line */}
                <div className="w-16 rounded-full text-center  h-1  bg-secondary-main absolute -bottom-1 -pt-3"></div>
              </div>
              <div>
                <SimilarProductsSlide
                  similarProductsArray={similarProductsArrayUnique.slice(
                    3,
                    similarProductsArrayUnique?.length
                  )}
                />
              </div>
            </div>
          )}

          {/* what other customers searched for */}
          {similarProductsArray.length > 0 && (
            <div className="mt-5 bg-white  p-3">
              <div className="relative text-center max-w-max">
                <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-[20px]">
                  Customers who viewed this also viewed
                </h3>
                {/* a small line */}
                <div className="w-16 rounded-full text-center  h-1  bg-secondary-main absolute -bottom-1 -pt-3"></div>
              </div>
              <div>
                <CustomersAlsoSearched
                  similarProductsArray={similarProductsArrayUnique.slice(
                    12,
                    similarProductsArrayUnique?.length
                  )}
                />
              </div>
            </div>
          )}

          {/* You may also like */}
          {similarProductsArray.length > 0 && (
            <div className="mt-5 bg-white  p-3">
              <div className="relative text-center max-w-max">
                <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-[20px]">
                  You may also like
                </h3>
                {/* a small line */}
                <div className="w-16 rounded-full text-center  h-1  bg-secondary-main absolute -bottom-1 -pt-3"></div>
              </div>
              <div>
                <YouMayAlsoLike
                  similarProductsArray={similarProductsArrayUnique.slice(
                    7,
                    similarProductsArrayUnique?.length
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default ProductItem;
