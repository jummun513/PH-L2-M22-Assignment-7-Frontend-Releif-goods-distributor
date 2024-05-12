/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useGetAllSuppliesQuery } from "../../../redux/features/supply/supplyApi";
import Loading from "../../../components/ui/Loading/Loading";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import NoDataFound from "../../../components/ui/NoDataFound/NoDataFound";

const AllReliefGoods = () => {
  const { data, isLoading } = useGetAllSuppliesQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto my-20 md:my-28">
      <Typography variant="h1" className="text-center">
        Most Needed Relief Goods
      </Typography>
      {data?.length === 0 ? (
        <NoDataFound></NoDataFound>
      ) : (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 place-items-center gap-8 md:gap-10 mt-10 md:mt-14">
          {data?.map((item: any, index: number) => (
            <Card key={index} className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={item.image?.url} alt={item.title} />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.title}
                </Typography>
                <Typography variant="lead">
                  Category: {item.category}
                </Typography>
                <Typography>
                  Amount: {item.amount}
                  {(item.category === "Food Supplies" && " tons") ||
                    (item.category === "Shelter Kits" && " pcs") ||
                    (item.category === "Clothing" && " per.") ||
                    (item.category === "Medical Supports" && " pcs")}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={() => navigate(`/relief-goods/${item._id}`)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReliefGoods;
