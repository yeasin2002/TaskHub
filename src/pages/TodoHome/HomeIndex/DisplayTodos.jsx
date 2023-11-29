import CardSkeleton from "../../../components/skeleton/CardSkeleton"
import { useGetAllTaskQuery } from "../../../Redux/feature/API/taskApiSlice/taskApiSlice"
import EachTodoWrapper from "./EachTodoWrapper"

const DisplayTodo = ({ TodoStage }) => {
  const { data, isLoading, isError } = useGetAllTaskQuery()

  const completedTask =
    data?.data?.tasks.filter((todo) => {
      if (todo?.completed) return todo
    }) || []

  const incompleteTask =
    data?.data?.tasks.filter((todo) => {
      if (!todo?.completed) return todo
    }) || []

  const loadingComponents = (
    <div className="grid grid-cols-1 space-y-4 p-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 5 }).map((_, index) => {
        return <CardSkeleton key={index} />
      })}
    </div>
  )
  const errorComponents = <div>error</div>

  let renderComponent = null
  switch (TodoStage) {
    case "all":
      renderComponent = <EachTodoWrapper tasks={data?.data?.tasks} todoType={"all"} />
      break
    case "complete":
      renderComponent = <EachTodoWrapper tasks={completedTask} todoType={"complete"} />
      break
    case "incomplete":
      renderComponent = <EachTodoWrapper tasks={incompleteTask} todoType={"incomplete"} />
      break

    default:
      console.warn(`
      ${TodoStage} is not found 
      `)
      break
  }

  return <div>{isError ? errorComponents : isLoading ? loadingComponents : renderComponent}</div>
}
export default DisplayTodo
