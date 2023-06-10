import SideBarForSorting from "./SideBarForSorting";
import TodoSearchArea from "./TodoSearchArea";

const Search_temp = () => {
  return (
    <div className=" md:p-4 flex w-full h-screen">
      <SideBarForSorting />
      <TodoSearchArea />
    </div>
  );
};

export default Search_temp;
