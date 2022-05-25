import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function BottomNav() {
  const location = useLocation();

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
          className="!fill-stroke h-6 w-6 text-black/50 font-light"
        />
      ),
      to: "",
      label: "Home",
    },
    {
      icon: (
        <Icon
          icon="akar-icons:shopping-bag"
          className="!fill-stroke h-6 w-6 text-black/50 font-light"
        />
      ),
      to: "/home/feed/cart",
      label: "Cart",
    },
    {
      icon: (
        <Icon
          icon="bx:help-circle"
          className="!fill-stroke h-6 w-6 text-black/50 font-light"
        />
      ),
      to: "/home/feed/help",
      label: "Help",
    },
    {
      icon: (
        <Icon
          icon="fa-regular:user-circle"
          className="!fill-stroke h-6 w-6 text-black/50 font-light"
        />
      ),
      to: "/home/feed/user",
      label: "User",
    },
  ];
  return (
    <div className="w-full z-40 bottom-0 bg-white fixed py-4 px-4 shadow-xl shadow-slate-50">
      <div className="flex justify-between items-center ">
        <div>
          <Icon
            icon="gg:menu-left"
            className="!fill-stroke h-6 w-6 text-black/50 font-light"
          />
        </div>
        {bottomBar.map((item, index) => (
          <Link key={index} className="flex items-center " to={item.to}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BottomNav;
