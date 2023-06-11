import TaskOrModifieTaskStageNav from "./TaskOrModifieTaskStageNav";

// import TaskOrModifieTaskDetils_Basic from "./TaskOrModifieTaskDetils_Basic";
import TaskOrModifieTaskDetils_Advance from "./TaskOrModifieTaskDetils_Advance";

const AddTaskOrModifieTask_temp = () => {
  return (
    <div className="bg-Light w-screen h-screen">
      <div className=" flex w-full h-full">
        <TaskOrModifieTaskStageNav />

        {/* <TaskOrModifieTaskDetils_Basic /> */}
        <TaskOrModifieTaskDetils_Advance />
      </div>
    </div>
  );
};

export default AddTaskOrModifieTask_temp;
