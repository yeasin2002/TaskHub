import TodoHomeTodoCard from "./TodoHomeTodoCard"

const AllTask = ({ data, todoType }) => {
  let setBgColor = null
  switch (todoType) {
    case "all":
      setBgColor = ""
      break
    case "complete":
      setBgColor = "bg-green-600"
      break
    case "incomplete":
      setBgColor = "bg-red-600"
      break

    default:
      break
  }

  return (
    <div className=" h-full w-full px-10 py-4">
      <div className=" grid grid-cols-1 gap-3 xl:grid-cols-2 2xl:grid-cols-2">
        {data?.map((todoDetails, index) => {
          return <TodoHomeTodoCard id={index} key={index} todoDetails={todoDetails} todoColor={setBgColor} />
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
