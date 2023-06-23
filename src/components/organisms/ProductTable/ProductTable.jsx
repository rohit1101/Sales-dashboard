import React from "react";
import { Static } from "../../../utils/static";

function ProductTable() {
  return (
    <div className="bg-white rounded-xl w-2/3">
      <p className="font-black font-roboto text-xl p-4">Top Products</p>
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b border-solid border-b-gray-200">
            <th className="font-normal text-gray-400 text-sm text-left pl-3 py-4">
              #
            </th>
            <th className="font-normal text-gray-400 text-sm text-left">
              Name
            </th>
            <th className="font-normal text-gray-400 text-sm text-left">
              Popularity
            </th>
            <th className="font-normal text-gray-400 text-sm text-left">
              Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {Static.tableData.map((tableItem) => (
            <tr key={tableItem.id}>
              <td className="border-b border-solid border-b-gray-200 py-8 px-2">
                {tableItem.id}
              </td>
              <td className="w-56 border-b border-solid border-b-gray-200 py-8">
                {tableItem.name}
              </td>
              <td className="border-b border-solid border-b-gray-200 py-8 px-2">
                <div
                  className={`rounded-full h-1 w-full ${
                    Static.colorVariants[tableItem.bg]
                  }`}
                />
                <div
                  className={`rounded-full h-1 ${
                    Static.colorVariants[tableItem.width]
                  } ${
                    Static.colorVariants[tableItem.iconBg]
                  }  relative bottom-1`}
                />
              </td>
              <td className="border-b border-solid border-b-gray-200 py-8 px-2">
                <div
                  className={`${
                    Static.colorVariants[tableItem.bg]
                  }  text-center border border-solid rounded-md ${
                    Static.colorVariants[tableItem.border]
                  } `}
                >
                  {tableItem.sales}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
