import React, { useState } from "react";

function CreateCategoryPage() {
  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8086/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      const data = await res.json();
      console.log("Created:", data);

      setCategory({ name: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full shadow-2xl bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
              Create Category
            </h1>

            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm font-medium">
                Category name
              </label>

              <input
                type="text"
                name="name"
                value={category.name}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                placeholder="Enter category name"
                required
              />

              <button
                type="submit"
                className="w-full mt-4 bg-green-500 hover:bg-green-700 text-black py-2 rounded"
              >
                Create Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateCategoryPage;
