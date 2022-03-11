import type { DayPickerInputProps } from 'react-day-picker'
import BaseDayPickerInput from 'react-day-picker/DayPickerInput'
import styles from 'react-day-picker/lib/style.css'
import customStyles from './styles.css'

interface IDayPickerInputProps extends DayPickerInputProps {
  onDayChange: (selectedDay: Date) => void
}

export const links = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'stylesheet',
    href: customStyles,
  },
]

const DayPickerInput = (props: IDayPickerInputProps) => (
  <BaseDayPickerInput
    component={(componentProps: unknown) => (
      <input
        className="cursor-pointer bg-inherit text-center text-lg font-semibold outline-none"
        readOnly
        {...componentProps}
      />
    )}
    overlayComponent={(overlayProps: unknown) => (
      <div
        className="absolute z-10 flex rounded-lg border border-main bg-glass text-white backdrop-blur-lg duration-300 hover:cursor-pointer hover:bg-slate-700 firefox:bg-slate-750"
        {...overlayProps}
      />
    )}
    dayPickerProps={{
      todayButton: 'Go to today',
      onTodayButtonClick: (day: any) => props.onDayChange(day),
    }}
    {...props}
  />
)

export default DayPickerInput
