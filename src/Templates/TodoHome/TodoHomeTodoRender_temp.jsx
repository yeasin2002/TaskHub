import TodoCard from "./TodoCard";

const TodoHomeTodoRender_temp = () => {
  return (
    <div className=" w-full h-full p-4">
      <p>6 tasks found</p>

      <div className=" grid grid-cols-2 gap-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoHomeTodoRender_temp;
