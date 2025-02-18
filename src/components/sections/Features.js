import dropIcon from "../../assets/icons/drop.png";
import alertIcon from "../../assets/icons/alert.png";
import inputcon from "../../assets/icons/input.png";
import leafcon from "../../assets/icons/leaf.png";
import mapIcon from "../../assets/icons/map.png";
import sensorIcon from "../../assets/icons/sensor.png";
import shot1 from "../../assets/images/Features/shot11.png";
import shot2 from "../../assets/images/Features/shot22.png";
import shot3 from "../../assets/images/Features/shot33.png";
import shot4 from "../../assets/images/Features/shot44.png";
import farmLeaf2Icon from "../../assets/icons/farmLeaf3.jpeg";
const features = [
  {
    name: "Intelligent irrigation system",
    description:
      "Optimizing water consumption on agricultural land with a smart calendar",
    icon: dropIcon,
  },
  {
    name: "The ability to send regional alerts",
    description:
      "Get the latest regional and irrigation warnings and drought on your land with FARM",
    icon: alertIcon,
  },
  {
    name: "The smartest measuring sensors",
    description:
      "Keep up to date with the most accurate and up-to-date sensors on the FARM.",
    icon: sensorIcon,
  },
  {
    name: "Predictive Fertilization Insights",
    description:
      "Plan fertilization schedules with AI-powered predictions to enhance soil quality and boost crop yield.",
    icon: leafcon,
  },
  {
    name: "Aerial map of the Earth",
    description: "View the location of the farm using the aerial map",
    icon: mapIcon,
  },
  {
    name: "Adding land",
    description: "Add your farmland to the FARM for smart survey",
    icon: inputcon,
  },
];

export default function Features() {
  return (
    <section
      id="Features"
      className="bg-white py-24 sm:py-32 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 "
    >
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto  lg:text-center flex flex-col justify-center items-center">
          <h2 className=" text-2xl lg:text-3xl font-bold tracking-tight text-primaryDark flex gap-2 justify-center items-center">
            <img
              src={farmLeaf2Icon}
              alt="farm leaf ixon"
              className="w-12 h-14 rounded-full"
            />
            FARM App Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-6 gap-x-4 mt-12">
            <img src={shot1} alt="app shot" className="w-80" />
            <img src={shot2} alt="app shot" className="w-80" />
            <img src={shot3} alt="app shot" className="w-80" />
            <img src={shot4} alt="app shot" className="w-80" />
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 lg:text-lg">
                  <div className="absolute left-0 top-0 flex px-2 py-2 items-center justify-center rounded-lg bg-gray-100 border border-gray-300">
                    <img src={feature.icon} alt="icon" className="size-10" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
