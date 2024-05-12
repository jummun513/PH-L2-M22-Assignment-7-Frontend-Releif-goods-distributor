import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface PieChartProps {
  data: { amount: number; category: string }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: data.map((item) => item.category),
            datasets: [
              {
                data: data.map((item) => item.amount),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.7)",
                  "rgba(54, 162, 235, 0.7)",
                  "rgba(255, 206, 86, 0.7)",
                  "rgba(75, 192, 192, 0.7)",
                  "rgba(153, 102, 255, 0.7)",
                  "rgba(255, 159, 64, 0.7)",
                ],
              },
            ],
          },
          options: {},
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

export default PieChart;
