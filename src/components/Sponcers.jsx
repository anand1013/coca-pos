import React from "react";
import image from "../assets/image.png";
function Sponcers() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 mx-auto space-y-12">
          <h1 className="max-w-2xl mb-4 text-5xl font-bold">
            Complementary features <br />
            for your business needs
          </h1>
          {/* Row */}
          <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={image}
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-lg flex  flex-col justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                  Dashboard to monitor your business sales from anywhere
                </h2>
                <p className="mb-8  lg:text-xl ">
                  Dashboard provides in-depth insight into the performance menu
                  items. You can see popular and unsold menus, helping you to
                  monitor your restaurant business sales.
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="text-white bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4"
                  aria-current="page"
                >
                  Launch Demo
                </a>
                <a
                  href="#"
                  className="text-black bg-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-black"
                  aria-current="page"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg flex  flex-col justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                  Dashboard to monitor your business sales from anywhere
                </h2>
                <p className="mb-8  lg:text-xl ">
                  Dashboard provides in-depth insight into the performance menu
                  items. You can see popular and unsold menus, helping you to
                  monitor your restaurant business sales.
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="text-white bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4"
                  aria-current="page"
                >
                  Launch Demo
                </a>
                <a
                  href="#"
                  className="text-black bg-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-black"
                  aria-current="page"
                >
                  More Info
                </a>
              </div>
            </div>
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={image}
              alt="feature image 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className=" gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={image}
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-lg flex  flex-col justify-between">
              <div>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
                  Dashboard to monitor your business sales from anywhere
                </h2>
                <p className="mb-8  lg:text-xl ">
                  Dashboard provides in-depth insight into the performance menu
                  items. You can see popular and unsold menus, helping you to
                  monitor your restaurant business sales.
                </p>
              </div>

              <div>
                <a
                  href="#"
                  className="text-white bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4"
                  aria-current="page"
                >
                  Launch Demo
                </a>
                <a
                  href="#"
                  className="text-black bg-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-black"
                  aria-current="page"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponcers;
