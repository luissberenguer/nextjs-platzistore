import { Chart as ChartJS, CategoryScale, LinearScale, Filler, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      fill: true,
    },
  ],
};

export function LineComponenet() {
  return <Line options={options} data={data} />;
}

// {
//   label: 'Dataset 2',
//   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//   borderColor: 'rgb(53, 162, 235)',
//   fill: true,
//   backgroundColor: 'rgba(53, 162, 235, 0.5)',
// },
