import { Link } from "react-router-dom";
//  icons
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const EditsTaskStage = () => {
  return (
    <>
      <div className=" mx-9 flex justify-between mt-5">
        <div className="flex items-center">
          <div className="md:hidden flex">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </div>
          <p>New Task/ </p>
        </div>
        <div>
          <Link to={"/todo_home"}>
            <RxCross1 />
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditsTaskStage;
