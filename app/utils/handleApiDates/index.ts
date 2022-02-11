import { format } from 'date-fns'
import addYears from 'date-fns/addYears'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'

export const getLeagueYear = (date: Date) => {
  if (getYear(date) === 2020) {
    // 2020 season is delayed and season should finish in 2020-10
    return getMonth(date) > 9 ? getYear(date) : getYear(addYears(date, -1))
  } else {
    // in NBA the season starts from July and ends in May
    // so if the date is in the first half of the year, we should return the previous year
    return getMonth(date) > 5 ? getYear(date) : getYear(addYears(date, -1))
  }
}

export const getTimePeriod = (
  startTime: string,
  endTime?: string,
  clock?: string,
  period = 0,
) => {
  const overtime = period > 4 ? `OT${period - 4}` : ''

  if (endTime) return `Final${overtime && `/${overtime}`}`

  if (clock) return `${overtime || `Q${period}`} - ${clock}`

  return format(new Date(startTime), 'h:mm a')
}
