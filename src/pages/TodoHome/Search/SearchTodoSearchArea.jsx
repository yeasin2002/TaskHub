import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import TodoHomeTodoCard from "../HomeIndex/TodoHomeTodoCard"
import SearchBar from "./SearchBar"
// import Tooltip from "../../../components/Tooltip";

import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai"
import CardSkeleton from "../../../components/skeleton/CardSkeleton"

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  const [isExactMatch, setIsExactMatch] = useState(false)
  // const [isShortTooltipOpen, setIsShortTooltipOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { participants, nameAndDescription, sortByAccenting, searchValue } = useSelector((state) => state?.searchSlice)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchedTasks = () => {
    return tasks.filter((perTask) => {
      if (!searchValue) {
        return perTask
      } else {
        if (isExactMatch) {
          return perTask?.title.includes(searchValue)
        } else {
          return perTask?.title?.toLowerCase().includes(searchValue.toLowerCase())
        }
      }
    })
  }
  useEffect(() => {
    SearchedTasks()
  }, [SearchedTasks])

  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="my-4 flex justify-between px-6">
        {isSuccess && <p className="font-bold text-blackens">{SearchedTasks().length} Task Found</p>}
        <div className=" flex">
          <button
            className="mr-5 flex cursor-pointer items-center gap-x-1 rounded-lg border border-blue-600 px-2 py-1"
            onClick={() => setIsExactMatch(!isExactMatch)}>
            {isExactMatch ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
            <p>Exact Match</p>
          </button>

          {/* <div className=" relative inline-block">
            <div
              className="gap-x-1 flex items-center"
              onClick={() => {
                setIsShortTooltipOpen(!isShortTooltipOpen);
              }}
            >
              <p>Short By</p>
              <span
                className={` transition-all duration-500 ${
                  isShortTooltipOpen && "-rotate-180"
                }`}
              >
                <BiUpArrow />
              </span>
            </div>

            {isShortTooltipOpen && <Tooltip />}
          </div> */}
        </div>
      </div>
      <div>
        {isLoading && (
          <div className="w-full">
            {[1, 2, 3, 4, 5].map((val) => {
              return <CardSkeleton className={"my-2 w-full"} key={val} />
            })}
          </div>
        )}
      </div>
      <div className="mx-4 grid gap-y-2 md:mx-1">
        {isSuccess &&
          SearchedTasks()?.map((items) => {
            return <TodoHomeTodoCard todoDetails={items} key={items._id} />
          })}
      </div>
    </div>
  )
}
export default SearchTodoSearchArea
