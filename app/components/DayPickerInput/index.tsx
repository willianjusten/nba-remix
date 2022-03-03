import DayPickerInput from 'react-day-picker/DayPickerInput'
import styles from 'react-day-picker/lib/style.css'
import customStyles from './styles.css'

export const links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: customStyles },
]

export * from './api'
export default DayPickerInput
