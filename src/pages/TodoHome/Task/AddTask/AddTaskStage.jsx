import { Link } from "react-router-dom"
//  icons
import { RxCross1 } from "react-icons/rx"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

const AddTaskStage = ({ isAdvance }) => {
  return (
    <>
      <div className=" mx-9 mt-5 flex justify-between">
        <div className="flex items-center">
          <div className="flex md:hidden">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </div>
          <p>New Task/{!isAdvance ? "basic" : "advance"} </p>
        </div>
        <div>
          <Link to={"/"}>
            <RxCross1 />
          </Link>
        </div>
      </div>
    </>
  )
}

export default AddTaskStage
