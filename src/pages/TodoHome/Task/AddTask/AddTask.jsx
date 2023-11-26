import AddTask_Form from "./AddTask_Form"
import AddTaskStage from "./AddTaskStage"

const AddTask = () => {
  return (
    <>
      <div className="h-full w-full bg-Light">
        <AddTaskStage />
        <AddTask_Form />
      </div>
    </>
  )
}

export default AddTask
