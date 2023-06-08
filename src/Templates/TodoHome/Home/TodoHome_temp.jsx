import TodoHomeBottomNav_temp from "../layout/TodoHomeBottomNav_temp";
import TodoHomeIndex_temp from "./TodoHomeIndex_temp";
import TodoHomeSidebar_temp from "./TodoHomeSidebar_temp";

const TodoHome_temp = () => {
  return (
    <div className=" flex flex-col justify-between">
      <div className="flex">
        <TodoHomeSidebar_temp />
        <TodoHomeIndex_temp />
      </div>

      {/*  bottom navigation  */}
      <TodoHomeBottomNav_temp />
    </div>
  );
};

export default TodoHome_temp;
