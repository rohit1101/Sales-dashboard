import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const options = (props) => {
  return {
    chart: {
      type: "column",
    },
    title: {
      text: "Volume vs Service",
      align: "left",
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },

    series: [
      {
        name: "Volume",
        data: [148, 133, 124],
        stack: "Service",
        color: "#1495fe",
      },
      {
        name: "Service",
        data: [102, 201, 65],
        stack: "Service",
        color: "#1ee097",
      },
    ],
    credits: {
      enabled: false,
    },
  };
};

function StackedColumn(props) {
  return (
    <div className="bg-white p-4 rounded-xl md:w-full lg:w-1/3">
      <HighchartsReact
        constructType="chart"
        highcharts={Highcharts}
        options={options(props)}
      />
    </div>
  );
}

export default StackedColumn;
