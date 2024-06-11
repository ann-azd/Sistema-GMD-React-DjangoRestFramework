import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import headerHome from "assets/header-home.png";

function Header() {
  return (
    <main>
      <div className="relative px-6  ">
        <div className="mx-auto max-w-full xl:mx-12   sm:pt-6 lg:pt-26 xl:pt-28  pb-12   xl:pb-52 ">
          <div>
            <div className="">
              <h1 className="text-2xl font-semibold tracking-tight pt-16 text-left sm:text-3xl lg:text-6xl  ">
                Universidad de las Ciencias <br /> Informáticas. <span> </span>
                <div
                  className=""
                  style={{
                    color: "rgba(2, 47, 198, 0.94)",
                    fontWeight: "bold",
                  }}
                >
                  <Typewriter
                    words={[
                      " Somos innovación",
                      "Somos el futuro",
                      "Somos UCI",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={65}
                    deleteSpeed={45}
                    delaySpeed={1000}
                  />
                </div>
              </h1>
              {/* <ul className="flex gap-8 justify-center py-12">
                <li className="inline-flex border-b-2 border-transparent hover:border hover:border-b-teal-700 hover:border-b-2 transition duration-300 ease-in-out">
                  <Link className="font-medium leading-8  text-2xl text-gray-700">
                    Item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border hover:border-b-teal-700 hover:border-b-2 transition duration-300 ease-in-out">
                  <Link className="font-medium leading-8 text-2xl text-gray-700">
                    Item 1
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover:border hover:border-b-teal-700  hover:border-b-2 transition duration-300 ease-in-out">
                  <Link className="font-medium leading-8 text-2xl text-gray-700">
                    Item 1
                  </Link>
                </li>
              </ul> */}

              <div className="mt-20 flex gap-x-4 sm:justify-left ml-20">
                <a
                  target="blank"
                  href="https://www.uci.cu/"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Página UCI
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-33rem)] xl:top-[calc(100%-47rem)] md:top-[calc(100%-26rem)] sm:top-[calc(100%-26rem)]">
              <img
                src={headerHome}
                className="w-full h-full pt-2   object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Header;
