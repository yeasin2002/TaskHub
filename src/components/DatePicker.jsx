import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export const ReactDate = ({ name, label, defaultValue, setDate }) => {
  const handleChange = (date) => {
    setDate(date)
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-blackens ">
        <p>{label}</p>
      </label>
      <br />
      <DatePicker
        className="w-full rounded-lg border-none ring ring-Shades/10 placeholder:text-Shades"
        name={name}
        id={name}
        placeholder="Select Date"
        onChange={handleChange}
        selected={defaultValue}
      />
    </div>
  )
}
