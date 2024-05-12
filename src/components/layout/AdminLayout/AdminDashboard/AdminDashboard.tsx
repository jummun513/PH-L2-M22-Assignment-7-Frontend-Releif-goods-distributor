/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@material-tailwind/react";
import { useGetAllSuppliesQuery } from "../../../../redux/features/supply/supplyApi";
import Loading from "../../../ui/Loading/Loading";
import LineChart from "./LineChart/LineChart";
import PieChart from "./PieChart/PieChart";

const AdminDashboard = () => {
  const { data, isLoading } = useGetAllSuppliesQuery(undefined);

  if (isLoading) {
    return <Loading></Loading>;
  }

  const foodSuppliesSum = data?.reduce((acc: number, item: any) => {
    if (item.category === "Food Supplies") {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const shelterKits = data?.reduce((acc: number, item: any) => {
    if (item.category === "Shelter Kits") {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const clothing = data?.reduce((acc: number, item: any) => {
    if (item.category === "Clothing") {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const medicalSupports = data?.reduce((acc: number, item: any) => {
    if (item.category === "Medical Supports") {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const pieChartData = [
    { category: "Food Supplies", amount: foodSuppliesSum },
    { category: "Shelter Kits", amount: shelterKits },
    { category: "Clothing", amount: clothing },
    { category: "Medical Supports", amount: medicalSupports },
  ];

  return (
    <>
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center mb-14 md:mb-20"
      >
        Amount VS Relief Goods Category
      </Typography>
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-14 md:mb-20">
          <LineChart data={pieChartData} />
        </div>
        <div className="w-full max-w-lg mx-auto">
          <PieChart data={pieChartData} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
