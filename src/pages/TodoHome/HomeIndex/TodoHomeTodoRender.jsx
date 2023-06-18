import { useGetAllTaskQuery } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice";
import AllTask from "./AllTask/AllTask";
import CompleteTask from "./CompleteTask/CompleteTask";
import IncompleteTask from "./IncompleteTask/IncompleteTask";

const TodoHomeTodoRender = ({ TodoStage }) => {
  const { data } = useGetAllTaskQuery();

  const completedTask =
    data?.data?.tasks.filter((todo) => {
      if (todo?.completed) return todo;
    }) || [];

  const incompleteTask =
    data?.data?.tasks.filter((todo) => {
      if (!todo?.completed) return todo;
    }) || [];

  let renderComponent = null;
  switch (TodoStage) {
    case "all":
      renderComponent = <AllTask data={data?.data?.tasks} />;
      break;
    case "complete":
      renderComponent = <CompleteTask data={completedTask} />;
      break;
    case "incomplete":
      renderComponent = <IncompleteTask data={incompleteTask} />;
      break;

    default:
      console.warn("TodoHomeTodoRender.jsx: TodoStage not found");
      break;
  }

  return <>{renderComponent}</>;
};

export default TodoHomeTodoRender;
