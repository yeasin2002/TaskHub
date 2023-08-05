import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { setSearchValue } from "../../../Redux/feature/search/search";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchInputHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(e?.target?.searchValue?.value));
  };
  return (
    <>
      <form
        onSubmit={searchInputHandler}
        className="bg-dim md:bg-white px-4 py-4"
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch />
          </div>
          <input
            type="search"
            id="searchValue"
            className="bg-Amber border border-Shades text-gray-900 text-sm rounded-lg focus:ring-Shades focus:border-Shades block w-full pl-10 p-2.5  "
            placeholder="Search"
            required
          />
        </div>

        <div className="gap-x-6 md:hidden flex justify-center mt-6">
          <button className="bg-Light rounded-3xl ring ring-Shades p-2 px-4">
            Filter
          </button>

          <button className="bg-Light rounded-3xl ring ring-Shades p-2 px-4">
            cateroy
          </button>

          <button className="bg-Light rounded-3xl ring ring-Shades p-2 px-4">
            Participant
          </button>
        </div>
      </form>
    </>
  );
};
export default SearchBar;
