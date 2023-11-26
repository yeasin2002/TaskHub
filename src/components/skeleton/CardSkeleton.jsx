import { AnimatePresence } from "framer-motion"

const CardSkeleton = ({ ...props }) => {
  return (
    <AnimatePresence>
      <div {...props}>
        <div className="flex w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <div className=" w-1/3 bg-gray-300"></div>
          <div className="w-2/3 p-4 md:p-4">
            <h1 className=" h-2 w-40 rounded-lg bg-gray-200"></h1>
            <p className=" mt-4 h-2 w-48 rounded-lg bg-gray-200"></p>
            <div className="item-center mt-4 flex gap-x-2">
              <p className=" h-2 w-5 rounded-lg bg-gray-200"></p>
              <p className=" h-2 w-5 rounded-lg bg-gray-200"></p>
              <p className=" h-2 w-5 rounded-lg bg-gray-200"></p>
              <p className=" h-2 w-5 rounded-lg bg-gray-200"></p>
              <p className=" h-2 w-5 rounded-lg bg-gray-200"></p>
            </div>
            <div className="item-center mt-6 flex justify-between">
              <h1 className=" h-2 w-10 rounded-lg bg-gray-200"></h1>
              <div className="h-4 w-28 rounded-lg bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default CardSkeleton
