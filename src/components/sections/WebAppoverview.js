
import { Fragment } from 'react'
import { StarIcon , PhoneIcon , CheckBadgeIcon} from '@heroicons/react/20/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels  } from '@headlessui/react'
import SloganImg from '../../assets/images/Green Modern Agriculture Presentation.jpg'

const product = {
    name: 'Farm Sens Web App',
    version: { name: '1.0', date: 'November 19, 2024', datetime: '2024-11-19' },
    price: '$220',
    description:
        'Farm-Sens is an innovative web application designed to enhance agricultural productivity through real-time soil monitoring and smart irrigation management, empowering farmers with data-driven insights to optimize water usage, improve crop health, and increase yields for sustainable farming practices.',
    highlights: [
        'Irrigation and nutrient management',
        'Show the time, address, amount and type of poison',
        'View current & historical trends',
        'Set alerts, notifications & access helpful tools',
        'Use the calendar to schedule tasks & reminders',
        'And more !',
    ],
    imageSrc: SloganImg,
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
    average: 5,
}
const faqs = [
    {
        question: '1- What is Farm-Sens?',
        answer:
            'Farm-Sens is an innovative web application that provides real-time soil monitoring and smart irrigation management tools to help farmers optimize water usage, enhance crop health, and improve overall agricultural productivity.',
    },
    {
        question: '2- How does Farm-Sens work?',
        answer:
            "Farm-Sens uses advanced sensors to collect data on soil moisture, temperature, and nutrient levels. This data is then analyzed to provide actionable insights and alerts necessary for effective irrigation and crop management.",
    },
    {
        question: '3- Is there a mobile app for Farm-Sens?',
        answer:
            "Currently, Farm-Sens is a web-based application. However, it is optimized for mobile devices, allowing you to access all features from your smartphone or tablet.",
    },
    {
        question: '4- Is my data secure with Farm-Sens?',
        answer:
            "Yes, we prioritize your privacy and security. Farm-Sens employs industry-standard encryption and security measures to protect your data from unauthorized access and ensure it is safely stored.",
    },
    {
        question: '5- How can I get support if I have issues with the application?',
        answer:
            "Our support team is here to help! You can contact us via email at info@farm-sens.com or visit our support page for FAQs, troubleshooting guides, and live chat options.",
    },

]
const license = {
    href: '#',

    content: `
    <p>
        The Farm-Sens web application is licensed under a user-friendly plan that allows farmers and agricultural businesses to leverage its advanced features while ensuring compliance with intellectual property rights. The licensing typically includes access to real-time data analytics, support for sensor integration, and regular updates to enhance functionality. Users are granted permission to utilize the application for their farming needs, with stipulations regarding redistribution and modifications to protect the integrity of the software. For detailed licensing information, users are encouraged to review the End User License Agreement (EULA) provided upon registration or contact our support team for clarification on specific terms. This approach ensures that all users can effectively benefit from the technology while respecting the developers' rights
    </p>
    

  `,
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function WebAppOverview() {
    return (
        <div className="bg-white">
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {/* Product */}
                <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    {/* Product image */}
                    <div className="lg:col-span-4 lg:row-end-1">
                        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                            <img alt={product.imageAlt} src={product.imageSrc} className="object-cover object-center" />
                        </div>
                    </div>

                    {/* Product details */}
                    <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
                        <div className="flex flex-col-reverse">
                            <div className="mt-4">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

                                <h2 id="information-heading" className="sr-only">
                                    Product information
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Version {product.version.name} (Updated{' '}
                                    <time dateTime={product.version.datetime}>{product.version.date}</time>)
                                </p>
                            </div>

                            <div>
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                                'h-5 w-5 flex-shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                            </div>
                        </div>

                        <p className="mt-6 text-gray-500">{product.description}</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button
                                type="button"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Pay {product.price}
                            </button>
                            <button
                                type="button"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                (98) 914 555 8745 
                            </button>  
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                            <div className="prose prose-sm mt-4 text-gray-500">
                                <ul >
                                    {product.highlights.map((highlight) => (
                                        <div className='item-container flex justify-start items-center gap-2 mt-2'>
                                            <CheckBadgeIcon className='w-6 h-6'></CheckBadgeIcon>
                                            <li key={highlight}>{highlight}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
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
                                                <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
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
        </div>
    )
}
