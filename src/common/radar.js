import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function RadarChart({ radarData }) {
  return (
    <Radar
      data={radarData}
      options={{
        responsive: true,
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      }}
    />
  );
}
