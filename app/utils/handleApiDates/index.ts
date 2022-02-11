import { format } from 'date-fns'
import addYears from 'date-fns/addYears'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getYear'

const COVID_YEAR = 2020
const COVID_MONTH_END = 9
const REGULAR_MONTH_END = 5

export const getLeagueYear = (date: Date) => {
  if (getYear(date) === COVID_YEAR) {
    return getMonth(date) > COVID_MONTH_END
      ? getYear(date)
      : getYear(addYears(date, -1))
  } else {
    return getMonth(date) > REGULAR_MONTH_END
      ? getYear(date)
      : getYear(addYears(date, -1))
  }
}

export type getTimePeriodArgs = {
  startTime: string
  endTime?: string
  clock?: string
  period?: number
}

const REGULAR_PERIOD_COUNT = 4

export const getTimePeriod = ({
  startTime,
  endTime,
  clock,
  period = 0,
}: getTimePeriodArgs) => {
  const overtime =
    period > REGULAR_PERIOD_COUNT ? `OT${period - REGULAR_PERIOD_COUNT}` : ''

  if (endTime) return `Final${overtime && `/${overtime}`}`

  if (clock) return `${overtime || `Q${period}`} - ${clock}`

  return format(new Date(startTime), 'h:mm a')
}
