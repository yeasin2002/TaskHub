import Search_FilterCard from "./Search_FilterCard";

const ShortTodo = () => {
  return (
    <>
      <div className=" pt-7 md:flex gap-y-4 flex-col hidden h-full px-4">
        <Search_FilterCard />
        <Search_FilterCard />
        <Search_FilterCard />
      </div>
    </>
  );
};

export default ShortTodo;
