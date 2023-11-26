import { BsCalendarDate } from "react-icons/bs"

const DatesPicker = () => {
  return (
    <div className="my-4">
      <label className="inline-flex items-center gap-x-1 rounded-2xl bg-Amber/70 pr-2" htmlFor="startDate">
        <span className="rounded-2xl bg-dim p-2">
          <BsCalendarDate />
        </span>
        <p className="text-blackens">Start Date</p>
      </label>
    </div>
  )
}

export default DatesPicker
