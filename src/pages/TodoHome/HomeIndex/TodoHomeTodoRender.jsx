import AllTask from "./AllTask/AllTask";
import CompleteTask from "./CompleteTask/CompleteTask";
import IncompleteTask from "./IncompleteTask/IncompleteTask";

const TodoHomeTodoRender = ({ TodoStage }) => {
  let renderComponent = null;
  switch (TodoStage) {
    case "all":
      renderComponent = <AllTask />;
      break;
    case "complete":
      renderComponent = <CompleteTask />;
      break;
    case "incomplete":
      renderComponent = <IncompleteTask />;
      break;

    default:
      console.warn("TodoHomeTodoRender.jsx: TodoStage not found");
      break;
  }

  return <>{renderComponent}</>;
};

export default TodoHomeTodoRender;
