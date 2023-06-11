import TaskOrModifieTaskDetils from "./TaskOrModifieTaskDetils";
import TaskOrModifieTaskStageNav from "./TaskOrModifieTaskStageNav";

const AddTaskOrModifieTask_temp = () => {
  return (
    <div className="w-screen h-screen">
      <div className=" flex w-full h-full">
        <TaskOrModifieTaskStageNav />
        <TaskOrModifieTaskDetils />
      </div>
    </div>
  );
};

export default AddTaskOrModifieTask_temp;
