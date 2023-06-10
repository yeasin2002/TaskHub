import FilterCard from "./FilterCard";

const SideBarForSorting = () => {
  return (
    <>
      <div
        id="sideBarForSorting "
        className=" pt-7 md:flex gap-y-4 flex-col hidden h-full px-4"
      >
        <FilterCard />
        <FilterCard />
        <FilterCard />
      </div>
    </>
  );
};
export default SideBarForSorting;
