import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { Button } from "@mui/material";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../state/Auth/Action.js";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "./NavigationData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [fopen, setFopen] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpen = () => setFopen(true);
  const handleClose = () => setFopen(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }

    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user, jwt]);

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    setOpen(false);
    close();
  };

  
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="text-red-700 bg-white ">
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="flex px-4 -mb-px space-x-8">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="px-4 pt-10 pb-8 space-y-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="relative text-sm group"
                            >
                              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="block mt-6 font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="flex flex-col mt-6 space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p
                                    onClick={() =>
                                      handleCategoryClick(
                                        category,
                                        section,
                                        item,
                                        close
                                      )
                                    }
                                  >
                                    {item.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="block p-2 -m-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    {auth.user?.firstName ? (
                      <Avatar
                        onClick={handleLogout}
                        sx={{ bgcolor: deepPurple[600] }}
                      >
                        {auth.user.firstName[0].toUpperCase()}
                      </Avatar>
                    ) : (
                      <Button onClick={handleOpen}>Sign In</Button>
                    )}
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="relative bg-white">
        <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-indigo-600 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 "
        >
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="relative p-2 text-gray-400 bg-white rounded-md lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <p onClick={()=>navigate('/')} className="cursor-pointer" >
                  <span className="sr-only">Your Company</span>
                  <img
                    className="w-auto h-8"
                    src="https://www.freepngimg.com/thumb/online_shopping/10-2-online-shopping-png-image.png"
                    alt=""
                  />
                </p>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600 "
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 bg-white shadow "
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="px-8 mx-auto max-w-7xl">
                                  <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                                    <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="relative text-base group sm:text-sm"
                                        >
                                          <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="block mt-6 font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      RAm
                    </a>
                  ))} */}
                </div>
              </PopoverGroup>

              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName ? (
                    <Avatar
                      onClick={handleLogout}
                      sx={{ bgcolor: deepPurple[600] }}
                    >
                      {auth.user.firstName[0].toUpperCase()}
                    </Avatar>
                  ) : (
                    <Button onClick={handleOpen}>Sign In</Button>
                  )}
                  <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6">
                  <p onClick={()=>navigate('/cart')}  className="flex items-center p-2 -m-2 cursor-pointer group">
                    <ShoppingBagIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal open={fopen} handleClose={handleClose} />
    </div>
  );
}
