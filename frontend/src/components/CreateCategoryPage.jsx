import React from "react";

function CreateCategoryPage() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full shadow-2xl bg-white rounded-lg   md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Create Category
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Category name
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black  "
                    placeholder="categoryName"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-green-500  hover:bg-green-700    font-medium rounded-lg text-sm cursor-pointer px-5 py-2.5 text-center  "
                >
                  Create Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateCategoryPage;
