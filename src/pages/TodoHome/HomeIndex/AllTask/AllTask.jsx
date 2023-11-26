// import DotsBounce from "../../../../components/Icons/DotsBounce";
import TodoHomeTodoCard from "../TodoHomeTodoCard"

const AllTask = ({ data }) => {
  return (
    <div className=" h-full w-full px-10 py-4">
      {/* <div className=" md:flex-row flex flex-col justify-between w-full my-4">
        {data?.length !== 0 ? (
          <p className="my-4">{data?.length || ""} tasks found</p>
        ) : (
          <DotsBounce />
        )}
      </div> */}

      <div className=" grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-2">
        {data?.map((todoDetails, index) => {
          return <TodoHomeTodoCard id={index} key={index} todoDetails={todoDetails} />
        })}
      </div>

      {/*  if there is not data found */}
      {data && data.length === 0 && (
        <div>
          <p className="text-center text-2xl">No Task Found</p>
        </div>
      )}
    </div>
  )
}

export default AllTask
