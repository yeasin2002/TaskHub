import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import SearchBar from "./SearchBar"

import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai"
import CardSkeleton from "../../../components/skeleton/CardSkeleton"
import EachTodoWrapper from "../HomeIndex/EachTodoWrapper"

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  const [isExactMatch, setIsExactMatch] = useState(false)

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
  const todo = SearchedTasks()
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
      <div className="mx-4 grid gap-y-2 md:mx-1">{isSuccess && <EachTodoWrapper todoType={"all"} tasks={todo} />}</div>
    </div>
  )
}
export default SearchTodoSearchArea
