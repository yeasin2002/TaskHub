import { Link } from "react-router-dom";

//  components lib
import { Button } from "@mui/material";

//  assets
import Menu from "../../components/Icons/Menu";
import logo from "../../assets/Brand.svg";

const SearchBoxTemplate = () => {
  return (
    <>
      <nav className="dark:bg-gray-900 bg-white border-gray-200">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="w-52" />
          </Link>
          <div className="md:order-2 flex">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            ></button>
            <div className="md:block md:into-center relative hidden">
              <Button variant="contained" className="mx-1 bg-blue-600">
                Contained
              </Button>
              <Button variant="contained" className="mx-1 bg-blue-600">
                Log In
              </Button>
            </div>

            {/*  open menu on mobile mode  */}
            <Button
              type="button"
              className="md:hidden inline-flex items-center p-2 text-sm rounded-lg"
            >
              <span className="sr-only">Open menu</span>
              <Menu />
            </Button>
          </div>
          <div
            className="md:flex md:w-auto md:order-1 items-center justify-between hidden w-full"
            id="navbar-search"
          >
            <div className="md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg">
              <Link
                to={"/"}
                className="md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default SearchBoxTemplate;
