import { format } from 'date-fns'
import { Link, useNavigate } from 'remix'
import ArrowIcon from '../ArrowIcon'
import DayPickerInput, { parseDate, formatDate } from '../DayPickerInput'
import { DATE_LINK_FORMAT, DATE_DISPLAY_FORMAT } from '~/constants'

export type DateSelectorProps = {
  day: Date
  nextDay: Date
  prevDay: Date
}

function DateSelector({ day, nextDay, prevDay }: DateSelectorProps) {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col py-12">
      <h1 className="mb-3 text-4xl font-bold">Games</h1>
      <div className="-ml-2 flex items-center gap-5">
        <Link className="p-2" to={`/${format(prevDay, DATE_LINK_FORMAT)}`}>
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
        />

        <Link className="p-2" to={`/${format(nextDay, DATE_LINK_FORMAT)}`}>
          <ArrowIcon className="rotate-180" title="next day" />
        </Link>
      </div>
    </div>
  )
}

export default DateSelector
