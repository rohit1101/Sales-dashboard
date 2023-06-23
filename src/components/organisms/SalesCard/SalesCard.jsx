import React from "react";
import Upload from "../../../assets/upload-16.svg";
import { Static } from "../../../utils/static";

function SalesCard() {
  return (
    <div className="bg-white rounded-lg basis-3/5 p-5 flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-black font-roboto text-xl pb-2">{`Today's Sales`}</h1>
          <p className="font-normal text-gray-400 text-sm">Sales Summary</p>
        </div>
        <div className="flex h-6 items-center gap-3 border border-gray-300 border-solid rounded-md px-2 py-4 cursor-pointer">
          <img src={Upload} alt="upload-icon" className="w-3 h-3" />
          <p className="text-xs font-light">Export</p>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        {Static.salesInsights.map((insight) => (
          <div
            className={`w-44 h-40 ${
              Static.colorVariants[insight.bg]
            } rounded-xl p-4`}
            key={insight.id}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mb-4 ${
                Static.colorVariants[insight.iconBg]
              }`}
            >
              <img src={insight.icon} alt="summary-icon" />
            </div>
            <p className="font-black text-xl">{insight.revenue}</p>
            <p className="font-black py-2 text-gray-400 text-sm">
              {insight.text}
            </p>
            <p className="text-xs font-bold text-blue-400">{insight.sales}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesCard;
