import { useState } from "react";

function CreateProductPage() {
  const [product, setProduct] = useState({
    productName: "",
    category_id: "",
    category_name: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8086/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      console.log("Created:", data);

      setProduct({
        productName: "",
        category_id: "",
        category_name: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-lg">
          <h1 className="text-xl font-bold mb-4">Create Product</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="number"
              name="category_id"
              value={product.category_id}
              onChange={handleChange}
              placeholder="Category ID"
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              name="category_name"
              value={product.category_name}
              onChange={handleChange}
              placeholder="Category Name"
              className="w-full border p-2 mb-3 rounded"
            />

            <button className="w-full bg-green-500 hover:bg-green-700 p-2 rounded">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateProductPage;
