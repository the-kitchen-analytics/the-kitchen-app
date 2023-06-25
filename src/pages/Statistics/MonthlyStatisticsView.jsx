import MonthlyDataLayout from '../../components/layouts/MonthlyDataLayout'
import Statistics from '../../components/Statistics'
import { getStatisticsDataByMonthAndYear } from '../../services/statisticsDataFilterService'
import { useMonthlyData } from '../../hooks'

const MonthlyStatisticsView = () => {

  const [
    filteredData, yearOptions,
    initialSelectedDate,
    selectedDate, setSelectedDate
  ] = useMonthlyData(getStatisticsDataByMonthAndYear)

  return (
    <MonthlyDataLayout
      icon="chart bar"
      header="Статистика"
      yearOptions={yearOptions}
      defaultSelectedDate={initialSelectedDate}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    >
      {
        <Statistics
          statisticsData={filteredData}
        />
      }
    </MonthlyDataLayout>
  )
}

export default MonthlyStatisticsView