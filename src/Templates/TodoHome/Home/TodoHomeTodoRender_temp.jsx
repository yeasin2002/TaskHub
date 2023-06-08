import TodoCard from "../layout/TodoCard";

import SortDropdown from "../layout/SortDropDown";
const TodoHomeTodoRender_temp = () => {
  return (
    <div className=" w-full h-full p-4">
      <div className=" md:flex-row flex flex-col justify-between w-full my-4">
        <p className="my-4">6 tasks found</p>

        <div className="gap-x-1 flex">
          {/*  dropdown 1 */}

          <SortDropdown />
          <SortDropdown />
          {/*  dropdown 1 --  end  */}
        </div>
      </div>

      <div className=" md:grid-cols-2 grid grid-cols-1 gap-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoHomeTodoRender_temp;
