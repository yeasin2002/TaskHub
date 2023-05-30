import { Link } from "react-router-dom";
import NotFoundImg from "../components/Icons/NotFoundImg";
const NotFound = () => {
  return (
    <div>
      <section className="dark:bg-gray-900  bg-white">
        <div className="lg:flex lg:items-center lg:gap-12 container min-h-screen px-6 py-12 mx-auto">
          <div className="wf-ull lg:w-1/2">
            <p className="dark:text-blue-400 text-sm font-medium text-blue-500">
              404 error
            </p>
            <h1 className="dark:text-white md:text-3xl mt-3 text-2xl font-semibold text-gray-800">
              Page not found
            </h1>
            <p className="dark:text-gray-400 mt-4 text-gray-500">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>

            <div className="gap-x-3 flex items-center mt-6">
              <button className="gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="rtl:rotate-180 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>

              <button className="shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg">
                Take me home
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 lg:mt-0 relative w-full mt-12">
            <NotFoundImg />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
