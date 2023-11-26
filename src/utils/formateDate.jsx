const formateDate = (theDate) => {
  const dateObj = new Date(theDate)
  const startDate = dateObj.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  })

  return startDate
}
export default formateDate
