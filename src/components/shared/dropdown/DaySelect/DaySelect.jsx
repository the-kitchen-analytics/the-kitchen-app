import { DefaultSelect } from '../DefaultSelect'

export const DaySelect = ({ value, handleChange, options = [], disabled }) => (
  <DefaultSelect
    disabled={disabled || options.length <= 1}
    placeholder='Выберите день'
    search selection
    options={options}
    onChange={handleChange}
    value={value}
    fluid
  />
)