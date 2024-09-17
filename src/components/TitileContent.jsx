import React from "react";
import backgroundImage from "../assets/bg1.jpg"; // Adjust the path as needed

function TitileContent() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/2">
          {/* <div
            className=" bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="ml-300">
              <h6 className="text-xl font-normal text-white">
                All the features you need in one App for any kind of your
                business 🚀
              </h6>
              <h1 className="text-xl font-normal text-white">
                Manage your restaurant business so advanced
              </h1>
            </div>
          </div> */}

          <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="ml-300">
              <h6 className="text-xl font-normal text-white">
                All the features you need in one App for any kind of your
                business 🚀
              </h6>
              <h1 className="text-xl font-normal text-white">
                Manage your restaurant business so advanced
              </h1>
            </div>
          </div>
        </div>
        <div className="basis-1/2">Graph</div>
      </div>
    </div>
  );
}

export default TitileContent;
