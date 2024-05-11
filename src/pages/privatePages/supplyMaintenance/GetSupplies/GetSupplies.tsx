/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllSuppliesQuery } from "../../../../redux/features/supply/supplyApi";
import Loading from "../../../../components/ui/Loading/Loading";
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../../../components/ui/NoDataFound/NoDataFound";

const GetSupplies = () => {
  const { data, isLoading } = useGetAllSuppliesQuery(undefined);
  const navigate = useNavigate();
  const TABLE_HEAD = ["Thumbnail", "Title", "Category", "Amount", "Action"];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center mb-5 md:mb-8"
      >
        Manage All Supplies
      </Typography>
      <div className="flex justify-end mb-4 md:mb-6">
        <Button
          onClick={() => navigate("/dashboard/create-supply")}
          size="sm"
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="me-2 w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New Supply
        </Button>
      </div>

      {data.length === 0 ? (
        <NoDataFound></NoDataFound>
      ) : (
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, i) => (
                  <th
                    key={i}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-normal leading-none opacity-70 ${
                        TABLE_HEAD.length === i + 1 && "text-end"
                      }`}
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((d: any, index: number) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <img
                      className="h-full w-16"
                      src={d.image?.url}
                      alt={d.title}
                    />
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {d.title}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {d.category}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {d.amount}
                    </Typography>
                  </td>
                  <td className="p-4 text-end">
                    <IconButton color="green" className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </IconButton>
                    <IconButton color="red">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
};

export default GetSupplies;
