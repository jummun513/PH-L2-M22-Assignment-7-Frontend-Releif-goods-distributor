import { Typography } from "@material-tailwind/react";

const GallerySecion = () => {
  return (
    <div className="container mx-auto my-20 md:my-28">
      <Typography variant="h2" className="text-center">
        Humanitarian Works
      </Typography>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-10 md:mt-14">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1595561579181-263fe6175b73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://images.pexels.com/photos/933623/pexels-photo-933623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/8718885/pexels-photo-8718885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/4261251/pexels-photo-4261251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/8060300/pexels-photo-8060300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1661306439777-cb0bd3cb984a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center "
              src="https://images.pexels.com/photos/3996734/pexels-photo-3996734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/8543601/pexels-photo-8543601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/6565756/pexels-photo-6565756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1661962954265-f0d986d737fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySecion;
