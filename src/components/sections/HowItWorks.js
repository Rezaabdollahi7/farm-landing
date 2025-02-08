import React from "react";
import WorkImg from "../../assets/images/How/1.webp";
import farmLeaf2Icon from "../../assets/icons/farmLeaf3.jpeg";
export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative isolate overflow-hidden bg-white  py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className=" px-6 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 ">
            <div className="lg:max-w-lg ">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-primaryDark sm:text-4xl">
                How it works
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={WorkImg}
            className="w-[30rem] max-w-none md:rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
          />
        </div>
        <div className="px-6 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul className=" space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf icon"
                    className="mt-1 h-10 w-10 rounded-full"
                  />
                  <span>
                    <p>
                      Smart agriculture and irrigation sensors help farmers
                      adapt to difficult weather conditions and optimize
                      irrigation
                    </p>
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf icon"
                    className="mt-1 h-10 w-10 rounded-full"
                  />

                  <span>
                    <p>
                      Since sensors are becoming more affordable and available
                      to everyone, there is no reason for farmers not to enjoy
                      the benefits of digital agriculture.
                    </p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf icon"
                    className="mt-1 h-10 w-10 rounded-full"
                  />
                  <span>
                    <p>
                      The unique FARM App creates a completely functional and
                      simple for users with the help of artificial intelligence,
                      which can easily solve any need in agriculture.
                    </p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf icon"
                    className="mt-1 h-10 w-10 rounded-full"
                  />
                  <span>
                    <p>
                      Farmers have a smart and fluid calendar available at any
                      time and in any place to see the exact time of
                      agricultural needs, these needs can include irrigation,
                      fertilization, spraying, fighting frost.
                    </p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf icon"
                    className="mt-1 h-10 w-10 rounded-full"
                  />
                  <span>
                    <p>
                      This means the planting season with a specific work
                      schedule and predicted by the information received online
                      from the FARM.
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
