const EncodeDate = (inputTimeString) => {
  const inputDate = new Date(inputTimeString)
  const convertedDateString = `${inputDate.getFullYear()}-${String(inputDate.getMonth() + 1).padStart(2, "0")}-${String(
    inputDate.getDate()
  ).padStart(2, "0")}`
  return convertedDateString
}

export default EncodeDate
