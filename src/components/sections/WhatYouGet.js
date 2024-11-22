import dataLogerImg from '../../assets/images/including-1.png'
import webAppImg from '../../assets/images/including-3.png'
import sensorImg from '../../assets/images/including-2.png'

const categories = [
    {
        name: 'Data Logger & Modem',
        href: '#',
        imageSrc: webAppImg,
        imageAlt: 'Data Logger & Modem',
        description: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Housing</h3>
                    <p class="text-gray-700 mt-2">UV Plastic</p>
                </div>
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Dimensions</h3>
                    <p class="text-gray-700 mt-2">28×22×8 cm</p>
                </div>
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Power Supply</h3>
                    <p class="text-gray-700 mt-2">3.6V Battery</p>
                </div>
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Measure Interval</h3>
                    <p class="text-gray-700 mt-2">60 minutes</p>
                </div>
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Water Resistance</h3>
                    <p class="text-gray-700 mt-2">IP68</p>
                </div>
                <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                    <h3 class="text-green-700 font-bold text-lg">Weight</h3>
                    <p class="text-gray-700 mt-2">850 gr</p>
                </div>
            </div>
            `,

    },
    {
        name: 'Sensors',
        href: '#',
        imageSrc: webAppImg,
        imageAlt: 'farm-sens SENSOR',
        description: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">Range VWC</h3>
                        <p class="text-gray-100 mt-2">0 - 100%</p>
                    </div>
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">EC (bulk)</h3>
                        <p class="text-gray-100 mt-2">0 - 23 ds/m</p>
                    </div>
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">Temperature</h3>
                        <p class="text-gray-100 mt-2">-40 to 50°C</p>
                    </div>
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">Cable Length</h3>
                        <p class="text-gray-100 mt-2">5 m</p>
                    </div>
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">Dimensions</h3>
                        <p class="text-gray-100 mt-2">12×3×1 cm</p>
                    </div>
                    <div class="p-2 bg-green-700 rounded-lg shadow-md flex flex-col items-center text-center ">
                        <h3 class="text-green-100 font-bold text-lg">Measurement</h3>
                        <p class="text-gray-100 mt-2">2 S</p>
                    </div>
                </div>
                `,

    },
    {
        name: 'FARM Web App',
        href: '#',
        imageSrc: webAppImg,
        imageAlt: 'farm web app image',
        description: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Version</h3>
                        <p class="text-gray-700 mt-2">Android, iOS</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Installation</h3>
                        <p class="text-gray-700 mt-2">Mobile / Web</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Connection</h3>
                        <p class="text-gray-700 mt-2">Any Sensor</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Control</h3>
                        <p class="text-gray-700 mt-2">Irrigation</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Control</h3>
                        <p class="text-gray-700 mt-2">Fertigation</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <h3 class="text-green-700 font-bold text-lg">Alert</h3>
                        <p class="text-gray-700 mt-2">Frozen</p>
                    </div>
                </div>
                `,

    },
]

export default function WhatYouGet() {
    return (
        <section className="bg-white" id='including'>
            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex gap-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>

                    Your Complete Smart Farming Package</h2>
                <p className="mt-4 text-base text-center  text-gray-500 lg:w-3/4 mx-auto">
                    "With every sensor purchase, you gain access to the Farm Web App, enabling real-time monitoring, advanced controls, and smart alerts to optimize your farming operations."
                </p>

                <div className="mt-20 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0">
                    {categories.map((category) => (
                        <a key={category.name} href={category.href} className="group block">
                            <h3 className="my-6 text-xl  lg:text-2xl text-center font-semibold text-gray-900">{category.name}</h3>
                            <div
                                aria-hidden="true"
                                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <img
                                    alt={category.imageAlt}
                                    src={category.imageSrc}
                                    className="h-full w-full object-cover object-center border p-2 rounded-lg"
                                />
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
    )
}
