import React from 'react'

import { CalendarIcon, ChartBarIcon, FireIcon } from '@heroicons/react/20/solid'
import WorkImg from '../../assets/images/How/1.webp'

export default function HowItWorks() {
    return (
        <section id='how' className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Revolutionizing Farming with Smart Sensors</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h1>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src={WorkImg}
                        className="w-[48rem] max-w-none rounded-2xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                "Our sensors are designed to seamlessly integrate with your farming operations. They monitor key parameters such as soil moisture, salinity, and temperature in real-time, transmitting data to our Farm Web App. Using this data, you can make informed decisions about irrigation, fertilization, and other critical processes, ensuring healthier crops and maximizing productivity."
                            </p>
                            <ul className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CalendarIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Smart Farming Made Easy :</strong>
                                        <ul>
                                            <li className='mt-2'>
                                                Measure critical field data: soil moisture, EC (electrical conductivity), and temperature.
                                            </li>
                                            <li className='mt-2'>
                                                Reduce irrigation costs by 30-60% with real-time monitoring and actionable insights.
                                            </li>
                                            <li className='mt-2'>
                                                Data sent directly to your smartphone via the FARM App for precise decision-making.
                                            </li>
                                            <li className='mt-2'>
                                                Easy installation in just minutes — perfect for technical and non-technical farmers alike.
                                            </li>
                                        </ul>

                                    </span>
                                </li>

                                <li className="flex gap-x-3">
                                    <ChartBarIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Optimize Irrigation and Save Water :</strong>
                                        <ul>
                                            <li className='mt-2'>
                                                Our sensors allow you to safely dial down irrigation systems to the exact levels needed for healthy plant growth, reducing water usage and minimizing costs.
                                            </li>
                                            <li className='mt-2'>
                                                The FARM App provides real-time alerts for fertilization schedules, ensuring optimal plant nutrition and maximizing crop yields.
                                            </li>

                                        </ul>

                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <FireIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">AI-Powered FARM App :</strong>
                                        <ul>
                                            <li className='mt-2'>
                                                A smart and dynamic calendar for managing irrigation, fertilization, and other tasks.
                                            </li>
                                            <li className='mt-2'>
                                                Real-time insights and alerts for weather conditions, frost management, and pest control.
                                            </li>
                                            <li className='mt-2'>
                                                A fully functional interface accessible anytime and anywhere.
                                            </li>
                                            <li className='mt-2'>
                                                Easy installation in just minutes — perfect for technical and non-technical farmers alike.
                                            </li>
                                        </ul>

                                    </span>
                                </li>
                            </ul>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join the Digital Farming Revolution</h2>
                            <p className="mt-6">
                                "Upgrade your farm with FARM-Sens smart sensors and enjoy real-time data, cost savings, and healthier crops. It's time to bring the future of farming to your fields!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
