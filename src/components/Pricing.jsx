import React from "react";

function Pricing() {
  return (
    <section>
      <div className="container p-6 overflow-x-auto max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 text-center">
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <div
                  className=" box-content m-auto h-8 w-34 p-4 rounded-xl m4"
                  style={{ background: "#E0F2D4" }}
                >
                  <h2 className="text-xl">Basic</h2>
                </div>
              </th>
              <th scope="col">
                <div
                  className=" box-content m-auto h-8 w-34 p-4 rounded-xl
                 m4"
                  style={{ background: "#E0F2D4" }}
                >
                  <h2 className="text-xl">Business</h2>
                </div>
              </th>
              <th scope="col">
                <div
                  className=" box-content m-auto h-8 w-34 p-4 rounded-xl
                 m4"
                  style={{ background: "#E0F2D4" }}
                >
                  <h2 className="text-xl">Enterprise</h2>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
            <tr>
              <th scope="row" className="text-left h-20">
                <h3 className="py-3">Price</h3>
              </th>
              <td>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">
                    $20
                  </span>
                  <span className="font-medium dark:text-gray-600">/month</span>
                </p>
              </td>
              <td>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">
                    $20
                  </span>
                  <span className="font-medium dark:text-gray-600">/month</span>
                </p>
              </td>
              <td>
                <p className="mb-3">
                  <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">
                    $20
                  </span>
                  <span className="font-medium dark:text-gray-600">/month</span>
                </p>
              </td>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Unlimited Transactions</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Unlimited Transactions</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Multi Outlet</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Report Featured</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Inventory Management</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Direct report & teamreview</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Emplovee Management System</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">CRM And Promotion Features</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Third Party Application Integration</h3>
              </th>
              <td>
                <div>
                  <svg
                    style={{ display: "unset" }}
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.8333"
                      cy="12.0078"
                      r="9"
                      fill="#38715B"
                      stroke="#38715B"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.83334 11.8078L11.8333 14.5078L16.8333 9.50781"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="w-5 h-5 mx-auto dark:text-violet-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Pricing;
