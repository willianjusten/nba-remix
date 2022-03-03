import DayPickerInput from 'react-day-picker/DayPickerInput'
import styles from 'react-day-picker/lib/style.css'
import customStyles from './styles.css'

export const links = () => [
  { rel: 'stylesheet', href: customStyles },
  { rel: 'stylesheet', href: styles },
]

export * from './api'
export default DayPickerInput
