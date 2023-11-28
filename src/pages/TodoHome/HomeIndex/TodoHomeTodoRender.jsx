import { useGetAllTaskQuery } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice"

import AllTask from "./AllTask/AllTask"
import CompleteTask from "./CompleteTask/CompleteTask"
import IncompleteTask from "./IncompleteTask/IncompleteTask"
// import loading from "../.././../assets/global/loading.svg";

import CardSkeleton from "../../../components/skeleton/CardSkeleton"
// import logOut from "../../../utils/logOut"

const TodoHomeTodoRender = ({ TodoStage }) => {
  const { data, isLoading } = useGetAllTaskQuery()

  // if (status === "rejected") {
  //   if (error.status == 401) {
  //     toast.error("Session Expired");
  //     logOut();

  //     console.log(error.data.message);
  //   }
  // }

  const completedTask =
    data?.data?.tasks.filter((todo) => {
      if (todo?.completed) return todo
    }) || []

  const incompleteTask =
    data?.data?.tasks.filter((todo) => {
      if (!todo?.completed) return todo
    }) || []

  let renderComponent = null
  switch (TodoStage) {
    case "all":
      renderComponent = <AllTask data={data?.data?.tasks} />
      break
    case "complete":
      renderComponent = <CompleteTask data={completedTask} />
      break
    case "incomplete":
      renderComponent = <IncompleteTask data={incompleteTask} />
      break

    default:
      console.warn("TodoHomeTodoRender.jsx: TodoStage not found")
      break
  }

  return (
    <div>
      <div> {renderComponent}</div>

      {/*  loading Stage    */}
      {isLoading && (
        <div className=" grid grid-cols-1 gap-3 p-6 xl:grid-cols-2 2xl:grid-cols-2">
          {[41, 5, 5, 2, 1, 5, 4, 54].map((val) => {
            return <CardSkeleton key={val} />
          })}
        </div>
      )}
    </div>
  )
}

export default TodoHomeTodoRender
