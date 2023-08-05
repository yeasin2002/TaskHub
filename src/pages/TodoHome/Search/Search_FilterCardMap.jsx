import { BiDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setParticipants } from "../../../Redux/feature/search/search";

const Search_FilterCardMap = ({ AllParticipants }) => {
  let dispatch = useDispatch();
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
                onClick={() => dispatch(setParticipants(name))}
                type="checkbox"
                name={name}
                id={name}
                className="checkers "
              />
              <label className="mx-2" htmlFor={name}>
                {name}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Search_FilterCardMap;
