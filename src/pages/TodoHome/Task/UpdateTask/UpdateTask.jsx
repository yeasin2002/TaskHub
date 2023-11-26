import EditsTaskStage from "./EditsTaskStage"
import UpdateTaskForm from "./UpdateTaskForm"

const UpdateTask = () => {
  return (
    <>
      <div className="h-full w-full bg-Light">
        <EditsTaskStage />
        <UpdateTaskForm />
      </div>
    </>
  )
}

export default UpdateTask
