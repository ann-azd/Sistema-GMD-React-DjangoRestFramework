import { connect } from "react-redux";
import logoM from "assets/logoB2.png";
import logoL from "assets/loading.gif";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    name: "Página de inicio",
    description: "Measure actions your users take",
    href: "/",
    icon: IconTwo,
  },
  {
    name: "Materiales",
    description: "Measure actions your users take",
    href: "/materiales",
    icon: IconTwo,
  },
  {
    name: "Noticias",
    description: "Create your own targeted content",
    href: "/noticias",
    icon: IconThree,
  },
  {
    name: "¿Quiénes somos?",
    description: "Keep track of your growth",
    href: "/somos",
    icon: IconCuatro,
  },
  {
    name: "Contáctanos",
    description: "Keep track of your growth",
    href: "/contacto",
    icon: IconCinco,
  },
  {
    name: "Admin",
    description: "Keep track of your growth",
    href: "/admin",
    icon: IconSeis,
  },
];

function NavBar() {
  const [louding, setLouding] = useState(true);
  const [open, setOpen] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.getElementById("navBB")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navBB").classList.remove("shadow-2xl");
        document.getElementById("navBB").classList.add("shadow-md");
      } else {
        document.getElementById("navBB").classList.add("shadow-2xl");
        document.getElementById("navBB").classList.remove("shadow-md");
      }
    }
  }

  return (
    <nav
      id="navBB"
      className="w-full py-4  fixed top-0 z-40 transition duration-300 ease-in-out shadow-2xl bg-white "
    >
      <div className=" px-4 sm:px-6  ">
        <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-13   px-2">
          <Link to="/" className="ml-4 mt-1">
            <img
              src={logoM}
              alt=""
              width={280}
              height={60}
              className=" min-w-2"
            />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to="/materiales"
              className=" inline-flex mx-4 font-medium text-2xl  leading-6 text-gray-900  border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Materiales
            </NavLink>
            <NavLink
              to="/noticias"
              className=" inline-flex mx-4 font-medium text-2xl leading-6 text-gray-900  border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Noticias
            </NavLink>
            <NavLink
              to="/somos"
              className=" inline-flex mx-4 font-medium text-2xl leading-6 text-gray-900   border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              ¿Quiénes somos?
            </NavLink>
            <NavLink
              to="/contacto"
              className="inline-flex mx-4 font-medium text-2xl leading-6 text-gray-900   border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Contáctanos
            </NavLink>
            {/* <NavLink
              to="/admin"
              className=" inline-flex mx-4 font-medium text-2xl leading-6 text-gray-900   border-b-2 border-white hover:border-teal-700 transition duration-300 ease-in-out"
            >
              Admin
            </NavLink> */}
          </div>
        </div>
        <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-13   px-2">
          <Link to="/" className="ml-4 mt-1">
            <img
              src={logoM}
              alt=""
              width={280}
              height={60}
              className="bg-black mt-0 min-w-2"
            />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : ""} focus:ring-none focus:outline-none
                `}
                  >
                    {open ? (
                      <svg
                        // onClick={() => setOpen(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        // onClick={() => setOpen(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9 focus:text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-28 z-10 mt-6 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                            >
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                <item.icon aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* <div className="bg-gray-50 p-4">
                          <a
                            href="##"
                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                          >
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-gray-900">
                                Documentation
                              </span>
                            </span>
                            <span className="block text-sm text-gray-500">
                              Start integrating products and tools
                            </span>
                          </a>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* <button>
              {open ? (
                <svg
                  onClick={() => setOpen(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setOpen(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 focus:text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps, {})(NavBar);

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

function IconCuatro() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
function IconCinco() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
function IconSeis() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

export default NavBar;