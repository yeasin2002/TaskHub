import { BsCalendarDate } from "react-icons/bs";

const DatesPicker = () => {
  return (
    <div className="my-4">
      <label
        className="gap-x-1 bg-Amber/70 rounded-2xl inline-flex items-center pr-2"
        htmlFor="startDate"
      >
        <span className="bg-dim rounded-2xl p-2">
          <BsCalendarDate />
        </span>
        <p className="text-blackens">Start Date</p>
      </label>
    </div>
  );
};

export default DatesPicker;
