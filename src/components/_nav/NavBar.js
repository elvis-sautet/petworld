import { Search } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const logo = require("../../images/logo.webp");
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);

  //   checking if the clicked link is the same as the current location
  const isActive = (match, location) => {
    if (!match) {
      return false;
    }
    return location.pathname === match.url;
  };

  const rightBar = [
    {
      icon: require("../../images/user.png"),
      label: "User",
      to: "user",
    },
    {
      icon: require("../../images/question.png"),
      label: "Help",
      to: "help",
    },
    {
      icon: require("../../images/cart.png"),
      label: "Cart",
      to: "/home/cart",
    },
  ];

  return (
    <div className="navbar bg-tertiary-main w-full sticky top-0  whitespace-nowrap z-50">
      <div className="leading-8 py-4 px-4 flex items-center justify-between whitespace-nowrap">
        <Link to="/home/feed">
          <img src={logo} alt="logo" className="w-[169px]h-[48px]" />
        </Link>{" "}
        {/* search input with button*/}
        <div
          className="search items-center hidden space-x-2 lg:flex lg:justify-between p-3 py-1 ring-white group cursor-pointer ring-2 rounded-lg w-[467px] h-[44px] bg-tertiary-main"
          //  onClick trigger the ctrl+space
          onClick={() => {
            dispatch({ type: "OPEN_COMMAND_PALLETE" });
          }}
        >
          <div className="flex  whitespace-nowrap w-24 space-x-2 text-xm tracking-wide items-center">
            <Search className="!text-white !group-hover:!font-semibold" />
            <span className="text-white text-md tracking-wider">
              What Are You Looking...
            </span>
          </div>

          {/* search button */}
          <div className="from-accent-focus pl-1">
            <button className="ring-2 ring-white/60 bg-white/10  rounded-md px-2 py-.5 text-white tracking-wide text-sm">
              {/* crtl+spacebar */}
              <kbd className="text-fountain-blue">Ctrl+Space</kbd>
            </button>
          </div>
        </div>
        {/* right buttons*/}
        <div className="flex items-center space-x-[31px]">
          {rightBar.map((item, index) => {
            // check if the label is cart
            if (item.label === "Cart") {
              return (
                <div>
                  <Link
                    to={item.to}
                    key={index}
                    className={`hidden lg:flex items-center space-x-2 font-medium hover:cursor-pointer 
                  ${isActive(item, location) ? "font-[600]" : "text-white"}
                  `}
                  >
                    <div className="relative">
                      <img src={item.icon} alt="icon" />{" "}
                      {cartItems.length > 0 && (
                        <p className="text-white bg-secondary-main h-4 w-4 absolute -right-3 flex items-center justify-center p-3  rounded-full -top-3">
                          {cartItems?.length}
                        </p>
                      )}
                    </div>
                    <span className="text-white  tracking-wider">
                      {item.label}
                    </span>
                  </Link>
                </div>
              );
            } else {
              return (
                <Link
                  to={item.to}
                  key={index}
                  className={`hidden lg:flex items-center space-x-2 font-medium hover:cursor-pointer 
                  ${
                    isActive(item, location)
                      ? "text-fountain-blue"
                      : "text-white"
                  }
                  `}
                >
                  <img src={item.icon} alt="icon" />
                  <span className="text-white  tracking-wider">
                    {item.label}
                  </span>
                </Link>
              );
            }
          })}

          {/* search icon */}
          <div //  onClick trigger the ctrl+space
            onClick={() => {
              dispatch({ type: "OPEN_COMMAND_PALLETE" });
            }}
            className="flex items-center space-x-2 font-medium hover:cursor-pointer justify-end  text-xm tracking-wide lg:hidden "
          >
            <Search className="text-white !h-[28px] !w-[28px] group-hover:font-semibold" />
            {/* <span className="text-white  tracking-wider">Search</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
