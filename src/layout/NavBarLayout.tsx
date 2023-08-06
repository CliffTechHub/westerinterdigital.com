import { useState } from "react";
import Logo from "../assets/LogoMain.jpeg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



// Main Navigation Bar
const NavBarComponent = () => {
  // router navigation to the home page
 

  const [isOpen, setIsOpen] = useState(false);

  //    Toggle Menu Function
  // This function is used to toggle the menu on mobile devices
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  // FUNCTION TO REDIRECT TO THE HOME PAGE



  return (
    <>
      <nav className=" bg-white  fixed top-0 w-full  border-b  z-50 shadow ">
        <div className="container sm:px-10 px-10   xl:px-20 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="/">
                <img
                  className="w-40 h-20 sm:auto  sm:h-20"
                  src={Logo}
                  alt="Logo"
                />
              </a>

              {/* Mobile menu button     */}
              <div className="flex lg:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <>
                      {/* Menu icon */}
                      <AiOutlineMenu className="w-6 h-6" />
                    </>
                  ) : (
                    <>
                      {/* Close menu icon */}

                      <AiOutlineClose className="w-6 h-6" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 border-b  sm:border-b lg:border-none shadow-sm sm:shadow-none  "
                  : "opacity-0 -translate-x-full "
              } absolute inset-x-0  w-full px-6 py-4 z-40 transition-all duration-300 ease-in-out bg-whit  border-t-4 sm:border-none  bg-white lg:mt-0  lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col  sm:items-start -mx-6 lg:flex-row lg:items-center ">
                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-2  text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:text-white hover:bg-primary    "
                >
                  Home
                </button>

                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-2  text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:text-white hover:bg-primary   "
                >
                  About Us
                </button>

                <hr className="  lg:hidden border-1  w-full shadow-none border-gray-300 " />

                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-tertiary hover:text-white hover:bg-primary  "
                >
                  Contact Us
                </button>

                <hr className="  lg:hidden border-1  w-full shadow-none border-gray-300 " />

                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:text-white hover:bg-primary  "
                >
                  Service
                </button>

                <hr className="  lg:hidden border-1  w-full shadow-none border-gray-300 " />

                <hr className="  lg:hidden border-1  w-full shadow-none border-gray-300 " />
                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-2   text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:text-white hover:bg-primary  "
                >
                  Contact Us
                </button>
              </div>

              <div />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
