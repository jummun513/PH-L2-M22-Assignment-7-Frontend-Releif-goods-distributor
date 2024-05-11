import { Typography } from "@material-tailwind/react";

const AboutUsSection = () => {
  return (
    <div>
      <div className="mt-20 md:mt-28 bg-blue-gray-50 py-10 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Typography variant="h1">About Us</Typography>
            <Typography variant="lead" className="mt-1 md:mt-4">
              Providing aid and hope in times of crisis.
            </Typography>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/164733/mission.svg"
                alt="Mission"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod euismod ligula, sed vehicula urna congue id.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://www.satishminerals.com/img/missionvision.svg"
                alt="Objectives"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">
                Our Objectives
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod euismod ligula, sed vehicula urna congue id.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/320886/gooey-impact.svg"
                alt="Impact"
                className="h-20 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Our Impact</h3>
              <p className="mt-2 text-center text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                euismod euismod ligula, sed vehicula urna congue id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
