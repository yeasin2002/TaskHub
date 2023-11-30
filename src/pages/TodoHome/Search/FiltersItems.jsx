import { Button, Popover, PopoverContent, PopoverHandler, Radio } from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { setFilterByName, setSortByAccenting } from "../../../Redux/feature/search/search"

export const FilterItems = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex gap-x-2">
      <Popover placement="bottom">
        <PopoverHandler>
          <Button>Sort By</Button>
        </PopoverHandler>
        <PopoverContent className="flex flex-col ">
          <Radio name="type" label="Ascending" defaultChecked onClick={() => dispatch(setSortByAccenting(true))} />
          <Radio name="type" label="descending" onClick={() => dispatch(setSortByAccenting(false))} />
        </PopoverContent>
      </Popover>
      {/*  */}
      <Popover placement="bottom">
        <PopoverHandler>
          <Button>Filter By</Button>
        </PopoverHandler>
        <PopoverContent className="flex flex-col ">
          <Radio name="type" label="Name" defaultChecked onClick={() => dispatch(setFilterByName(true))} />
          <Radio name="type" label="Description" onClick={() => dispatch(setFilterByName(false))} />
        </PopoverContent>
      </Popover>
    </div>
  )
}
