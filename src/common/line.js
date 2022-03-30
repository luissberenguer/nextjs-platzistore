import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';

Chart.register();

export function LineChart({ lineData }) {
  return <Line data={lineData} />;
}
