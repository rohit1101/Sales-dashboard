import React from "react";
import Upload from "../../../assets/upload-16.svg";

function SalesCard() {
  return (
    <div className="bg-white rounded-lg basis-3/5 p-5">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1>{`Today's Sales`}</h1>
          <p>Sales Summary</p>
        </div>
        <div className="flex h-10 items-center gap-3 border border-gray-300 border-solid rounded-md px-3 cursor-pointer">
          <img src={Upload} alt="upload-icon" />
          <p className="text-md">Export</p>
        </div>
      </div>
    </div>
  );
}

export default SalesCard;
