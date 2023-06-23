import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";

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
      <h1 className="bg-[#f9fafc]">chartss</h1>
    </Layout>
  );
}

export default App;
