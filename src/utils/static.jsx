import Pie from "../assets/pie-chart.svg";
import Leader from "../assets/bar-chart-2.svg";
import Order from "../assets/shopping-cart.svg";
import Products from "../assets/shopping-bag.svg";
import Report from "../assets/trending-up.svg";
import Messages from "../assets/message-square.svg";
import Settings from "../assets/settings.svg";
import SignOut from "../assets/log-out.svg";
import Sales from "../assets/bar-chart.svg";
import Truck from "../assets/truck.svg";
import Tag from "../assets/tag.svg";
import User from "../assets/user-plus.svg";

export const Static = {
  sideBarItems: [
    { id: 1, icon: Pie, title: "Dashboard", alt: "dashboard-icon" },
    { id: 2, icon: Leader, title: "Leaderboard", alt: "leader-icon" },
    { id: 3, icon: Order, title: "Order", alt: "order-icon" },
    { id: 4, icon: Products, title: "Products", alt: "product-icon" },
    { id: 5, icon: Report, title: "Sales Report", alt: "report-icon" },
    { id: 6, icon: Messages, title: "Messages", alt: "messages-icon" },
    { id: 7, icon: Settings, title: "Settings", alt: "settings-icon" },
    { id: 8, icon: SignOut, title: "Sign Out", alt: "logout-icon" },
  ],
  salesInsights: [
    {
      iconBg: "darkRed",
      bg: "red",
      id: 1,
      icon: Sales,
      revenue: "$1K",
      text: "Total Sales",
      sales: "+8% from yesterday",
    },
    {
      iconBg: "darkYellow",
      bg: "yellow",
      id: 2,
      icon: Truck,
      revenue: "300",
      text: "Total Order",
      sales: "+5% from yesterday",
    },
    {
      iconBg: "darkGreen",
      bg: "green",
      id: 3,
      icon: Tag,
      revenue: "5",
      text: "Product Sold",
      sales: "+1.2% from yesterday",
    },
    {
      iconBg: "darkPurple",
      bg: "purple",
      id: 4,
      icon: User,
      revenue: "8",
      text: "New Customers",
      sales: "+0.5% from yesterday",
    },
  ],
  colorVariants: {
    green: "bg-light-green",
    red: "bg-light-red",
    purple: "bg-light-purple",
    yellow: "bg-light-yellow",
    darkRed: "bg-dark-red",
    darkGreen: "bg-dark-green",
    darkPurple: "bg-dark-purple",
    darkYellow: "bg-dark-yellow",
    darkBlue: "bg-dark-blue",
    blue: "bg-light-blue",
    four: "w-16",
    two: "w-20",
    three: "w-12",
    one: "w-32",
    borderBlue: "border-dark-blue",
    borderGreen: "border-dark-green",
    borderYellow: "border-dark-yellow",
    borderPurple: "border-dark-purple",
  },
  tableData: [
    {
      id: "01",
      name: "Home Decor Range",
      iconBg: "darkBlue",
      bg: "blue",
      sales: "45%",
      width: "one",
      border: "borderBlue",
    },
    {
      id: "02",
      name: "Disney Princess Pink Bag 18",
      iconBg: "darkGreen",
      bg: "green",
      sales: "29%",
      width: "two",
      border: "borderGreen",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      iconBg: "darkPurple",
      bg: "purple",
      sales: "18%",
      width: "three",
      border: "borderPurple",
    },
    {
      id: "04",
      name: "Apple Smartphones",
      iconBg: "darkYellow",
      bg: "yellow",
      sales: "25%",
      width: "four",
      border: "borderYellow",
    },
  ],
};
