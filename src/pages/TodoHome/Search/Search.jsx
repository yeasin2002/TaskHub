import { useGetAllTaskQuery } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice";
import SearchTodoSearchArea from "./SearchTodoSearchArea";
import ShortTodo from "./ShortTodo";

const Search = () => {
  const { data, isLoading, isSuccess } = useGetAllTaskQuery();

  let tasks = data?.data?.tasks || [];

  return (
    <>
      <div className=" md:p-4 flex w-full h-screen">
        <ShortTodo />
        <SearchTodoSearchArea
          tasks={tasks}
          isSuccess={isSuccess}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Search;
