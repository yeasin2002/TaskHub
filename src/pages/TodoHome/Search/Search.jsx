import { useGetAllTaskQuery } from "../../../redux/API/taskApiSlice/taskApiSlice"
import SearchTodoSearchArea from "./SearchTodoSearchArea"
// import ShortTodo from "./ShortTodo";
// import CountParticipants from "../../../utils/CountParticipants";

const Search = () => {
  const { data, isLoading, isSuccess } = useGetAllTaskQuery()

  let tasks = data?.data?.tasks || []
  // const AllParticipants = CountParticipants(tasks);

  return (
    <>
      <div
        className=" flex h-screen w-full md:p-4"
        style={{
          backgroundImage: ` linear-gradient(40deg, rgba(198,211,236,1) 0%, rgba(242,242,242,1) 27%, rgba(217,226,242,1) 37%, rgba(244,246,251,1) 56%, rgba(245,247,251,1) 62%, rgba(198,211,236,1) 76%)`,
        }}>
        {/* <ShortTodo AllParticipants={AllParticipants} /> */}
        <SearchTodoSearchArea tasks={tasks} isSuccess={isSuccess} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Search
