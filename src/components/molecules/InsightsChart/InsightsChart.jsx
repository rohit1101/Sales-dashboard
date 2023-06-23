import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Visitor Insights",
    align: "left",
  },
  yAxis: {
    title: {
      text: "Visited Customers",
    },
  },
  series: [
    {
      name: "Loyal Customers",
      data: [
        863.24, 646.36, 209.92, 574.63, 758.79, 454.12, 315.68, 727.41, 194.55,
      ],
    },
    {
      name: "New Customers",
      data: [
        883.57, 549.82, 238.14, 746.96, 124.87, 377.58, 900.23, 628.35, 416.21,
      ],
    },
    {
      name: "Unique Customers",
      data: [
        642.14, 253.92, 808.77, 412.51, 738.09, 512.36, 382.68, 977.24, 173.85,
      ],
    },
  ],
  credits: {
    enabled: false,
  },
};

function InsightsChart() {
  return (
    <div className="bg-white p-4 rounded-xl w-2/5">
      <HighchartsReact
        constructType="chart"
        highcharts={Highcharts}
        options={options}
        containerProps={{ className: "w-full h-96" }}
      />
    </div>
  );
}

export default InsightsChart;
