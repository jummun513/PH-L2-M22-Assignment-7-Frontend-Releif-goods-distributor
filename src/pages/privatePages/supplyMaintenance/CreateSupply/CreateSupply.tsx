import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePostSingleSupplyMutation } from "../../../../redux/features/supply/supplyApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface IFormInput {
  title: string;
  category: string;
  amount: number;
  desc?: string;
  picture?: File;
}

const CreateSupply = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [addData, { error, isSuccess, isError, isLoading }] =
    usePostSingleSupplyMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();
    const amountInt = Number(data.amount);
    const { picture, ...rest } = data;
    rest.amount = amountInt;
    if (picture instanceof FileList && picture.length > 0) {
      formData.append("file", picture[0]);
    }
    formData.append("data", JSON.stringify(rest));
    addData(formData);
  };
  if (isSuccess) {
    toast.success("Successfully, Added a supply.", {
      duration: 3000,
    });
    navigate("/dashboard");
  }

  if (isError) {
    toast.error("Something Wrong", { duration: 3000 });
    console.log(error);
  }

  return (
    <div className="flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Add Supply
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Fill up with proper information!
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Supply Title
            </Typography>
            <Input
              error={errors.title && true}
              {...register("title", { required: true, minLength: 3 })}
              size="lg"
              placeholder="Flour 10kg packet"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.title && (
              <Typography
                variant="small"
                color="red"
                className="-mt-3 flex items-center gap-1 font-normal"
              >
                <span>This field is required</span>
              </Typography>
            )}
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Supply Category"
                  error={errors.category && true}
                >
                  <Option value="Food Supplies">Food Supplies</Option>
                  <Option value="Shelter Kits">Shelter Kits</Option>
                  <Option value="Clothing">Clothing</Option>
                  <Option value="Medical Supports">Medical Supports</Option>
                </Select>
              )}
            />
            {errors.category && (
              <Typography
                variant="small"
                color="red"
                className="-mt-3 flex items-center gap-1 font-normal"
              >
                <span>This field is required</span>
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Total Amount
            </Typography>
            <Input
              error={errors.amount && true}
              type="number"
              step="0.01"
              {...register("amount", {
                required: true,
                min: { value: 0, message: "Amount should be positive." },
              })}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.amount && (
              <Typography
                variant="small"
                color="red"
                className="-mt-3 flex items-center gap-1 font-normal"
              >
                <span>{errors.amount.message || "This field is required"}</span>
              </Typography>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Short Description
            </Typography>
            <Input
              error={errors.desc && true}
              {...register("desc")}
              size="lg"
              type="text"
              placeholder="Packed with essential nutrients and natural flavours..."
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Upload File
              </Typography>
              <Input
                error={errors.picture && true}
                {...register("picture")}
                size="lg"
                placeholder="Flour 10kg packet"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="file"
              />
            </div>
          </div>
          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            Donate Now
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateSupply;
