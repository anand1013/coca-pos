import React from "react";
import Frame from "../assets/Frame.png"; // Adjust the path as needed
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Icon from "../assets/icon.png";

function TitileContent() {
  return (
    <section className="bg-white">
      <div className="grid  px-4 pt-5 pb-8 lg:gap-8 xl:gap-0 grid-cols-12">
        <div
          className="hidden lg:mt-0 lg:col-span-7 lg:flex mr-5 rounded-3xl"
          style={{
            background: "linear-gradient(358deg, #000000, #000000f2)",
            position: "relative",
          }}
        >
          <div className="ml-10 mt-20  flex flex-col">
            <h5 className="mt-18 text-slate-500 text-lg font-normal">
              All the features you need in one App for any kind of <br /> your
              business 🚀
            </h5>
            <h1 className="mt-6 text-white max-w-2xl mb-4 text-5xl font-semibold leading-none tracking-tight">
              Manage your restaurant <br />
              business so advanced
            </h1>
            <a
              href="#"
              className="w-1/2 mt-6 text-white text-lg bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center"
              aria-current="page"
            >
              Get Started for Free
            </a>
          </div>

          <img
            src={Frame} // Replace with the actual image URL
            alt="Bottom Image"
            className="absolute bottom-6"
          />
          <img
            src={Group3} // Replace with the actual image URL
            alt="Bottom Image"
            className="absolute bottom-12 h-56 left-0"
          />
          <img
            src={Group2} // Replace with the actual image URL
            alt="Bottom Image"
            className="absolute bottom-6 h-96 right-0"
          />
        </div>

        <div className="mr-auto place-self-center lg:col-span-5">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="16" fill="#19191C" />
              <path
                d="M22 23.1667H10C9.72667 23.1667 9.5 22.9401 9.5 22.6667C9.5 22.3934 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3934 22.5 22.6667C22.5 22.9401 22.2733 23.1667 22 23.1667Z"
                fill="white"
              />
              <path
                d="M11.7333 13.5867H10.6667C10.3 13.5867 10 13.8867 10 14.2533V20C10 20.3667 10.3 20.6667 10.6667 20.6667H11.7333C12.1 20.6667 12.4 20.3667 12.4 20V14.2533C12.4 13.88 12.1 13.5867 11.7333 13.5867Z"
                fill="white"
              />
              <path
                d="M16.5333 11.46H15.4667C15.1 11.46 14.8 11.76 14.8 12.1266V20C14.8 20.3666 15.1 20.6666 15.4667 20.6666H16.5333C16.9 20.6666 17.2 20.3666 17.2 20V12.1266C17.2 11.76 16.9 11.46 16.5333 11.46Z"
                fill="white"
              />
              <path
                d="M21.3334 9.33325H20.2667C19.9 9.33325 19.6 9.63325 19.6 9.99992V19.9999C19.6 20.3666 19.9 20.6666 20.2667 20.6666H21.3334C21.7 20.6666 22 20.3666 22 19.9999V9.99992C22 9.63325 21.7 9.33325 21.3334 9.33325Z"
                fill="white"
              />
            </svg>

            <h3 className="mb-2 text-xl font-bold">Sales Statistics</h3>

            <section className="bg-gray-50 mb-8">
              <div
                className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded"
                style={{ background: "#F1FAEB" }}
              >
                <figure className="max-w-screen-md mx-auto">
                  <blockquote>
                    <p className="text-base font-medium text-gray-900 text-left">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption className="flex r mt-6 space-x-3 text-left">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className=" ">
                      <div className="pr-3 font-bold text-gray-900">
                        Micheal Gough
                      </div>
                      <div className="pl-3 text-sm font-medium text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>

            <p className="font-light text-gray-500">
              Automate ordering, payment and stock management.
            </p>

            <div className="flex flex-row space-x-4 ">
              <div className="basis-1/2  rounded-3xl">
                <section className="bg-gray-50 mb-8 ">
                  <div
                    className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded"
                    style={{ background: "#F1FAEB" }}
                  >
                    <blockquote>
                      <p className="text-base font-medium text-gray-900 text-left">
                        Reviews of some of our app restaurant industry
                        companies.
                      </p>
                    </blockquote>

                    <figure className="max-w-screen-md mx-auto">
                      <figcaption className="flex r mt-6 space-x-3 text-left">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile picture"
                        />
                        <div className="">
                          <div className="pr-3 font-bold text-gray-900">
                            Michael Gough
                          </div>
                          <div className="pl-3 text-sm font-medium text-gray-400">
                            CEO at Google
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
              <div className="basis-1/2  rounded-3xl">
                <section className="bg-gray-50 mb-8">
                  <div
                    className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded"
                    style={{ background: "#F1FAEB" }}
                  >
                    <figure className="max-w-screen-md mx-auto">
                      <blockquote>
                        <p className="text-base font-medium text-gray-900 text-left">
                          Reviews of some of our app restaurant industry
                          companies.
                        </p>
                      </blockquote>
                      <figcaption className="flex r mt-6 space-x-3 text-left">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile picture"
                        />
                        <div className="">
                          <div className="pr-3 font-bold text-gray-900">
                            Michael Gough
                          </div>
                          <div className="pl-3 text-sm font-medium text-gray-400">
                            CEO at Google
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            </div>

            <section className="bg-gray-50 mb-8">
              <div
                className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded"
                style={{ background: "#F1FAEB" }}
              >
                <figure className="max-w-screen-md mx-auto">
                  <blockquote>
                    <p className="text-base font-medium text-gray-900 text-left">
                      "Landwind is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </blockquote>
                  <figcaption className="flex r mt-6 space-x-3 text-left">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                      alt="profile picture"
                    />
                    <div className=" ">
                      <div className="pr-3 font-bold text-gray-900">
                        Micheal Gough
                      </div>
                      <div className="pl-3 text-sm font-medium text-gray-400">
                        CEO at Google
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitileContent;
