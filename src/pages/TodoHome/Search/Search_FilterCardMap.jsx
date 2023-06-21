import { BiDownArrow } from "react-icons/bi";

const Search_FilterCardMap = ({ AllParticipants }) => {
  return (
    <div className="bg-Amber border-Shades p-4 border rounded-lg">
      <div className=" w-28 flex justify-between">
        <p className="text-xl font-semibold">Participants</p>
        <BiDownArrow />
      </div>

      {AllParticipants?.map((name, index) => {
        return (
          <div className="mt-3" key={index}>
            <div>
              <input
                type="checkbox"
                name="description"
                id="description"
                className="checkers "
              />
              <label className="mx-2" htmlFor="description">
                {name}
              </label>
            </div>
          </div>
        );
      })}

      {/*  input  */}
    </div>
  );
};
export default Search_FilterCardMap;
