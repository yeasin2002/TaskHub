import {
  useCompletedTaskMutation,
  useUncompletedTaskMutation,
} from "../../../Redux/feature/API/taskApiSlice/taskApiSlice"

import loader from "../../../assets/global/loaderIcon.svg"

const CompletedOrUncompleted = ({ completed, id }) => {
  const [completedTask, { isLoading }] = useCompletedTaskMutation()
  const [uncompletedTask, { isLoading: uncompletedTaskLoading }] = useUncompletedTaskMutation()

  return (
    <div className=" relative flex flex-col justify-between">
      <input
        type="checkbox"
        name="todo"
        id="todo"
        value={completed}
        checked={completed}
        onChange={() => {
          completed ? uncompletedTask(id) : completedTask(id)
        }}
      />
      {(isLoading || uncompletedTaskLoading) && (
        <span className=" absolute left-0 top-0 inline-block h-4 w-4 bg-blackens">
          <img className="h-full w-full" src={loader} alt="updating" />
        </span>
      )}
    </div>
  )
}

export default CompletedOrUncompleted
