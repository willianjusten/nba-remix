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
