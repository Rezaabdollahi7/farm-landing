export default function Contact() {

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        To contact us or to make suggestions and purchase sensors and fertilizers or advice, you can contact us in the following ways :
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" role="contentinfo">
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Email</h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>
                                <a target="_blank"  href="mailto:info@farm-sens.com" className="text-gray-600 hover:underline">
                                    info@farm-sens.com
                                </a>
                            </p>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Phone Number</h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>
                                <a target="_blank"  href="tel:+989911152536" className="text-gray-600 hover:underline">
                                    +98 991 115 2536
                                </a>
                            </p>
                        </address>
                    </div>
                    <div>
                        <h3 className="border-l border-indigo-600 pl-6 font-semibold text-gray-900">Location</h3>
                        <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                            <p>Iran, Tabriz, Emam Street</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )

}