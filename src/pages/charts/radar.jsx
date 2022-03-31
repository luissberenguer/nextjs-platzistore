import { RadarChart } from '@common/radar';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
    },
  ],
};

const data2 = {
  labels: ['React', 'Javascript', 'Solidity', 'CSS', 'NestJS'],
  datasets: [
    {
      label: 'Luis',
      data: [4, 5, 3, 3, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Marcos',
      data: [2, 3, 1, 1, 4],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
};

export default function Radar() {
  return <RadarChart radarData={data2} />;
}
