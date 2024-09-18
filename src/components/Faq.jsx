import React from "react";

function Faq() {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          {" "}
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium space-y-4 lg:space-y-6 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="text-orange-500 bg-white border border-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                  aria-current="page"
                >
                  General
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-500 bg-white border border-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                  aria-current="page"
                >
                  Transactions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-500 bg-white border border-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                  aria-current="page"
                >
                  Payment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-500 bg-white border border-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                  aria-current="page"
                >
                  Others
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-500 bg-white border border-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5"
                  aria-current="page"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick="toggleFAQ(this)"
              >
                <span className="flex-1 text-base-content">
                  How secure is my insurance information?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center transition duration-200 ease-out false"
                  />
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  />
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    We prioritize the security of your insurance information. We
                    use advanced encryption and strict data protection measures
                    to ensure your data is safe and confidential.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick="toggleFAQ(this)"
              >
                <span className="flex-1 text-base-content">
                  How can I customize my insurance coverage?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center transition duration-200 ease-out false"
                  />
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  />
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Our insurance plans are customizable. You can tailor your
                    coverage to meet your specific needs and budget.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick="toggleFAQ(this)"
              >
                <span className="flex-1 text-base-content">
                  Is there a waiting period for insurance claims?
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center transition duration-200 ease-out false"
                  />
                  <rect
                    y={7}
                    width={16}
                    height={2}
                    rx={1}
                    className="transform origin-center rotate-90 transition duration-200 ease-out false"
                  />
                </svg>
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ transition: "max-height 0.3s ease-in-out 0s" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    There may be a waiting period for certain insurance claims,
                    depending on the policy terms and conditions. Please refer
                    to your policy documents for details.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faq;
