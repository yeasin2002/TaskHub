import { setNameAndDescription } from "../../../Redux/feature/search/search"
import { BiDownArrow } from "react-icons/bi"
import { useDispatch } from "react-redux"

const Search_FilterCard = () => {
  let dispatch = useDispatch()
  return (
    <div className="rounded-lg border border-Shades bg-Amber p-4">
      <div className=" flex w-28 justify-between">
        <p className="text-xl font-semibold">Filter</p>
        <BiDownArrow />
      </div>

      {/*  input  */}
      <div className="mt-3">
        <div>
          <input
            onClick={() => dispatch(setNameAndDescription("name"))}
            type="checkbox"
            name="shortByName"
            id="shortByName"
            className="checkers "
          />
          <label className="mx-2" htmlFor="description">
            name
          </label>
        </div>
        {/*   */}

        <div>
          <input
            type="checkbox"
            name="description"
            id="description"
            className="checkers"
            onClick={() => dispatch(setNameAndDescription("description"))}
          />
          <label className="mx-2" htmlFor="name">
            description
          </label>
        </div>
      </div>
    </div>
  )
}

export default Search_FilterCard
