import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }
  
  type Skill = {label: String, years: number}
  const skills = [
    { label: 'Kotlin', years: 3 },
    { label: 'Scala', years: 3 },
    { label: 'Ruby', years: 4 },
    { label: 'TypeScript', years: 4 }
  ] as Skill[]
  
  export const data = {
    labels: skills.map((skill) => skill.label),
    datasets: [
      {
        label: 'Years',
        data: skills.map((skill) => skill.years),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

function SkillChart() {
    return <Bar options={options} data={data} />
}
export default SkillChart;