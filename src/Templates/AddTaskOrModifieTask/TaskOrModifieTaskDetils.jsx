//  icons
import { RxCross1 } from "react-icons/rx";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

import { Link } from "react-router-dom";

const TaskOrModifieTaskDetils = () => {
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

      <div className="my-6">
        <input
          type="text"
           //    daysi ui is conflicting with this inp
          style={{
            outline: "none",
          }}
          placeholder="Add a title to your task "
          className=" placeholder:text-Shades placeholder:text-2xl w-full py-4 my-2 border-none rounded-lg"
        />

        <div>
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

        <div>
          <label htmlFor="Description" className="text-blackens">
            Description
          </label>
          <br />
          <textarea
            className="placeholder:text-Shades w-full h-48 border-none"
            name="Description"
            id="Description"
            placeholder="Write a meaningfull  Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default TaskOrModifieTaskDetils;
