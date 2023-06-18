import { BsCalendarDate } from "react-icons/bs";

const AddTask_Basic = ({ setIsAdvance }) => {
  return (
    <div className=" px-7 flex flex-col justify-between flex-1 h-screen py-4">
      <div>
        <input
          type="text"
          //    daysi ui is conflicting with this in
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

      <div className="md:hidden flex justify-end mb-20">
        <button
          onClick={() => setIsAdvance(true)}
          className="bg-Shades px-2 py-1 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AddTask_Basic;
