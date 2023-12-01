import { useEffect } from "react"
import { useSelector } from "react-redux"
import { FilterItems } from "./FiltersItems"
import SearchBar from "./SearchBar"

import CardSkeleton from "../../../components/skeleton/CardSkeleton"
import EachTodoWrapper from "../HomeIndex/EachTodoWrapper"

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  // eslint-disable-next-line no-unused-vars
  const { nameAndDescription, sortByAccenting, filterByName, searchValue } = useSelector((state) => state?.searchSlice)

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

    const shortByAcc = searchedTask.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    return sortByAccenting ? shortByAcc : shortByAcc.reverse()
  }
  useEffect(() => {
    SearchedTasks()
  }, [SearchedTasks, sortByAccenting, filterByName, searchValue])

  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="my-4 flex justify-between px-6">
        <div>{isSuccess && <p className="font-bold text-blackens">{SearchedTasks()?.length} Task Found</p>}</div>
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
      <div>{isSuccess && <EachTodoWrapper todoType={"all"} tasks={SearchedTasks()} />}</div>
    </div>
  )
}
export default SearchTodoSearchArea


/*

My responsive this an array of object , Each object gonna be this 
{
    "_id": "656771bcc0d4f0c5588b8905",
    "title": "React ",
    "description": "Reacta testing",
    "owner": {
        "_id": "65635a685a9c00e46dda7ca0",
        "name": "Mohammad Yeasin",
        "username": "yesin2023"
    },
    "completed": false,
    "startingDate": "2023-11-24T00:00:00.000Z",
    "endingDate": "2023-11-30T00:00:00.000Z",
    "createdAt": "2023-11-29T17:15:40.461Z",
    "participants": []
}


Now i want to sort by date, Accending and decending order
how can i do that ?
*/