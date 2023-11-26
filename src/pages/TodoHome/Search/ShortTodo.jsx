// import Search_FilterCard from "./Search_FilterCard";
import Search_FilterCardMap from "./Search_FilterCardMap"

const ShortTodo = ({ AllParticipants }) => {
  return (
    <>
      <div className=" hidden h-full flex-col gap-y-4 px-4 pt-7 transition-all md:flex">
        {AllParticipants.length !== 0 && (
          <>
            {/* <Search_FilterCard /> */}
            <Search_FilterCardMap AllParticipants={AllParticipants} />
          </>
        )}
      </div>
    </>
  )
}

export default ShortTodo
