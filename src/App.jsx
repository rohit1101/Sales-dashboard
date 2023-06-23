import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";
import SalesCard from "./components/organisms/SalesCard/SalesCard";
import InsightsChart from "./components/molecules/InsightsChart/InsightsChart";
import RevenueTable from "./components/molecules/RevenueTable/RevenueTable";
import AreaChart from "./components/molecules/AreaChart/AreaChart";
import ProductTable from "./components/organisms/ProductTable/ProductTable";
import StackedColumn from "./components/molecules/RevenueTable/StackedColumn/StackedColumn";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "sans-serif"],
      },
    });
  }, []);

  return (
    <Layout>
      <Topbar />
      <div className="bg-[#f9fafc] w-full p-5">
        <div className="flex flex-row gap-5 md:flex-wrap lg:flex-nowrap">
          <SalesCard />
          <InsightsChart />
        </div>
        <div className="flex flex-row gap-4 py-5 md:flex-wrap lg:flex-nowrap">
          <RevenueTable revenue />
          <AreaChart />
          <RevenueTable />
        </div>
        <div className="flex flex-row gap-4 md:flex-wrap lg:flex-nowrap">
          <ProductTable />
          <AreaChart sales />
          <StackedColumn />
        </div>
      </div>
    </Layout>
  );
}

export default App;
