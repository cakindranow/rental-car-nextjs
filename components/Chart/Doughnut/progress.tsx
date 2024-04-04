import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Yellow', 'Green', 'Purple', ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#FB958D',
        '#87ECAF',
        '#96C9D1',
        '#8380FE',
      ],
      borderColor: [
        '#FB958D',
        '#87ECAF',
        '#96C9D1',
        '#8380FE',
      ],
      borderWidth: 1,
    },
  ],
};

export function ProgressDoughnutChart() {
  return <Doughnut data={data} />;
}
