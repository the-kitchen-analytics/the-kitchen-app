import _ from 'lodash'
import { formatPrice, calculateTotalWorkerIncome, calculateTotalPrice } from '../../../shared/utils'
import { buildChartData } from './buildChartData'

export const buildStatisticsData = (rawData) => {

  const allProcedures = rawData
    .flat()
    .map(({ procedures }) => procedures)
    .flat()

  const totalWorkerIncome = calculateTotalWorkerIncome(allProcedures)
  const totalWorkerRevenue = calculateTotalPrice(allProcedures)
  const workedDays = _.uniq(rawData.flat().map(it => it.dateFormatted))
  const daysCount = workedDays.length

  const generalDataStatistics = Object.freeze([
    {
      color: 'green',
      name: 'totalIncome',
      renderLabel: () => 'Заработок',
      renderValue: () => formatPrice(totalWorkerIncome)
    },
    {
      color: 'teal',
      name: 'totalRevenue',
      renderLabel: () => 'Выручка',
      renderValue: () => formatPrice(totalWorkerRevenue)
    }
  ])

  const chartData = buildChartData(allProcedures)

  if (daysCount > 1) {
    const incomePerDay = _.divide(totalWorkerIncome, daysCount)
    const averageStatistics = Object.freeze(
      [
        {
          color: 'yellow',
          name: 'daysCount',
          renderLabel: () => 'Дней отработано',
          renderValue: () => daysCount
        },
        {
          color: 'blue',
          name: 'incomePerDay',
          renderLabel: () => 'В среднем в день',
          renderValue: () => formatPrice(incomePerDay)
        }
      ]
    )

    return {
      statisticsData: [generalDataStatistics, averageStatistics],
      chartData
    }
  }

  if (daysCount === 1) {
    return {
      statisticsData: [generalDataStatistics],
      chartData
    }
  }

  return {}
}
