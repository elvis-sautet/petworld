import React from "react";
import { useSelector } from "react-redux";
import Page from "../components/Page";
import CartComponent from "../components/_product/Cart";

function Cart() {
  const { cartItems } = useSelector((state) => state?.cart);

  return (
    <Page
      title={
        // if the cart is empty, display "Cart" else display "Cart (n)"
        // eslint-disable-next-line no-unused-vars
        cartItems.length > 0 ? `Cart (${cartItems.length})` : "Cart Page"
      }
    >
      <div className="lg:px-10 sm:px-3">
        <CartComponent />
      </div>
    </Page>
  );
}

export default Cart;
