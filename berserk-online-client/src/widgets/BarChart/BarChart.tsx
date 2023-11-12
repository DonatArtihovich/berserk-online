import { Bar } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title, ChartData, CategoryScale, LinearScale, BarElement } from 'chart.js'
// import { TooltipItem } from 'chart.js/auto';
Chart.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

interface PieChartProps {
    data: ChartData<"bar", (number | [number, number] | null)[], number>
}

const BarChart = ({ data }: PieChartProps) => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Стоимости',
                color: '#ffffff',
                font: {
                    size: 25,
                },
            },
            legend: {
                display: true,
                position: 'top' as const,
                backgroundColor: '#ffffff',
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
            },
        },
        y: {
            group: 'group1',
        }

    }
    return <div style={{ height: 'auto', width: '30vw' }}>
        <Bar
            data={data}
            options={options}
        />
    </div>

}
export default BarChart;