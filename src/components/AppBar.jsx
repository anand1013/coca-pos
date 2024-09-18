import React from "react";
import logo from "../assets/logo.svg";
function AppBar() {
  return (
    // <div>
    //   <div className="flex flex-row">
    //     <div className="basis-1/4">
    //       <svg className="fill-blue-500 ..."></svg>
    //     </div>
    //     <div className="basis-1/2">
    //       <div>
    //         <button className="bg-stone-950 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //           Home
    //         </button>
    //         <button className="bg-stone-950 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //           Features
    //         </button>
    //         <button className="bg-stone-950 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //           Pricing
    //         </button>
    //         <button className="bg-stone-950 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //           Blog
    //         </button>
    //         <button className="bg-stone-950 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //           Resource
    //         </button>
    //       </div>
    //     </div>
    //     <div className="basis-1/4">
    //       <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-3xl ms-1 me-1">
    //         Sign in
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <section className=" w-full">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <svg
              className="h-6 mr-3 sm:h-9"
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.7078 10.8728C34.0466 9.32819 33.1716 7.88874 32.1094 6.59863C30.5392 4.63456 28.5798 3.03248 26.3599 1.89786C24.14 0.763243 21.7101 0.121789 19.2301 0.015718C16.7501 -0.0903526 14.2763 0.341363 11.9713 1.28247C9.66644 2.22357 7.58274 3.65271 5.8574 5.47584C4.13205 7.29895 2.80417 9.47472 1.96117 11.8599C1.11816 14.2451 0.77913 16.7857 0.966401 19.3144C1.15368 21.8431 1.863 24.3026 3.04769 26.531C4.23238 28.7596 5.86557 30.7064 7.83978 32.2435C9.10653 33.2495 10.5063 34.0673 11.9973 34.6726C14.0878 35.5479 16.3252 35.9987 18.5844 36C23.2478 35.9895 27.7169 34.0903 31.0122 30.7188C34.3073 27.3472 36.1596 22.7785 36.163 18.0141C36.1663 15.5564 35.6709 13.1248 34.7078 10.8728ZM18.5714 3.66511C20.6003 3.6649 22.6046 4.11793 24.4439 4.99249C23.9954 5.19049 23.5238 5.32879 23.0407 5.40399C21.4513 5.63905 19.9789 6.39298 18.8432 7.55323C17.7075 8.71348 16.9696 10.2178 16.7395 11.8418C16.6385 12.7525 16.233 13.5997 15.5916 14.2406C14.9502 14.8815 14.1121 15.2765 13.2186 15.3593C11.6291 15.5944 10.1566 16.3483 9.021 17.5086C7.88536 18.6689 7.14741 20.1732 6.91733 21.7971C6.83942 22.6631 6.47778 23.4769 5.89093 24.1067C4.87838 21.9209 4.42352 19.5088 4.56867 17.0951C4.71382 14.6814 5.45426 12.3444 6.7211 10.3016C7.98793 8.25889 9.73999 6.57674 11.8142 5.41174C13.8885 4.24674 16.2175 3.63677 18.5844 3.63856L18.5714 3.66511ZM7.82679 27.3057C7.98269 27.1597 8.1386 27.0269 8.29451 26.8677C9.45037 25.7228 10.1923 24.2114 10.3993 22.5802C10.4832 21.6633 10.8839 20.8069 11.5296 20.1644C12.151 19.5036 12.9873 19.0976 13.8812 19.0229C15.4707 18.7878 16.9431 18.0338 18.0787 16.8736C19.2144 15.7133 19.9523 14.209 20.1824 12.5851C20.2387 11.6261 20.6415 10.7225 21.3128 10.0498C21.9495 9.40184 22.7938 9.0106 23.6904 8.94807C25.1506 8.74281 26.5124 8.07959 27.5881 7.04993C28.8128 8.08803 29.8504 9.33686 30.6542 10.74C30.6049 10.8081 30.5482 10.8705 30.4853 10.9259C29.8652 11.5925 29.0299 12.0074 28.1337 12.094C26.5426 12.3249 25.0679 13.0775 23.9315 14.2385C22.7952 15.3995 22.0585 16.9061 21.8325 18.5317C21.7409 19.4455 21.3429 20.2989 20.706 20.9472C20.069 21.5956 19.2323 21.999 18.3375 22.0891C16.7434 22.3223 15.2655 23.0748 14.1232 24.2345C12.9811 25.3944 12.2354 26.8996 11.9973 28.5269C11.9274 29.1756 11.7093 29.7985 11.3607 30.3454C10.0277 29.5367 8.83381 28.5099 7.82679 27.3057ZM18.5714 32.4294C17.2531 32.4308 15.941 32.2431 14.6737 31.8719C15.1073 31.0462 15.3891 30.1464 15.5052 29.2171C15.5963 28.3053 15.9924 27.4536 16.6267 26.8055C17.261 26.1575 18.0947 25.7528 18.9872 25.6597C20.579 25.4273 22.0544 24.6746 23.1926 23.514C24.3308 22.3536 25.0707 20.8477 25.3014 19.222C25.3925 18.3102 25.7886 17.4584 26.4229 16.8104C27.0572 16.1624 27.8909 15.7577 28.7833 15.6646C29.9812 15.5054 31.123 15.0498 32.1094 14.3372C32.6571 16.4582 32.722 18.6792 32.2991 20.8298C31.8762 22.9804 30.9766 25.0036 29.6695 26.7439C28.3625 28.4841 26.6827 29.8955 24.7588 30.8696C22.8351 31.8436 20.7185 32.3545 18.5714 32.363V32.4294Z"
                fill="#FF5C00"
              />
            </svg>
            <h1 className="font-bold self-center text-4xl whitespace-nowrap">
              Coca
            </h1>
          </a>
          <div className="flex items-center lg:order-2">
            {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
            <a
              href="#"
              className="text-orange-500 bg-white font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-orange-500"
              aria-current="page"
            >
              Sign in
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-white bg-black font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-black font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  aria-current="page"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-black font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  aria-current="page"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-black font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  aria-current="page"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-black font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  aria-current="page"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default AppBar;
