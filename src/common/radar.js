import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options = {
  responsive: true,
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      angleLines: {
        display: false,
      },
    },
  },
};

export function RadarChart({ radarData }) {
  return <Radar data={radarData} options={options} />;
}
