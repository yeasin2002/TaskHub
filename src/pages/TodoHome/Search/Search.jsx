import SearchTodoSearchArea from "./SearchTodoSearchArea";

import ShortTodo from "./ShortTodo";

const Search = () => {
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
