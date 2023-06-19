import EditsTaskStage from "./EditsTaskStage";
import UpdateTaskForm from "./UpdateTaskForm";

const UpdateTask = () => {
  return (
    <>
      <div className="bg-Light w-full h-full">
        <EditsTaskStage />
        <UpdateTaskForm />
      </div>
    </>
  );
};

export default UpdateTask;
