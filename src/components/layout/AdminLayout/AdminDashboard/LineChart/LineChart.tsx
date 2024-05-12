import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  data: { category: string; amount: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line", number[], string> | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((item) => item.category),
            datasets: [
              {
                label: "Data",
                data: data.map((item) => item.amount),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartContainer} />;
};

export default LineChart;
