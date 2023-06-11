//  icons
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

import { Link } from "react-router-dom";

const TaskOrModifieTaskDetils_Basic = () => {
  return (
    <div className=" px-7 flex-1 py-4">
      <div className=" flex justify-between">
        <div className="flex items-center">
          <div className="md:hidden flex">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </div>
          <p>New Task/Basic</p>
        </div>
        <div>
          <Link to={"/todo_home"}>
            <RxCross1 />
          </Link>
        </div>
      </div>

      <div>
        <input
          type="text"
          //    daysi ui is conflicting with this inp
          style={{
            outline: "none",
          }}
          placeholder="Add a title to your task "
          className=" inputHolder"
        />

        <div className="my-4">
          <label
            className="gap-x-1 bg-Amber/70 rounded-2xl inline-flex items-center pr-2"
            htmlFor="startDate"
          >
            <span className="bg-dim rounded-2xl p-2">
              <BsCalendarDate />
            </span>
            <p className="text-blackens">Due Date</p>
          </label>
        </div>

        <div className="my-4">
          <label htmlFor="Description" className="text-blackens ">
            <p>Description</p>
          </label>
          <br />
          <textarea
            className="placeholder:text-Shades ring ring-Shades/10 w-full h-48 border-none rounded-lg"
            name="Description"
            id="Description"
            placeholder="Write a meaningfull  Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default TaskOrModifieTaskDetils_Basic;
