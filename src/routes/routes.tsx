import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../components/layout/AdminLayout/AdminLayout";
import AdminDashboard from "../components/layout/AdminLayout/AdminDashboard/AdminDashboard";
import Home from "../pages/publicPages/Home/Home";
import Login from "../pages/publicPages/Login/Login";
import Register from "../pages/publicPages/Register/Register";
import CreateSupply from "../pages/privatePages/supplyMaintenance/CreateSupply/CreateSupply";
import GetSupplies from "../pages/privatePages/supplyMaintenance/GetSupplies/GetSupplies";
import AllReliefGoods from "../pages/publicPages/AllReliefGoods/AllReliefGoods";
import ReliefGoodsDetail from "../pages/publicPages/ReliefGoodsDetail/ReliefGoodsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "relief-goods", element: <AllReliefGoods></AllReliefGoods> },
      {
        path: "relief-goods/:id",
        element: <ReliefGoodsDetail></ReliefGoodsDetail>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout></AdminLayout>,
    children: [
      { index: true, element: <AdminDashboard></AdminDashboard> },
      {
        path: "create-supply",
        element: <CreateSupply></CreateSupply>,
      },
      {
        path: "supplies",
        element: <GetSupplies></GetSupplies>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
