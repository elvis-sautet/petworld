import React, { useContext, useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Product from "../../components/_product/Product";
import { Icon } from "@iconify/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { v4 as uuidv4 } from "uuid";

function ProductItem() {
  const [notFound, setNotFound] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  //state of the image shown
  const [imageIndex, setImageIndex] = useState(0);

  //functionality of finding the product using useMemo so that we can avoid the performance issue
  const productFound = {
    id: "test-id",
    productName: "Reflex Kitten Food -Chicken & Rice 2kg",
    productPrice: {
      salePrice: "1740",
      regularPrice: "1840",
    },
    productGallery: {
      productImage:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643",
      productImages: ["https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/911385/1.jpg?0643","https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/292875/1.jpg?2843"],
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
  };

  //if we have no product then we have to redirect to the home page check if the product found is null or undefined
  if (!productFound) {
    //show loading for 3 seconds
    setTimeout(() => {
      if (notFound) {
        return <Navigate to="/not-found" />;
      }
    }, 3000);
    return <p>loading</p>;
  }

  //other products you may also like, this are products that are not the same as the product we are looking at but are similar to it based on product

  //similar products algorithm
	const similarProducts = [
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
  }
  ];

  const similarProductsArray = similarProducts
    .filter((product) => productFound.id !== product.id);

  // similar array without repeating the same product
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

 

  return (
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
                {productFound.productGallery.productImages.map((image, index) => (
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
                ))}
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
              <p>
               {productFound?.productPrice?.salePrice}
                 
              </p>
              <span>-</span>
              <p className="line-through text-dune/70">
               {productFound?.productPrice?.regularPrice}
                 
              </p>
            </div>
          </div>
          {/* button to add to and subtract item from cart */}
          <div className="flex space-x-8 items-center text-center justify-center w-full border border-gray-300  text-gray-500 py-2 h-10 rounded-sm mt-4 bg-slate-100">
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
            //   onClick={() => addToCart(productFound)}
              className="bg-fountain-blue rounded-sm flex space-x-2 items-center text-sm text-center justify-center w-full border h-10  text-white font-semibold tracking-wide py-2"
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
                <span className="inline-block">Tags</span>
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
      <div className="mt-4">
        <div className="relative text-center max-w-max">
          <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-lg">
            Product Description
          </h3>
          {/* a small line */}
          <div className="w-16 rounded-full text-center  h-1  bg-fountain-blue absolute -bottom-1 -pt-3"></div>
        </div>
        <div className="mt-5 w-full text-gray">
          <p className="text-sm sm:text-[15px] w-full lg:text-[16px] tracking-wide leading-7">
            {productFound.productDescription}
          </p>
        </div>
      </div>

      {/* related products */}
      {similarProductsArray.length > 0 && (
        <div className="mt-5">
          <div className="relative text-center max-w-max">
            <h3 className="text-black capitalize tracking-wide font-semibold mb-4 lg:text-lg">
              Related Products
            </h3>
            {/* a small line */}
            <div className="w-16 rounded-full text-center  h-1  bg-fountain-blue absolute -bottom-1 -pt-3"></div>
          </div>
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 transition-all ease-in-out duration-200">
            {similarProductsArrayUnique.map((product) => (
              <Product key={product._id} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
