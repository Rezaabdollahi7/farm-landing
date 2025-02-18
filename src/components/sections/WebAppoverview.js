import { Fragment } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/20/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import SloganImg from "../../assets/images/farmPackage4.png";
import farmLeaf2Icon from "../../assets/icons/farmLeaf3.jpeg";
const product = {
  name: "FARM  Web App",
  version: { name: "1.0", date: "November 19, 2024", datetime: "2024-11-19" },
  price: "$220",
  description:
    "FARM is an innovative web application designed to enhance agricultural productivity through real-time soil monitoring and smart irrigation management, empowering farmers with data-driven insights to optimize water usage, improve crop health, and increase yields for sustainable farming practices.",
  highlights: [
    "Irrigation and nutrient management",
    "Show the time, address, amount and type of poison",
    "View current & historical trends",
    "Set alerts, notifications & access helpful tools",
    "Use the calendar to schedule tasks & reminders",
    "And more !",
  ],
  imageSrc: SloganImg,
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};

const faqs = [
  {
    question: "1- What is FARM?",
    answer:
      "FARM is an innovative web application that provides real-time soil monitoring and smart irrigation management tools to help farmers optimize water usage, enhance crop health, and improve overall agricultural productivity.",
  },
  {
    question: "2- How does FARM work?",
    answer:
      "FARM uses advanced sensors to collect data on soil moisture, temperature, and nutrient levels. This data is then analyzed to provide actionable insights and alerts necessary for effective irrigation and crop management.",
  },
  {
    question: "3- Is there a mobile app for Farm?",
    answer:
      "Currently, FARM is a web-based application. However, it is optimized for mobile devices, allowing you to access all features from your smartphone or tablet.",
  },
  {
    question: "4- Is my data secure with Farm?",
    answer:
      "Yes, we prioritize your privacy and security. FARM employs industry-standard encryption and security measures to protect your data from unauthorized access and ensure it is safely stored.",
  },
  {
    question: "5- How can I get support if I have issues with the application?",
    answer:
      "Our support team is here to help! You can contact us via email at info@farm-sens.com or visit our support page for FAQs, troubleshooting guides, and live chat options.",
  },
];
const license = {
  href: "#",

  content: `
    <p>
        The FAEM web application is licensed under a user-friendly plan that allows farmers and agricultural businesses to leverage its advanced features while ensuring compliance with intellectual property rights. The licensing typically includes access to real-time data analytics, support for sensor integration, and regular updates to enhance functionality. Users are granted permission to utilize the application for their farming needs, with stipulations regarding redistribution and modifications to protect the integrity of the software. For detailed licensing information, users are encouraged to review the End User License Agreement (EULA) provided upon registration or contact our support team for clarification on specific terms. This approach ensures that all users can effectively benefit from the technology while respecting the developers' rights
    </p>
    

  `,
};

export default function WebAppOverview() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={farmLeaf2Icon}
                    alt="farm leaf ixon"
                    className="w-12 h-14 rounded-full"
                  />
                  <h1 className="text-2xl font-bold tracking-tight text-primaryDark sm:text-3xl">
                    {product.name}
                  </h1>
                </div>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Version {product.version.name} (Updated{" "}
                  <time dateTime={product.version.datetime}>
                    {product.version.date}
                  </time>
                  )
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{product.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 ">
              <button
                type="button"
                className="flex w-max items-center justify-center gap-3 rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <ChatBubbleLeftIcon className="h-5 w-5 " aria-hidden="true" />
                <span>info@farm-sens.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full lg:gap-8 lg:grid-cols-12 mx-auto px-4  sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className=" border-gray-200 pt-6 col-span-5">
          <h3 className="text-3xl lg:text-center font-bold text-primaryDark">
            Highlights
          </h3>
          <div className="prose prose-sm mt-4 text-gray-500">
            <ul>
              {product.highlights.map((highlight) => (
                <div className="item-container flex justify-start items-center gap-2 mt-6">
                  <img
                    src={farmLeaf2Icon}
                    className="w-10 h-11 rounded-full"
                    alt="leaf icon"
                  />

                  <li key={highlight}>{highlight}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full col-span-7  mt-12 lg:mt-0">
          <TabGroup>
            <div className="border-b border-gray-200">
              <TabList className="-mb-px flex space-x-8">
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800  data-[selected]:text-indigo-600">
                  FAQ
                </Tab>
                <Tab className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800  data-[selected]:text-indigo-600">
                  License
                </Tab>
              </TabList>
            </div>
            <TabPanels as={Fragment}>
              <TabPanel className="text-sm text-gray-500">
                <h3 className="sr-only">Frequently Asked Questions</h3>

                <dl>
                  {faqs.map((faq) => (
                    <Fragment key={faq.question}>
                      <dt className="mt-10 font-medium text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                        <p>{faq.answer}</p>
                      </dd>
                    </Fragment>
                  ))}
                </dl>
              </TabPanel>

              <TabPanel className="pt-10">
                <h3 className="sr-only">License</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: license.content }}
                  className="prose prose-sm max-w-none text-gray-500"
                />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}
