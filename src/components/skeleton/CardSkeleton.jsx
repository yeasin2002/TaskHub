import { AnimatePresence } from "framer-motion";

const CardSkeleton = ({ ...props }) => {
  return (
    <AnimatePresence>
      <div {...props}>
        <div className="animate-pulse dark:bg-gray-800 flex w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
          <div className=" w-1/3 bg-gray-300"></div>
          <div className="md:p-4 w-2/3 p-4">
            <h1 className=" w-40 h-2 bg-gray-200 rounded-lg"></h1>
            <p className=" w-48 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            <div className="item-center gap-x-2 flex mt-4">
              <p className=" w-5 h-2 bg-gray-200 rounded-lg"></p>
              <p className=" w-5 h-2 bg-gray-200 rounded-lg"></p>
              <p className=" w-5 h-2 bg-gray-200 rounded-lg"></p>
              <p className=" w-5 h-2 bg-gray-200 rounded-lg"></p>
              <p className=" w-5 h-2 bg-gray-200 rounded-lg"></p>
            </div>
            <div className="item-center flex justify-between mt-6">
              <h1 className=" w-10 h-2 bg-gray-200 rounded-lg"></h1>
              <div className="w-28 h-4 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default CardSkeleton;
