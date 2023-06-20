import TodoHomeTodoCard from "../TodoHomeTodoCard";

const AllTask = ({ data }) => {
  return (
    <div className=" w-full h-full px-10 py-4">
      <div className=" md:flex-row flex flex-col justify-between w-full my-4">
        <p className="my-4">{data.length || ""} tasks found</p>
      </div>

      <div className=" xl:grid-cols-2 2xl:grid-cols-2 grid grid-cols-1 gap-3">
        {data?.map((todoDetails, index) => {
          return <TodoHomeTodoCard key={index} todoDetails={todoDetails} />;
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

export default AllTask;
