import { format } from 'date-fns'
import { Link, useNavigate } from 'remix'

import { DATE_LINK_FORMAT, DATE_DISPLAY_FORMAT } from '~/constants'

import { ArrowIcon } from '~/components/ArrowIcon'
import { DayPickerInput } from '~/components/DayPickerInput'

import { formatDate, parseDate } from '~/utils/handleDates'

export type DateSelectorProps = {
  day: Date
  nextDay: Date
  prevDay: Date
}

export function DateSelector({ day, nextDay, prevDay }: DateSelectorProps) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col py-12">
      <h1 className="mb-3 text-4xl font-bold">Games</h1>
      <div className="flex items-center justify-between gap-5 pt-4 sm:justify-start">
        <Link
          prefetch="intent"
          className="p-2"
          to={`/${format(prevDay, DATE_LINK_FORMAT)}`}
        >
          <ArrowIcon title="previous day" />
        </Link>

        <DayPickerInput
          placeholder={format(day, DATE_DISPLAY_FORMAT)}
          value={day}
          format={DATE_DISPLAY_FORMAT}
          parseDate={parseDate}
          formatDate={formatDate}
          onDayChange={(selectedDay) =>
            navigate(`/${format(selectedDay, DATE_LINK_FORMAT)}`)
          }
          dayPickerProps={{
            todayButton: 'Go to today',
          }}
        />

        <Link
          prefetch="intent"
          className="p-2"
          to={`/${format(nextDay, DATE_LINK_FORMAT)}`}
        >
          <ArrowIcon className="rotate-180" title="next day" />
        </Link>
      </div>
    </div>
  )
}
