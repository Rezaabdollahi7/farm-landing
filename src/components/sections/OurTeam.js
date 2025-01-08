import DelirPhoto from '../../assets/images/dr-delir.jpg'
import BesharatPhoto from '../../assets/images/dr-besharat.jpg'

const people = [
    {
        name: 'Dr. Besharat',
        role: 'Researcher',
        imageUrl:
            BesharatPhoto,
        bio: 'Dr. Sina Basharat, a soil scientist with a Ph.D., specializes in soil management and environmental sustainability. His research provides essential insights that have shaped the predictive algorithms in Farm-Sens, enabling precise, data-driven recommendations for efficient water and soil management.',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Dr.Dalir',
        role: 'Researcher',
        imageUrl:
            DelirPhoto,
        bio: 'Dr. Reza Delir is a soil and irrigation expert with a Ph.D. in his field. His research focuses on optimizing irrigation practices and enhancing soil health, significantly contributing to the development of advanced sensors used in Farm-Sens for accurate soil monitoring and irrigation forecasting.',
        xUrl: '#',
        linkedinUrl: '#',
    },

]

export default function OurTeam() {
    return (
        <div className="bg-white py-24 md:py-32 lg:py-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our team at Farm-Sens is comprised of esteemed researchers and experts in soil science and irrigation, dedicated to advancing agricultural technology. With their extensive knowledge and innovative research, they drive the development of solutions that empower farmers to optimize resources and enhance crop sustainability.
                    </p>
                </div>
                <ul

                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img alt="" src={person.imageUrl} className="aspect-[3/3] w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>
                            <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                            <ul className="mt-6 flex gap-x-6">
                                <li>
                                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Email</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                        </svg>

                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Call</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
