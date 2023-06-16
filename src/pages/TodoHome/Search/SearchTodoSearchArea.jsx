import SearchBar from "./SearchBar";

const SearchTodoSearchArea = () => {
  return (
    <div className=" flex-1">
      <SearchBar />
      <div className="flex justify-between px-6 mt-2">
        <p>6 Task Found</p>
        <span className="bg-dim border-Shades px-2 border-b">Sort By </span>
      </div>
    </div>
  );
};
export default SearchTodoSearchArea;
