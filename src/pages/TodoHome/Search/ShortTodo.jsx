import Search_FilterCard from "./Search_FilterCard";
import Search_FilterCardMap from "./Search_FilterCardMap";

const ShortTodo = ({ AllParticipants }) => {
  return (
    <>
      <div className=" pt-7 md:flex gap-y-4 flex-col hidden h-full px-4">
        <Search_FilterCard />

        <Search_FilterCardMap AllParticipants={AllParticipants} />
      </div>
    </>
  );
};

export default ShortTodo;
