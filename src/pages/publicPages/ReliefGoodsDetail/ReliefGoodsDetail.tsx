import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import NoDataFound from "../../../components/ui/NoDataFound/NoDataFound";
import { useGetSingleSupplyQuery } from "../../../redux/features/supply/supplyApi";
import { useParams } from "react-router-dom";
import Loading from "../../../components/ui/Loading/Loading";

const ReliefGoodsDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleSupplyQuery(id);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container mx-auto my-20 md:my-28">
      <Typography variant="h1" className="text-center">
        Relief Item Details
      </Typography>
      {data ? (
        <div className="mt-10 md:mt-14 flex justify-center">
          <Card className="relative mt-6 w-full max-w-xl">
            <CardHeader color="blue-gray" className="relative">
              <img
                className="object-cover w-full h-full"
                src={data.image?.url}
                alt={data.title}
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mt-2 mb-2 text-center"
              >
                {data.title}
              </Typography>
              <Typography variant="lead" className="text-center">
                Category: {data.category}
              </Typography>
              <Typography className="text-center mt-1" variant="h5">
                Amount: {data.amount}
                {(data.category === "Food Supplies" && " tons") ||
                  (data.category === "Shelter Kits" && " pcs") ||
                  (data.category === "Clothing" && " per.") ||
                  (data.category === "Medical Supports" && " pcs")}
              </Typography>
              <Typography variant="paragraph" className="mt-5">
                {data.desc}
              </Typography>
            </CardBody>
          </Card>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default ReliefGoodsDetail;
