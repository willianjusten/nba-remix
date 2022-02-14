import { format } from 'date-fns'
import { Link } from 'remix'
import ArrowIcon from '../ArrowIcon'

export type DateSelectorProps = {
  day: Date
  nextDay: Date
  prevDay: Date
}

function DateSelector({ day, nextDay, prevDay }: DateSelectorProps) {
  return (
    <div className="flex flex-col py-12">
      <h1 className="mb-3 text-4xl font-bold">Games</h1>
      <div className="flex items-center gap-5">
        <Link to={`/${format(prevDay, 'yyyyMMdd')}`}>
          <ArrowIcon title="previous day" />
        </Link>
        <p className="text-lg font-semibold">{format(day, 'dd MMMM yyyy')}</p>
        <Link to={`/${format(nextDay, 'yyyyMMdd')}`}>
          <ArrowIcon className="rotate-180" title="next day" />
        </Link>
      </div>
    </div>
  )
}

export default DateSelector
