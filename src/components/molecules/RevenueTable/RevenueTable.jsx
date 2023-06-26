import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import cx from "classnames";

const options = (props) => {
  return {
    chart: {
      type: "column",
    },
    title: {
      text: props.revenue ? "Total Revenue" : "Target vs Reality",
      align: "left",
    },
    series: props.revenue
      ? [
          {
            name: "Online Sales",
            data: [
              863.24, 646.36, 209.92, 574.63, 758.79, 646.36, 209.92, 574.63,
            ],
            color: "#1495fe",
          },
          {
            name: "Offline Sales",
            data: [
              883.57, 549.82, 238.14, 746.96, 124.87, 549.82, 238.14, 746.96,
            ],
            color: "#1ee097",
          },
        ]
      : [
          {
            name: "Target",
            data: [861.72, 276.89, 546.23, 712.45, 372.16],
            color: "#4cb590",
          },
          {
            name: "Reality",
            data: [312.78, 524.93, 680.21, 786.45, 457.32],
            color: "#fecf01",
          },
        ],
    credits: {
      enabled: false,
    },
  };
};

function RevenueTable(props) {
  return (
    <div
      className={cx("bg-white rounded-xl md:w-full lg:w-1/3", {
        "w-2/3": props.revenue,
      })}
    >
      <HighchartsReact
        constructType="chart"
        highcharts={Highcharts}
        options={options(props)}
      />
    </div>
  );
}

export default RevenueTable;
