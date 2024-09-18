import React from "react";
import Frame from "../assets/Frame.png"; // Adjust the path as needed
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Icon from "../assets/icon.png";
import Scene2 from "../assets/Scene2.png";

function Footer() {
  return (
    <section className=" w-full">
      <div
        className="items-center h-72 ml-10 mt-20 mb-20 flex flex-col rounded-3xl"
        style={{
          background: "linear-gradient(358deg, #000000, #000000f2)",
          position: "relative",
        }}
      >
        <h1 className="text-center mt-6 text-white max-w-2xl mb-4 text-5xl font-semibold">
          Gain Excellence with the Best <br></br> POS Solutions
        </h1>
        <h5 className="text-center mt-18 text-slate-500 text-lg font-normal">
          Provide an unforgettable customer experience with fast ordering,{" "}
          <br />
          convenient payments, and better service
        </h5>
        <button
          type="button"
          className="w-1/4 mt-6 text-white  bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4 flex items-center justify-center"
          aria-current="page"
        >
          Try for free
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
        <img
            src={Scene2} // Replace with the actual image URL
            alt="Bottom Image"
            className="absolute bottom-6"
          />
        <div>
       
        </div>
      </div>
    </section>
  );
}

export default Footer;
