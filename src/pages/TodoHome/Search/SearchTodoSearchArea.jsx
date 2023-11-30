import { useEffect } from "react"
import { useSelector } from "react-redux"
import { FilterItems } from "./FiltersItems"
import SearchBar from "./SearchBar"

import CardSkeleton from "../../../components/skeleton/CardSkeleton"
import EachTodoWrapper from "../HomeIndex/EachTodoWrapper"

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  // eslint-disable-next-line no-unused-vars
  const { participants, nameAndDescription, sortByAccenting, filterByName, searchValue } = useSelector(
    (state) => state?.searchSlice
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchedTasks = () => {
    const searchedTask = tasks.filter((perTask) => {
      if (!searchValue) return perTask
      if (filterByName) {
        return perTask?.title?.toLowerCase().includes(searchValue.toLowerCase())
      } else {
        return perTask?.description?.toLowerCase().includes(searchValue.toLowerCase())
      }
    })
    return sortByAccenting ? searchedTask : searchedTask.reverse()
  }
  useEffect(() => {
    SearchedTasks()
  }, [SearchedTasks, sortByAccenting, filterByName, searchValue])
  const todo = SearchedTasks()
  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="my-4 flex justify-between px-6">
        <div>{isSuccess && <p className="font-bold text-blackens">{SearchedTasks().length} Task Found</p>}</div>
        <div className=" flex">
          <FilterItems />
        </div>
      </div>
      <div>
        {isLoading && (
          <div className="grid w-full  grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4, 5].map((val) => {
              return <CardSkeleton className={"my-2 w-full"} key={val} />
            })}
          </div>
        )}
      </div>
      <div>{isSuccess && <EachTodoWrapper todoType={"all"} tasks={todo} />}</div>
    </div>
  )
}
export default SearchTodoSearchArea
