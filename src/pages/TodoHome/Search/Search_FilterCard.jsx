import { BiDownArrow } from "react-icons/bi";

const Search_FilterCard = () => {
  return (
    <div className="bg-Amber border-Shades p-4 border rounded-lg">
      <div className=" w-28 flex justify-between">
        <p className="text-xl font-semibold">Filter</p>
        <BiDownArrow />
      </div>

      {/*  input  */}
      <div className="mt-3">
        <div>
          <input
            type="checkbox"
            name="description"
            id="description"
            className="checkers "
          />
          <label className="mx-2" htmlFor="description">
            name
          </label>
        </div>
        {/*   */}

        <div>
          <input type="checkbox" name="name" id="name" className="checkers " />
          <label className="mx-2" htmlFor="name">
            description
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search_FilterCard;
