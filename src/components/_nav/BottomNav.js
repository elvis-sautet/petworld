import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function BottomNav() {
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  // cart items length example

  //   checking if the clicked link is the same as the current location
  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    return location.pathname === match.url;
  };
  // bottom bar
  const bottomBar = [
    {
      icon: (
        <Icon
          icon="fluent:home-16-regular"
          className={`!fill-stroke
          ${location.pathname === "/home/feed" ? "text-secondary-main" : ""}
          h-6 w-6 text-black/50 font-light`}
        />
      ),
      to: "/home/feed",
      label: "Home",
    },
    {
      icon: (
        <div className="flex items-center relative">
          <Icon
            icon="akar-icons:shopping-bag"
            className={`!fill-stroke
          ${
            location.pathname === `/home/cart`
              ? "text-secondary-main stroke-2"
              : ""
          }
          h-6 w-6 text-black/50 font-light`}
          />
          {cartItems.length > 0 && (
            <p className="text-white bg-secondary-main h-4 w-4 absolute flex items-center justify-center p-3 -right-3 -top-3 rounded-full text-sm">
              {cartItems?.length}
            </p>
          )}
        </div>
      ),
      to: "/home/cart",
      label: "Cart",
    },
    {
      icon: (
        <Icon
          icon="bx:help-circle"
          className={`!fill-stroke
          ${location.pathname === `/home/help` ? "text-secondary-main" : ""}
          h-6 w-6 text-black/50 font-light`}
        />
      ),
      to: "/home/feed/help",
      label: "Help",
    },
    {
      icon: (
        <Icon
          icon="fa-regular:user-circle"
          className={`!fill-stroke
          ${
            location.pathname === `/home/user`
              ? "text-secondary-main scale-1.5"
              : ""
          }
          h-6 w-6 text-black/50 font-light`}
        />
      ),
      to: "/home/feed/user",
      label: "User",
    },
  ];
  return (
    <div className="w-full z-40 bottom-0 bg-white fixed py-4 px-4 shadow-xl shadow-slate-100">
      <div className="flex justify-between items-center ">
        <div>
          <Icon
            icon="clarity:menu-line"
            className={`!fill-stroke
             h-6 w-6 text-black/50 font-light`}
          />
        </div>
        {bottomBar.map((item, index) => (
          <Link
            key={index}
            className={`flex items-center
          
          `}
            to={item.to}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BottomNav;
