import {
  addDays,
  addYears,
  format,
  getMonth,
  getYear,
  parseISO,
  subDays,
} from 'date-fns'

const COVID_YEAR = 2020
const COVID_MONTH_END = 9
const REGULAR_MONTH_END = 5

/**
 * Method to get the year of the league based on the date
 * It will return the current year if the date is after the
 * regular season end date
 * @param date - Date object to get the year from
 * @returns string - Ex.: '2020'
 */
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

/**
 * Method that returns the time period of the game
 * @param startTime - The start time of the game
 * @param endTime - The end time of the game
 * @param clock - The current clock of the game
 * @param period - The current period of the game - 0 (not started) | 1-4 (regular) | +4 (OT)
 * @returns string
 */
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

/**
 * Method to return the day, nextDay and prevDay
 * @param date - string of the day - Ex.: '20220214'
 * @returns object of date objects
 */
export const getDays = (date?: string) => {
  const day = date ? parseISO(date) : new Date()

  return {
    day,
    prevDay: subDays(day, 1),
    nextDay: addDays(day, 1),
  }
}
