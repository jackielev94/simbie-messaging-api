import moment from "moment";

export function addTwoHours(dateString: string) {
  const endDate = moment(dateString)
  const hours = (endDate.hours()) + 2
  return dateString.slice(0, 11) + hours.toString() + dateString.slice(13)
}
