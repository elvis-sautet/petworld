import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { filter } from "lodash";
import {
  CLOSE_COMMAND_PALLETE,
  OPEN_COMMAND_PALLETE,
} from "../../actions/types";
import { useSelector, useDispatch } from "react-redux";
import PRODUCTS from "../../_mocks_/products";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// handle filter by name
function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_product) =>
        _product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

function CommandPallete() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.commandPallete);

  //   const { comand: STAFFDATA } = useSelector((state) => state?.staff);

  // query our search
  const [query, setQuery] = useState("");

  //sort the products
  const [order] = useState("asc");
  const [orderBy] = useState("productName");

  //filter the products
  const filteredProducts = applySortFilter(
    PRODUCTS,
    getComparator(order, orderBy),
    query
  );

  //open the command pallete from both the desktop and mobile using useEffect
  useEffect(() => {
    function onkeydown(event) {
      //disable all other command pallete events to the browser
      //   event.preventDefault();
      if (event.key === " " && (event.metaKey || event.ctrlKey)) {
        dispatch({ type: OPEN_COMMAND_PALLETE });
      }
    }

    //function

    //on desktop
    window.addEventListener("keydown", onkeydown);

    // //on mobile when a user clicks on the search icon
    // window.addEventListener("touchstart", ontouchstart);

    //clean up
    return () => {
      window.removeEventListener("keydown", onkeydown);
      //   window.removeEventListener("touchstart", ontouchstart);
    };
  }, [dispatch, isOpen]);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={() => dispatch({ type: CLOSE_COMMAND_PALLETE })}
        className="fixed inset-0 p-4 overflow-y-auto z-50  pt-[20vh]"
      >
        <Transition.Child
          enter=" ease-out duration-300 "
          enterFrom="opacity-0 "
          enterTo="opacity-100"
          leave=" ease-in duration-200 "
          leaveFrom="opacity-100 "
          leaveTo="opacity-0 "
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-50" />
        </Transition.Child>

        <Transition.Child
          enter=" ease-out duration-300 "
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration 200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="relative bg-white max-w-xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100 overflow-hidden"
            onChange={(project) => {
              //when user selects a product, redirect to the /product/:id page
              dispatch({ type: CLOSE_COMMAND_PALLETE });
              // navigate(`/product/${project._id}`);
              navigate(`product/test-id`);
            }}
          >
            <div className="flex items-center px-4">
              <SearchIcon className="h6 w-6 text-gray-500 flex-grow-0" />
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent border-0 focus:ring-0 text-sm text-gray-800 placeholder:text-400 h-12 border-none focus:outline-none focus:border-none pl-2 w-full flex-1 !py-6 md:!text-lg flex-grow"
                placeholder="Search for a product..."
              />
              {/* close combobox */}
              <button
                className="absolute right-0 top-0 mt-3 mr-3 flex-grow-0"
                onClick={() => dispatch({ type: CLOSE_COMMAND_PALLETE })}
              >
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* options */}
            {filteredProducts.length > 0 && (
              <Combobox.Options className="py-4 text-sm max-h-96 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <Combobox.Option key={product.id} value={product}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 ${
                          active
                            ? "bg-tertiary-main text-white"
                            : "bg-white text-slate-900"
                        }
                      line-clamp-2 font-semibold  select-none md:text-lg
        `}
                      >
                        {product.productName}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredProducts.length === 0 && (
              <div className="px-4 py-2 bg-white text-slate-900">
                No products found
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

export default CommandPallete;
