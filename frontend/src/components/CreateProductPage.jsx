import React from "react";

function CreateProductPage() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow-2xl bg-white rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Create product
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Product name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black  "
                    placeholder="productName"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category_id"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    category_id
                  </label>
                  <input
                    type="number"
                    name="category_id"
                    id="category_id"
                    placeholder="category_id"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black  "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="category_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    category_name
                  </label>
                  <input
                    type="text"
                    name="category_name"
                    id="category_name"
                    placeholder="category_name"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black  "
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-green-500  hover:bg-green-700    font-medium rounded-lg text-sm cursor-pointer px-5 py-2.5 text-center  "
                >
                  Create Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateProductPage;
