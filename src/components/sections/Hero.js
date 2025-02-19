import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/icons/farm.png";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "How It Works ? ", href: "#how", current: false },
  { name: "Including ", href: "#including", current: false },
  { name: "Technology", href: "#TechOverview", current: false },
  { name: "Features ", href: "#Features", current: false },
  {
    name: "Sens 1",
    href: "https://drive.google.com/file/d/1RZMafnd5vhqGfPc6xXajrE1mT2UnDw39/view?usp=sharing",
    current: false,
  },
  {
    name: "Benefits",
    href: "https://docs.google.com/presentation/d/1C5ulTXIAe9lVfEqTOUr3PdlHsSCd9zc5/edit?usp=drive_link&ouid=116030266330590200291&rtpof=true&sd=true",
    current: false,
  },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="fixed inset-x-0 top-0 z-50 bg-white border-b-2">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-3 lg:px-8 "
        >
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="-m-1.5 p-1.5 flex justify-center items-center gap-2"
            >
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={Logo} alt="Your Company" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <div className="   text-center gap-5 flex justify-center mr-4">
              <a
                href="https://users.farm-sens.com/"
                target="_blank"
                rel="noreferrer"
                className=" inline text-base   leading-7 text-gray-900 bg-yellow-400 rounded-xl px-2 py-1"
              >
                FARM App
              </a>
              <Link
                to={"/contact"}
                className="text-sm  leading-6 text-white bg-blue-600 rounded-xl px-3 py-1"
              >
                Shop
              </Link>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 font-semibold"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-9 w-9" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                rel="noreferrer"
                className="text-sm font-semibold leading-6 text-gray-600 border-b-2 border-white transition-all duration-150 hover:border-b-2 hover:border-green-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <Link
              to={"/contact"}
              className="text-sm font-semibold leading-6 text-white bg-blue-600 rounded-xl px-4 py-2"
            >
              Shop
            </Link>

            <a
              href="https://users.farm-sens.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900 bg-yellow-400 rounded-xl px-4 py-2"
            >
              FARM App
            </a>
          </div>
        </nav>
        {/* Mobile Size */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between border-b pb-8">
              <a
                href="/"
                className="-m-1.5 p-1.5 flex justify-center items-center gap-2"
              >
                <span className="sr-only">Your Company</span>
                <img className="h-14 w-auto" src={Logo} alt="Your Company" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-10 w-10" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 text-center w-full gap-5 flex justify-center">
                  <a
                    href="https://users.farm-sens.com/"
                    target="_blank"
                    rel="noreferrer"
                    className=" inline text-base font-semibold leading-7 text-gray-900 bg-yellow-400 rounded-xl px-4 py-2"
                  >
                    FARM App
                  </a>
                  <Link
                    to={"/contact"}
                    className="text-sm font-semibold leading-6 text-white bg-blue-600 rounded-xl px-4 py-2"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative isolate pt-14">
        <div className="mx-auto  px-6 py-24 sm:py-32 lg:flex lg:items-center justify-center lg:px-8 lg:py-40  background-hero">
          <div className="mx-auto flex flex-col justify-center items-center shadow-md backdrop-blur-md px-4 md:px-16 py-16 rounded-2xl border border-gray-400 bg-black/20 ">
            <img alt="logo" src={Logo} className="h-24 w-24 lg:w-32 lg:h-32" />
            <h1 className="mt-10 max-w-xl text-3xl  md:text-5xl font-bold tracking-normal text-white sm:text-6xl">
              Smart Agriculture
            </h1>
            <h3 className="mt-10 text-xl   md:text-2xl font-semibold  text-gray-400 underline underline-offset-8 hover:text-white transition-all duration-300 cursor-pointer">
              Solution for Sustainability
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
