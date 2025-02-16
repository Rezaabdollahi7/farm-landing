import SensorsTableImg from "../../assets/images/sensorsTable.png";
import whatsappImg from "../../assets/icons/watsapp.png";
import productImage from "../../assets/images/productImg.webp";
import farmSecondLogo from "../../assets/images/farmSecondLogo.jpg";

export default function Contact2() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate pt-14">
          <div className="py-8  lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center flex justify-center items-center flex-col gap-4">
                <img
                  src={farmSecondLogo}
                  alt="farm-logo"
                  className="rounded-2xl w-[32rem]"
                />
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  FARM Products :
                </h1>
              </div>
              <div className="mt-8 flow-root sm:mt-16">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    alt="App screenshot"
                    src={SensorsTableImg}
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Buy FARM
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="mt-12 space-y-6">
                <p className="text-xl text-gray-500">
                  To order and buy, select the product number and send us a
                  message in WhatsApp.
                </p>
              </div>

              <div className="mt-16 flex items-center justify-center lg:justify-start">
                <a
                  href="https://wa.me/989050012737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primaryDark flex justify-center items-center px-10 py-2.5 gap-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <img
                    src={whatsappImg}
                    alt="WhatsApp icon"
                    className="h-12 w-12"
                  />
                  <span>Contact Us</span>
                </a>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                alt="farm package img"
                src={productImage}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
