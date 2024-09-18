import React from "react";
import Frame from "../assets/Frame.png"; // Adjust the path as needed
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Icon from "../assets/icon.png";
import star from "../assets/star.png";

function TitileContent() {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl pb-8 mx-auto lg:gap-8 xl:gap-4 grid-cols-12">
        <div
          className="mr-auto place-self-center lg:col-span-7  rounded-3xl"
          style={{
            background: "linear-gradient(358deg, #000000, #000000f2)",
          }}
        >
          <div className="h-72 ml-10 mt-20  flex flex-col">
            <h5 className="mt-18 text-slate-500 text-lg font-normal">
              All the features you need in one App for any kind of <br /> your
              business 🚀
            </h5>
            <h1 className="mt-6 text-white max-w-2xl mb-4 text-5xl font-semibold leading-none tracking-tight">
              Manage your restaurant <br />
              business so advanced
            </h1>
            <button
              type="button"
              className="w-1/2 mt-6 text-white  bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center justify-center"
              aria-current="page"
            >
              Get Started for Free
              <span className="ml-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                {/* Use an SVG or Font Awesome icon here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
          <img className="mb-6" src={Frame} alt="hero image" />
        </div>

        <div className="mr-auto place-self-center lg:col-span-5">
          <div>
            {/* <div className="flex items-center space-x-3">
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

              <h3 className="text-xl font-bold">Sales Statistics</h3>
            </div> */}

            <section className="bg-gray-50 mb-8">
              <div
                className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-3xl"
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

            <div className="flex flex-row space-x-4 ">
              <div className="basis-1/2  rounded-3xl">
                <section className="bg-gray-50 mb-8">
                  <div
                    className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl"
                    style={{ background: "#F2ECFF" }}
                  >
                    <button
                      type="button"
                      className="mt-0 text-slate-950  bg-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center justify-center"
                      aria-current="page"
                    >
                      <span className="mr-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        {/* Use an SVG or Font Awesome icon here */}
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" rx="16" fill="#19191C" />
                          <path
                            d="M22.1666 20.3135L21.0666 20.5735C20.82 20.6335 20.6266 20.8202 20.5733 21.0668L20.34 22.0468C20.2133 22.5802 19.5333 22.7468 19.18 22.3268L17.1866 20.0335C17.0266 19.8468 17.1133 19.5535 17.3533 19.4935C18.5333 19.2068 19.5933 18.5468 20.3733 17.6068C20.5 17.4535 20.7266 17.4335 20.8666 17.5735L22.3466 19.0535C22.8533 19.5602 22.6733 20.1935 22.1666 20.3135Z"
                            fill="white"
                          />
                          <path
                            d="M9.79999 20.3135L10.9 20.5735C11.1467 20.6335 11.34 20.8202 11.3933 21.0668L11.6267 22.0468C11.7533 22.5802 12.4333 22.7468 12.7867 22.3268L14.78 20.0335C14.94 19.8468 14.8533 19.5535 14.6133 19.4935C13.4333 19.2068 12.3733 18.5468 11.5933 17.6068C11.4667 17.4535 11.24 17.4335 11.1 17.5735L9.61999 19.0535C9.11332 19.5602 9.29332 20.1935 9.79999 20.3135Z"
                            fill="white"
                          />
                          <path
                            d="M16 9.33325C13.42 9.33325 11.3333 11.4199 11.3333 13.9999C11.3333 14.9666 11.62 15.8533 12.1133 16.5933C12.8333 17.6599 13.9733 18.4133 15.3 18.6066C15.5266 18.6466 15.76 18.6666 16 18.6666C16.24 18.6666 16.4733 18.6466 16.7 18.6066C18.0266 18.4133 19.1666 17.6599 19.8866 16.5933C20.38 15.8533 20.6666 14.9666 20.6666 13.9999C20.6666 11.4199 18.58 9.33325 16 9.33325ZM18.04 13.8533L17.4866 14.4066C17.3933 14.4999 17.34 14.6799 17.3733 14.8133L17.5333 15.4999C17.66 16.0399 17.3733 16.2533 16.8933 15.9666L16.2266 15.5733C16.1066 15.4999 15.9066 15.4999 15.7866 15.5733L15.12 15.9666C14.64 16.2466 14.3533 16.0399 14.48 15.4999L14.64 14.8133C14.6666 14.6866 14.62 14.4999 14.5266 14.4066L13.96 13.8533C13.6333 13.5266 13.74 13.1999 14.1933 13.1266L14.9066 13.0066C15.0266 12.9866 15.1666 12.8799 15.22 12.7733L15.6133 11.9866C15.8266 11.5599 16.1733 11.5599 16.3866 11.9866L16.78 12.7733C16.8333 12.8799 16.9733 12.9866 17.1 13.0066L17.8133 13.1266C18.26 13.1999 18.3666 13.5266 18.04 13.8533Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Rating Review
                    </button>
                    <figure className="max-w-screen-md mx-auto ">
                      <blockquote className="mb-7 mt-6">
                        <p className="text-base text-slate-500 text-left">
                          Reviews of some of our app restaurant industry
                          companies.
                        </p>
                      </blockquote>
                      <figcaption className="flex r mt-6 space-x-3 text-left">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={star}
                          alt="profile picture"
                        />
                        <div className="">
                          <div className="pr-3 font-bold text-6xl text-gray-900">
                            4.9
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
                    className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl"
                    style={{ background: "#0000008F" }}
                  >
                    <button
                      type="button"
                      className="mt-0 text-white  bg-slate-900 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center justify-center"
                      aria-current="page"
                    >
                      <span className="mr-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        {/* Use an SVG or Font Awesome icon here */}
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="32" height="32" rx="16" fill="white" />
                          <path
                            d="M14 22.6666C16.5773 22.6666 18.6666 20.5772 18.6666 17.9999C18.6666 15.4226 16.5773 13.3333 14 13.3333C11.4227 13.3333 9.33331 15.4226 9.33331 17.9999C9.33331 20.5772 11.4227 22.6666 14 22.6666Z"
                            fill="black"
                          />
                          <path
                            d="M22.6667 13.9999C22.6667 15.8266 21.62 17.4066 20.0934 18.1666C19.8867 18.2733 19.6534 18.1066 19.6334 17.8799C19.4067 14.9133 17.0667 12.5933 14.12 12.3666C13.8867 12.3466 13.7267 12.1133 13.8334 11.9066C14.5934 10.3799 16.1734 9.33325 18 9.33325C20.58 9.33325 22.6667 11.4199 22.6667 13.9999Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      Rating Review
                    </button>
                    <figure className="max-w-screen-md mx-auto ">
                      <blockquote className="mb-7 mt-6">
                        <p className="text-base text-white text-left">
                          Reviews of some of our app restaurant industry
                          companies.
                        </p>
                      </blockquote>
                      <figcaption className="flex r mt-6 space-x-3 text-left">
                        <div className="">
                          <div className="pr-3 font-bold text-6xl text-white">
                            50
                            <span className="font-semibold text-xl text-white">
                              {" "}
                              Thousand
                            </span>
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
                className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl"
                style={{ background: "#FFF5EE" }}
              >
                <figure className="max-w-screen-md mx-auto">
                  <blockquote>
                    <p className="text-base text-red-500 text-xl font-medium text-gray-900 text-left">
                      “Deliver a better customer experience and increase their
                      operational efficiency.”
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
                        CEO at Burger King
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

    // <section className="bg-white">
    //   <div className="grid  px-4 pt-5 pb-8 lg:gap-8 xl:gap-0 grid-cols-12">
    //     <div
    //       className="hidden lg:mt-0 lg:col-span-7 lg:flex mr-5 rounded-3xl"
    //       style={{
    //         background: "linear-gradient(358deg, #000000, #000000f2)",
    //         position: "relative",
    //       }}
    //     >
    //       <div className="h-72 ml-10 mt-20  flex flex-col">
    //         <h5 className="mt-18 text-slate-500 text-lg font-normal">
    //           All the features you need in one App for any kind of <br /> your
    //           business 🚀
    //         </h5>
    //         <h1 className="mt-6 text-white max-w-2xl mb-4 text-5xl font-semibold leading-none tracking-tight">
    //           Manage your restaurant <br />
    //           business so advanced
    //         </h1>
    //         <button
    //           type="button"
    //           className="w-1/2 mt-6 text-white  bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center justify-center"
    //           aria-current="page"
    //         >
    //           Get Started for Free
    //           <span className="ml-4 w-6 h-6 bg-white rounded-full flex items-center justify-center">
    //             {/* Use an SVG or Font Awesome icon here */}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               className="w-4 h-4 text-orange-500"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M5 12h14M12 5l7 7-7 7"
    //               />
    //             </svg>
    //           </span>
    //         </button>
    //       </div>

    //       {/* <img
    //         src={Frame} // Replace with the actual image URL
    //         alt="Bottom Image"
    //         className="absolute bottom-6"
    //       />
    //       <img
    //         src={Group3} // Replace with the actual image URL
    //         alt="Bottom Image"
    //         className="absolute bottom-12 h-56 left-0"
    //       />
    //       <img
    //         src={Group2} // Replace with the actual image URL
    //         alt="Bottom Image"
    //         className="absolute bottom-6 h-96 right-0"
    //       /> */}
    //     </div>
  );
}

export default TitileContent;
