import DotsBounce from "../../../../components/Icons/DotsBounce"
import TodoHomeTodoCard from "../TodoHomeTodoCard"

const CompleteTask = ({ data }) => {
  return (
    <div className=" h-full w-full px-10 py-4">
      <div className=" my-4 flex w-full flex-col justify-between md:flex-row">
        {data?.length ? <p className="my-4">{data?.length || ""} tasks found</p> : <DotsBounce />}
      </div>

      <div className=" grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-3">
        {data?.map((todoDetails, index) => {
          return <TodoHomeTodoCard id={index} key={index} todoDetails={todoDetails} todoColor="bg-green-600" />
        })}
      </div>
    </div>
  )
}

export default CompleteTask
