import { FC } from 'react'
import { IChart, IChartData } from '../types/types'
import { Cell, Pie, PieChart, Legend, Tooltip } from 'recharts'

const COLORS = ['#66BB6A', '#EF5350'];

export const Chart: FC<IChart> = ({ totalExpense, totalIncome }) => {
  const data = new Array<IChartData>(
    { value: totalExpense, name: 'expense'},
    { value: totalIncome, name: 'income'},
  )

  return (
    <PieChart
      width={250}
      height={250}
    >
      <Pie
        data={data}
        cx={'50%'}
        cy={'50%'}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Legend />
      
      <Tooltip />
    </PieChart>
  )
}
