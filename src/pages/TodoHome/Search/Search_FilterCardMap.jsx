import { BiDownArrow } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setParticipants } from "../../../Redux/feature/search/search"

const Search_FilterCardMap = ({ AllParticipants }) => {
  let dispatch = useDispatch()
  return (
    <div className="rounded-lg border border-Shades bg-Amber p-4">
      <div className=" flex w-28 justify-between">
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
        )
      })}
    </div>
  )
}
export default Search_FilterCardMap
