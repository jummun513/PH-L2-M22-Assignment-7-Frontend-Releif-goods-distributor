import { Button } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Button className="mt-[20vh]" variant="text" loading={true}>
        Loading
      </Button>
    </div>
  );
};

export default Loading;
