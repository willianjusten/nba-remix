import {
  addDays,
  addYears,
  format,
  getHours,
  getMonth,
  getYear,
  parse,
  parseISO,
  startOfDay,
  subDays,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { DateUtils } from 'react-day-picker'

import {
  COVID_MONTH_END,
  COVID_YEAR,
  EST_IANA_ZONE_ID,
  GAME_STATUS,
  REGULAR_MONTH_END,
  REGULAR_PERIOD_COUNT,
} from '~/constants'

/**
 * Method to get the year of the league based on the date
 * It will return the current year if the date is after the
 * regular season end date
 * @param date - Date object to get the year from
 * @returns string - Ex.: '2020'
 */
export function getLeagueYear(date: Date) {
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
  status: number
  clock?: string
  period?: number
  isHalftime?: boolean
  isEndOfPeriod?: boolean
}

/**
 * Method that returns the time period of the game
 * @param startTime - The start time of the game
 * @param clock - The current clock of the game
 * @param status - The current status of the game - 1 (not started) | 2 (in progress) | 3 (ended)
 * @param isHalftime - Whether the game is in the halftime or not
 * @param isEndOfPeriod - Whether the game is in the end of the period or not
 * @param period - The current period of the game - 0 (not started) | 1-4 (regular) | +4 (OT)
 * @returns string
 */
export function getTimePeriod({
  startTime,
  clock,
  status,
  isHalftime,
  isEndOfPeriod,
  period = 0,
}: getTimePeriodArgs) {
  const overtime =
    period > REGULAR_PERIOD_COUNT ? `OT${period - REGULAR_PERIOD_COUNT}` : ''

  if (status === GAME_STATUS.ENDED) return `Final${overtime && `/${overtime}`}`

  if (isHalftime) return `Halftime`

  if (isEndOfPeriod) return `End of ${overtime || `Q${period}`}`

  if (clock) return `${overtime || `Q${period}`} - ${clock}`

  return format(new Date(startTime), 'h:mm a')
}

/**
 * Method to return the day, nextDay and prevDay
 * @param date - string of the day - Ex.: '20220214'
 * @returns object of date objects
 */
export function getDays(date?: string) {
  let timeZonedDay: Date
  const now = new Date().toISOString()
  const etNow = utcToZonedTime(now, EST_IANA_ZONE_ID)
  const etNowHours = getHours(etNow)

  // Some NBA games starts in a day and finishes in the next day
  // in order to show the games that are happening at that time
  // even being the next day, we get the previous day
  if (etNowHours < 6) {
    timeZonedDay = startOfDay(subDays(etNow, 1))
  } else {
    timeZonedDay = startOfDay(etNow)
  }

  const day = date ? parseISO(date) : timeZonedDay

  return {
    day,
    prevDay: subDays(day, 1),
    nextDay: addDays(day, 1),
  }
}

/**
 *
 * @param str - string of the date - Ex.: '10 Mar 2022'
 * @param dateFormat - string of the date format - Ex.: 'dd MMM yyyy'
 * @returns date object
 */
export function parseDate(str: string, dateFormat: string) {
  const parsed = parse(str, dateFormat, new Date())
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

/**
 *
 * @param date - date object of the day
 * @param dateFormat - string of the date format - Ex.: 'dd MMMM yyyy'
 * @returns string
 */
export function formatDate(date: Date, dateFormat: string) {
  return format(date, dateFormat)
}
