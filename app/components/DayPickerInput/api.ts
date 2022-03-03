import { format, parse } from 'date-fns'
import { DateUtils } from 'react-day-picker'

export function parseDate(str: string, dateFormat: string) {
  const parsed = parse(str, dateFormat, new Date())
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

export function formatDate(date: Date, dateFormat: string) {
  return format(date, dateFormat)
}
