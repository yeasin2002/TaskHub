import { cn } from "../utils/cn"

export const Input = ({ register, isError, errorMessage, type = "text", placeholder, className, title }) => {
  return (
    <div>
      <div className="mt-2">
        <label htmlFor="userMail" className=" mb-4 block text-sm font-medium text-gray-900">
          {title}
        </label>
        <input type={type} placeholder={placeholder} className={cn("form-input", className)} {...register} />
      </div>
      <div className="my-1">{isError && <p className="text-red-500">{errorMessage}</p>}</div>
    </div>
  )
}
