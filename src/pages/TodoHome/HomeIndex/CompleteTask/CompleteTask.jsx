import TodoHomeTodoCard from "../TodoHomeTodoCard";
import SelectDropDown from "../SelectDropDown";

const CompleteTask = ({ data }) => {
  return (
    <div className=" w-full h-full px-10 py-4">
      <div className=" md:flex-row flex flex-col justify-between w-full my-4">
        <p className="my-4">6 tasks found</p>

        <div className="gap-x-1 flex mt-10">
          {/*  dropdown 1 */}

          <SelectDropDown />
          <SelectDropDown />
          {/*  dropdown 1 --  end  */}
        </div>
      </div>

      <div className=" md:grid-cols-2 xl:grid-cols-3 grid grid-cols-1 gap-3">
        {data?.map((todoDetails, index) => {
          return (
            <TodoHomeTodoCard
              key={index}
              todoDetails={todoDetails}
              todoColor="bg-green-600"
            />
          );
        })}
      </div>
      {/*  if there is not data found */}
      {data && data.length === 0 && (
        <div>
          <p className="text-2xl text-center">No Task Found</p>
        </div>
      )}
    </div>
  );
};

export default CompleteTask;
