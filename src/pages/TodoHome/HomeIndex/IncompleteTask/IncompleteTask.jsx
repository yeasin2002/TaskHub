import DotsBounce from "../../../../components/Icons/DotsBounce";
import TodoHomeTodoCard from "../TodoHomeTodoCard";

const IncompleteTask = ({ data }) => {
  return (
    <div className=" w-full h-full px-10 py-4">
      <div className=" md:flex-row flex flex-col justify-between w-full my-4">
        {data?.length ? (
          <p className="my-4">{data?.length || ""} tasks found</p>
        ) : (
          <DotsBounce />
        )}
      </div>

      <div className=" xl:grid-cols-2 2xl:grid-cols-3 grid grid-cols-1 gap-3">
        {data?.map((item, index) => {
          return (
            <TodoHomeTodoCard
              key={index}
              id={index}
              todoDetails={item}
              todoColor="bg-red-600"
            />
          );
        })}
      </div>
   
    </div>
  );
};

export default IncompleteTask;
