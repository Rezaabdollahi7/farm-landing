import instaLogo from "../../assets/icons/instagram-96.png";
import linkedinLogo from "../../assets/icons/linkedin-96.png";
import youtubeLogo from "../../assets/icons/youtube-96.png";

const navigation = {
  main: [
    { name: "Home", href: "#" },
    { name: "How It Works ?", href: "#how" },
    { name: "Including", href: "#including" },
    { name: "Technology", href: "#TechOverview" },
    { name: "Features", href: "#Features" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      imgSrc:linkedinLogo
    },
    {
      name: "Instagram",
      href: "#",
      imgSrc:instaLogo
    },
    {
      name: "YouTube",
      href: "#",
      imgSrc:youtubeLogo
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t ">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              {/* <item.icon aria-hidden="true" className="h-12" /> */}
              <img src={item.imgSrc} className="w-10 h-10 " alt={item.name}/>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2025 Farm , Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
