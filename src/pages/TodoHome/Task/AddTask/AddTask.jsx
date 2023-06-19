import AddTask_Form from "./AddTask_Form";
import AddTaskStage from "./AddTaskStage";

const AddTask = () => {
  return (
    <>
      <div className="bg-Light w-full h-full">
        <AddTaskStage />
        <AddTask_Form />
      </div>
    </>
  );
};

export default AddTask;
