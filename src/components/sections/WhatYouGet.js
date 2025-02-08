import dataLogerImg from "../../assets/images/including/including-1.png";
import sensorImg from "../../assets/images/including/including-24.png";
import webAppImg from "../../assets/images/including/including-31.png";
import farmLeaf2Icon from "../../assets/icons/farmLeaf3.jpeg";
const categories = [
  {
    name: " Data Logger & Modem",
    href: "#",
    imageSrc: dataLogerImg,
    imageAlt: "Data Logger & Modem",
    description: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Housing</h3>
                    <p class="text-[#BFDBAF] mt-2">UV Plastic</p>
                </div>
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Dimensions</h3>
                    <p class="text-[#BFDBAF] mt-2">28×22×8 cm</p>
                </div>
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Power Supply</h3>
                    <p class="text-[#BFDBAF] mt-2">3.6V Battery</p>
                </div>
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Measure Interval</h3>
                    <p class="text-[#BFDBAF] mt-2">60 minutes</p>
                </div>
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Water Resistance</h3>
                    <p class="text-[#BFDBAF] mt-2">IP68</p>
                </div>
                <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-100 font-bold ">Weight</h3>
                    <p class="text-[#BFDBAF] mt-2">850 gr</p>
                </div>
            </div>
            `,
  },
  {
    name: " Sensors",
    href: "#",
    imageSrc: sensorImg,
    imageAlt: "farm SENSOR",
    description: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">Range VWC</h3>
                        <p class="text-[#BFDBAF] mt-2">0 - 100%</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">EC (bulk)</h3>
                        <p class="text-[#BFDBAF] mt-2">0 - 23 ds/m</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">Temperature</h3>
                        <p class="text-[#BFDBAF] mt-2">-40 to 50°C</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">Cable Length</h3>
                        <p class="text-[#BFDBAF] mt-2">5 m</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">Dimensions</h3>
                        <p class="text-[#BFDBAF] mt-2">12×3×1 cm</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold ">Measurement</h3>
                        <p class="text-[#BFDBAF] mt-2">2 S</p>
                    </div>
                </div>
                `,
  },
  {
    name: " FARM Web App",
    href: "#",
    imageSrc: webAppImg,
    imageAlt: "farm web app image",
    description: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Version</h3>
                        <p class="text-[#BFDBAF] mt-2">Android, iOS</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Installation</h3>
                        <p class="text-[#BFDBAF] mt-2">Mobile / Web</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Connection</h3>
                        <p class="text-[#BFDBAF] mt-2">Any Sensor</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Control</h3>
                        <p class="text-[#BFDBAF] mt-2">Irrigation</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Control</h3>
                        <p class="text-[#BFDBAF] mt-2">Fertigation</p>
                    </div>
                    <div class="p-2 bg-[#488245] rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-100 font-bold ">Alert</h3>
                        <p class="text-[#BFDBAF] mt-2">Frozen</p>
                    </div>
                </div>
                `,
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-white" id="including">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-primaryDark flex gap-2 justify-center items-center">
          <img
            src={farmLeaf2Icon}
            alt="farm leaf ixon"
            className="w-12 h-14 rounded-full"
          />
          FARM Package Including
        </h2>

        <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group block border rounded-3xl p-4 drop-shadow-2xl bg-white"
            >
              <h3 className="my-8 text-xl  lg:text-xl text-center font-semibold text-gray-900">
                {category.name}
              </h3>
              <div
                aria-hidden="true"
                className=" overflow-hidden rounded-lg  group-hover:opacity-75"
              >
                <div className=" px-4 flex justify-center">
                  <img
                    alt={category.imageAlt}
                    src={category.imageSrc}
                    className="w-80 h-80 rounded-lg"
                  />
                </div>
              </div>
              <div
                className="mt-2 text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: category.description }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
