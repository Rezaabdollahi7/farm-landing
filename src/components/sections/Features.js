import { ChartBarIcon, BellAlertIcon, PresentationChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Real-time Soil Monitoring',
        description:
            'Get instant insights into soil moisture, salinity, and temperature to make informed decisions and optimize farm efficiency.',
        icon: ChartBarIcon,
    },
    {
        name: 'Smart Irrigation Alerts',
        description:
            'Receive timely notifications on when and how much to irrigate, reducing water waste and improving crop health.',
        icon: BellAlertIcon,
    },
    {
        name: 'Customizable Dashboards',
        description:
            'Visualize your farm’s data with user-friendly charts and reports, tailored to suit your specific needs.',
        icon: PresentationChartBarIcon,
    },
    {
        name: 'Predictive Fertilization Insights',
        description:
            'Plan fertilization schedules with AI-powered predictions to enhance soil quality and boost crop yield.',
        icon: LightBulbIcon,
    },
]


export default function Features() {
    return (
        <section id='Features' className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600">
                        Transform Your Farming Experience
                    </h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  text-gray-900 sm:text-5xl lg:text-balance">
                        Optimize resources, boost yields, and achieve sustainable farming effortlessly.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
