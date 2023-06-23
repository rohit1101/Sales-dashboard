import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebFont from "webfontloader";
import Layout from "./components/layout/Layout";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "sans-serif"],
      },
    });
  }, []);

  return <Layout>Main Container</Layout>;
}

export default App;
