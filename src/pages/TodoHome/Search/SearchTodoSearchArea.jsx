import SearchBar from "./SearchBar";
import TodoHomeTodoCard from "../HomeIndex/TodoHomeTodoCard";
import CardSkeleton from "../../../components/skeleton/CardSkeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SearchTodoSearchArea = ({ tasks, isSuccess, isLoading }) => {
  // eslint-disable-next-line no-unused-vars
  const { participants, nameAndDescription, sortByAccenting, searchValue } =
    useSelector((state) => state?.searchSlice);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchedTasks = () => {
    return tasks.filter((perTask) => {
      return perTask?.title?.toLowerCase().includes(searchValue.toLowerCase());
    });
  };
  useEffect(() => {
    let data = SearchedTasks();
    console.log(data);
  }, [SearchedTasks]);

  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="flex justify-between px-6 my-4">
        {isSuccess && (
          <p className="text-blackens font-bold">{tasks.length} Task Found</p>
        )}
        <span className="bg-dim border-Shades px-2 border-b">Sort By </span>
      </div>
      <div>
        {isLoading && (
          <div className="w-full">
            {[1, 2, 3, 4, 5].map((val, i) => {
              return <CardSkeleton className={"my-2 w-full"} key={i} />;
            })}
          </div>
        )}
      </div>
      <div className="gap-y-2 md:mx-1 grid mx-4">
        {isSuccess &&
          tasks?.map((items) => {
            return <TodoHomeTodoCard todoDetails={items} key={items._id} />;
          })}
      </div>
    </div>
  );
};
export default SearchTodoSearchArea;
