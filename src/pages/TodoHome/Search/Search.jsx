import { useGetAllTaskQuery } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice";

import SearchTodoSearchArea from "./SearchTodoSearchArea";

import ShortTodo from "./ShortTodo";

const Search = () => {
  const { data, isLoading } = useGetAllTaskQuery();
  console.log(data);

  return (
    <>
      <div className=" md:p-4 flex w-full h-screen">
        <ShortTodo />
        <SearchTodoSearchArea />
      </div>
    </>
  );
};

export default Search;
