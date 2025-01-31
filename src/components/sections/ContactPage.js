import { Link } from "react-router-dom"
import { BackspaceIcon } from "@heroicons/react/24/outline"
import FarmImg from '../../assets/images/bg3.jpg'
export default function Example() {
    return (
        <div className="relative bg-white">
            <Link to={"/"} className=" absolute top-6 left-3 text-sm font-semibold rounded-xl flex items-center gap-3 " >
                <BackspaceIcon className="w-10 h-10" />
                <span>Back </span>
            </Link>
            <div className="lg:absolute lg:inset-0 lg:left-1/2">
                <img
                    alt="Farm Img"
                    src={FarmImg}
                    className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                />
            </div>
            <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-16">
                
                <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's work together</h2>
                        <form action="#" method="POST" className="mt-10">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="phone" className="block font-semibold text-gray-900">
                                            Phone
                                        </label>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between text-sm leading-6">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            How can we help you?
                                        </label>
                                    </div>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            aria-describedby="message-description"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="block w-full rounded-md bg-primaryDark px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
