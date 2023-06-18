import { useState } from "react";
import AddTaskStageNav from "./AddTaskStageNav";
import AddTask_Advance from "./AddTask_Advance";
import AddTask_Basic from "./AddTask_Basic";

import AddTaskStage from "./AddTaskStage";

const AddTask = () => {
  const [isAdvance, setIsAdvance] = useState(false);
  return (
    <>
      <div className="bg-Light w-full h-full">
        <div className=" flex w-full h-full">
          <AddTaskStageNav setIsAdvance={setIsAdvance} />

          {/* <TaskOrModifieTaskDetils_Basic /> */}
          <div className="w-full">
            <AddTaskStage isAdvance={isAdvance} />
            {isAdvance ? (
              <AddTask_Advance setIsAdvance={setIsAdvance} />
            ) : (
              <AddTask_Basic setIsAdvance={setIsAdvance} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
