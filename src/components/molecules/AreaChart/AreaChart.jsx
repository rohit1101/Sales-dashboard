import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = (props) => {
  return {
    chart: {
      type: "area",
    },
    title: {
      text: "Customer Satisfaction",
      align: "left",
    },
    plotOptions: {
      series: {
        pointStart: 2012,
      },
      area: {
        stacking: "normal",
        lineColor: "#666666",
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: "#666666",
        },
      },
    },
    series: [
      {
        name: "This Month",
        data: [495.34, 631.56, 210.78, 874.29, 416.45],
      },
      {
        name: "Last Month",
        data: [287.42, 672.19, 843.76, 401.58, 525.91],
      },
    ],
    credits: {
      enabled: false,
    },
  };
};

function AreaChart(props) {
  return (
    <div className="bg-white p-4 rounded-xl w-1/3">
      <HighchartsReact
        constructType="chart"
        highcharts={Highcharts}
        options={options(props)}
      />
    </div>
  );
}

export default AreaChart;
