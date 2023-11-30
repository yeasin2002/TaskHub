import { Button, Popover, PopoverContent, PopoverHandler, Radio } from "@material-tailwind/react"
import { useState } from "react"
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai"

export const FilterItems = () => {
  const [isExactMatch, setIsExactMatch] = useState(false)
  return (
    <div className="flex gap-x-2">
      <button
        className="mr-5 flex cursor-pointer items-center gap-x-1 rounded-lg border border-blue-600 px-2 py-1"
        onClick={() => setIsExactMatch(!isExactMatch)}>
        {isExactMatch ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        <p>Exact Match</p>
      </button>
      <Popover placement="bottom">
        <PopoverHandler>
          <Button>Sort By</Button>
        </PopoverHandler>
        <PopoverContent className="flex flex-col ">
          <Radio name="type" label="Ascending" />
          <Radio name="type" label="descending" />
        </PopoverContent>
      </Popover>
      {/*  */}
      <Popover placement="bottom">
        <PopoverHandler>
          <Button>Filter By</Button>
        </PopoverHandler>
        <PopoverContent className="flex flex-col ">
          <Radio name="type" label="Name" />
          <Radio name="type" label="Description" />
        </PopoverContent>
      </Popover>
    </div>
  )
}
