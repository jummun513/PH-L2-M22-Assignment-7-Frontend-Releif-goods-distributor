import bannerImg from "../../../../assets/images/banner.jpg";
const HeroSection = () => {
  return (
    <div className="relative h-[50vh] md:h-full">
      <div className="h-full">
        <img
          className="h-full object-cover"
          src={bannerImg}
          alt="banner image"
        />
      </div>
      <div className="absolute bottom-1/3 text-gray-100 w-full flex flex-col md:gap-y-3 px-2 md:px-5">
        <h1 className="text-center w-full font-semibold text-lg sm:text-2xl xl:text-4xl">
          Bringing Hope Home:
        </h1>
        <h1 className="text-center w-full font-semibold text-lg sm:text-2xl xl:text-4xl">
          Your Gateway to Relief
        </h1>
        <p className="text-gray-200 w-full text-center font-light text-sm md:text-base mt-2 xl:mt-5">
          Explore Our Relief Goods Distribution Website
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
