import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { StarIcon } from "@heroicons/react/solid";
import {
  calculateDiscountPercantage,
  convertToNumber,
  numberWithCommas,
  randomRating,
} from "../../utils/productUtils";

function Product(props) {
  const [rating] = useState(randomRating);

  // percentage of items left in stock
  const itemsInStock = convertToNumber(props?.productStock);
  const itemsLeftInStock = convertToNumber(props?.productsLeftInStock);

  // percentage of items left in stock
  const percentageLeft = (itemsLeftInStock / itemsInStock) * 100;

  // calculate the discount
  const regularPrice = convertToNumber(props?.productPrice?.regularPrice);
  const salePrice = convertToNumber(props?.productPrice?.salePrice);

  // discount percentage
  const discountPercentage = calculateDiscountPercantage(
    regularPrice,
    salePrice
  );

  return (
    <div className="relative cursor-pointer bg-white p-4 rounded-sm text-sm flex-grow-0 z-30 hover:shadow-2xl shadow-slate-200">
      {/* absolute positioned percentge */}
      <div className="absolute top-0 right-0 mr-6 mt-2 z-40">
        <div className="text-sm px-6 py-[3px] rounded-md bg-tertiary-main/20 text-secondary-main">
          -{discountPercentage.toFixed(0)}%
        </div>
      </div>
      {/* image of the product */}
      <div className="bg-white relative">
        <Carousel autoplay>
          <img
            className="object-contain h-40 w-40 hover:scale-105 transition-all cursor-pointer ease-in-out"
            src={props.productGallery?.productImage}
            alt="this is the product_image"
          />
        </Carousel>
      </div>
      {/* STAR RATING */}
      <div className="flex mt-4 space-x-1">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon
              key={i}
              className="text-secondary-main fill-current h-[19px]"
            />
          ))}
      </div>
      {/* TODO:change the id */}
      <Link to={`/home/product/test-id`}>
        <p className="text-black line-clamp-1 text-[16px]  tracking-wide mt-1">
          {props.productName}
        </p>
        <div className="mt-2 text-xs md:text-[14px] text-black font-semibold ">
          <div className="inline-block space-y-1">
            <p className="text-black text-md">
              KSH <span>{numberWithCommas(props.productPrice?.salePrice)}</span>
            </p>
            <p className="line-through text-dune/70 text-slate-500 text-md">
              KSH{" "}
              <span> {numberWithCommas(props.productPrice?.regularPrice)}</span>
            </p>
          </div>
        </div>
        {/* a rounded rectangle dsplaying items left in the stock */}
        <div className="mt-1">
          <p className="text-slate-500 text-[13px] tracking-wide">
            {itemsLeftInStock} items Left{" "}
          </p>
          <div className="relative overflow-hidden bg-[#C4C4C4] rounded-md h-[6px] w-full">
            <div
              className="bg-secondary-main rounded-md  inset-0 absolute"
              style={{ width: `${percentageLeft}%` }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
