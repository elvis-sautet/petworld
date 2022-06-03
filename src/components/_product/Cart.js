import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { numberWithCommas } from "../../utils/productUtils";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART } from "../../actions/types";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import CartSlider from "./cart-slide";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Iconify from "../../components/Iconify";

function Cart() {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  // sample cart items
  const { cartItems } = useSelector((state) => state.cart);

  // modal close
  const handleClose = () => {
    setShowModal(false);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.productPrice?.salePrice * item.quantity;
  }, 0);

  const deleteCartItem = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };

  const minusCartItem = (id) => {
    //if there is only one item in the cart then do not allow to minus
    if (cartItems.find((item) => item.id === id).quantity === 1) {
      return;
    }
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: id,
        quantity: -1,
      },
    });
  };

  const plusCartItem = (id) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: id,
        quantity: 1,
      },
    });
  };

  // total cart quantity
  const totalCartQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  // eslint-disable-next-line no-unused-vars
  const cleanCart = () => {
    dispatch({
      type: CLEAN_CART,
    });
  };

  // recently viewed items or the history of the user viewed items
  //similar products algorithm
  const recentlyViewed = [
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",

        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",

        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
    {
      id: uuidv4(),
      productName: "Reflex Kitten Food -Chicken & Rice 2kg",
      productPrice: {
        salePrice: "1740",
        regularPrice: "1840",
      },
      productGallery: {
        productImage:
          "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
        productImages: [],
      },
      productDescription: `Ingredients: Processed Animal Protein, Wheat, Corn, Animal Fat, Corn. Gluten, Rice, Liver Aroma, Salt, Flaxseed, Dried Brewer’s Yeast, Taurine, MOS (Mannan Oligo Saccharides), Beta-Glucan, Yucca, Quillaja.
    Minerals: Calcium, Phosphorus, Sodium, Iodine, Zinc, Copper, Potassium Chloride, Iron, Selenium.`,
      productCategory: {
        categoryName: "Food",
        subCategoryName: "Cat Food",
      },
      productBrand: "Reflex",
      // productStock is the product quantity in stock or the original quantity.
      productStock: "10",
      // quantity of items left in stock
      productsLeftInStock: "6",
      productDetails: {
        productReviews: [
          {
            reviewId: uuidv4(),
            fullName: "John Doe",
            review: "This is a review",
            rating: "5",
            date: "2020-01-01",
          },
        ],
        productSpecifications: [
          {
            specificationId: uuidv4(),
            specificationName: "Weight",
            specificationValue: "2kg",
          },
          {
            specificationId: uuidv4(),
            specificationName: "Size",
            specificationValue: "2kg",
          },
        ],
        productLikes: [
          {
            likeId: uuidv4(),
            fullName: "John Doe",
          },
        ],
      },
      // product rating between 1 to 5
    },
  ];

  const emptyCartImage = require("../../images/emptycart.png");
  return (
    <div className="relative w-full py-5 select-none">
      {/* product */}
      {cartItems.length > 0 ? (
        <div className="md:grid md:grid-cols-3 gap-5 flex-col-reverse flex flex-grow-0">
          <div className="md:col-span-2 w-full bg-white">
            {/* header */}
            <div className="w-full bg-white space-y-3 px-4 py-2">
              <div className="relative w-full max-w-ful py-3 text-lg">
                <div className=" w-full">
                  <div className="flex space-x-2 font-semibold text-xl">
                    <h1>Cart</h1>
                    <span>({totalCartQuantity})</span>
                  </div>
                </div>
                <div className="absolute inset-x bottom-0 h-[2px] bg-gray-100 w-full"></div>
              </div>
            </div>
            {cartItems?.map((item, index) => (
              <div key={index}>
                {" "}
                <div className="!w-full !max-w-lg ">
                  <Dialog
                    onClose={handleClose}
                    open={showModal}
                    fullWidth={true}
                    className="!w-full"
                  >
                    <DialogTitle className="!pt-7">
                      Remove from Cart
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Are you sure you want to remove this item from your
                        cart?
                      </DialogContentText>
                      {/* buttons */}
                      <div className="!flex !justify-start !mt-7">
                        <div className="w-full ">
                          <Button
                            className="!bg-secondary-main/80 px-4 py-2 rounded-md !w-full !text-black/80 !text-lg !text-center  hover:!bg-secondary-main !capitalize hover:!text-black/95"
                            onClick={async () => {
                              deleteCartItem(item.id);
                            }}
                            startIcon={
                              <Iconify icon="fluent:delete-20-filled" />
                            }
                          >
                            Remove Item
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="w-full bg-white space-y-3 px-4 py-2 relative pb-4 rounded-md">
                  {/* products array in the cart */}
                  <div>
                    {/* header */}
                    <div className="flex items-start justify-between">
                      <div className="flex">
                        <div>
                          <img
                            className="h-24 w-24 object-contain mr-4"
                            src={item.productGallery.productImage}
                            alt="product"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p>
                            <span className="font-[400] md:text-lg text-sm">
                              {item.productName}
                            </span>
                          </p>
                          <p>
                            <span className="font-normal tracking-wide text-slate-300">
                              {/* instock or out of stock */}
                              instock
                            </span>
                          </p>
                          <p className="text-black text-md md:hidden">
                            KSH{" "}
                            <span>
                              {numberWithCommas(item.productPrice?.salePrice)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div>
                          {/* <p>
                              <Currency
                                quantity={item.productPrice.salePrice}
                                currency="KES"
                              />
                            </p> */}{" "}
                          <p className="text-black text-md hidden md:flex">
                            KSH{" "}
                            <span>
                              {numberWithCommas(item.productPrice?.salePrice)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* remove button and add to cart */}
                    <div className="flex items-center justify-between mt-4">
                      <div
                        className="flex items-center space-x-2 bg-secondary-main/10 px-3 rounded-sm hover:shadow-sm py-1 cursor-pointer"
                        onClick={() => {
                          // OPEN MODAL
                          setShowModal(true);
                        }}
                      >
                        <Icon
                          className="!h-6 !w-6 text-secondary-main"
                          icon="fluent:delete-20-filled"
                        />
                        <span className=" tracking-wide font-[500] text-secondary-main">
                          REMOVE
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-white">
                        <div>
                          <PlusIcon
                            onClick={() => plusCartItem(item.id)}
                            className="!h-7 !w-7 p-1 bg-secondary-main/80 shadow-lg shadow-secondary-main/20 rounded-sm cursor-pointer hover:bg-secondary-main"
                          />
                        </div>
                        <div className="text-black font-semibold">
                          {item.quantity}
                        </div>
                        <div>
                          <MinusIcon
                            onClick={() => minusCartItem(item.id)}
                            className="!h-7 p-1 !w-7 bg-secondary-main/80 shadow-lg shadow-secondary-main/20 rounded-sm cursor-pointer hover:bg-secondary-main"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* line here */}
                  <div className="absolute inset-x bottom-0 h-[1px] bg-slate-100 w-full"></div>
                </div>
              </div>
            ))}
          </div>
          {/* cart summary  */}
          <div className="bg-white relative max-w-sm rounded-md shadow-lg w-full px-4 py-2 flex-grow-0 lg:sticky flex-shrink h-[260px]">
            <div className=" divide-gray-400 pt-3 flex items-center justify-between">
              <p className="relative font-semibold divide-slate-100">
                CART SUMMARY
              </p>
              <img src="/lipa-na-mpesa1.png" className="h-9" alt="" />
            </div>
            <div className="divide-y border-t my-3 py-2">
              <div className="flex justify-between items-center">
                <h3>
                  <span className="text-normal font-[550]">Subtotal</span>
                </h3>
                {/* <p>
                  <span className="font-normal text-lg xl:text-xl">
                    <Currency quantity={totalPrice} currency="KES" />
                  </span>
                </p> */}{" "}
                <p>
                  KSH{" "}
                  <span className="font-normal text-lg xl:text-xl">
                    {numberWithCommas(totalPrice)}
                  </span>
                </p>
              </div>
            </div>
            <div className="divide-y-2 w-full divide-gray-400 border-t border-b my-3">
              <div className="flex items-center space-x-2">
                <Icon icon="charm:circle-tick" className="text-green-500" />
                <p>
                  <span className="text-sm text-gray-500 tracking-wide">
                    PETWORLD items are eligible for free delivery{" "}
                  </span>
                </p>
              </div>
            </div>
            <div>
              {
                // if the cart items.length is greater than is less than 0, then disable the checkout button
                cartItems.length <= 0 ? (
                  <button className="text-white px-4 py-2 bg-secondary-main disabled:bg-secondary-main/25 disabled:cursor-not-allowed  rounded-md shadow-md hover:bg-secondary-main/70">
                    <span className="font-semibold" disabled>
                      Proceed to checkout{" "}
                    </span>
                  </button>
                ) : (
                  <Link to="/checkout">
                    <button
                      className="w-full rounded-md border-2 border-gray-400 px-4 py-3 focus:outline-none focus:ring-0 focus:border-secondary-main valid:border-secondary-main disabled:opacity-50 disabled:cursor-not-allowed bg-secondary-main hover:bg-secondary-main/70"
                      type="submit"
                    >
                      <span className="font-semibold">
                        Proceed to checkout{" "}
                      </span>
                    </button>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center ">
            <div className="text-center">
              <img
                className="h-72 w-72 object-contain"
                src={emptyCartImage}
                alt="Your cart is empty"
              />
              <p className="text-lg  mt-5 text-gray-500 tracking-wider">
                Your cart is empty.
              </p>
              <Link to="/home/feed">
                <button className="text-white px-4 py-2 bg-secondary-main  rounded-md shadow-md mt-4 hover:bg-secondary-main/70">
                  <span className="font-semibold">Continue shopping</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recently viewed / search history */}
      {recentlyViewed.length > 0 && (
        <div className="mt-5 bg-white p-3">
          <div className="relative text-center max-w-max">
            <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-lg">
              Recently viewed
            </h3>
            {/* a small line */}
            <div className="w-16 rounded-full text-center  h-1  bg-secondary-main absolute -bottom-1 -pt-3"></div>
          </div>
          {/* <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 transition-all ease-in-out duration-200">
            {recentlyViewed.map((product) => (
              <Product key={product._id} {...product} />
            ))}

          </div> */}
          <CartSlider recentlyViewed={recentlyViewed} />
        </div>
      )}
    </div>
  );
}

export default Cart;
