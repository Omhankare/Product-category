import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    productName: "",
    category_id: "",
    category_name: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8086/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          productName: data.productName,
          category_id: data.category_id,
          category_name: data.category_name,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8086/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      console.log("Updated:", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-lg">
          <h1 className="text-xl font-bold mb-4">Edit Product</h1>

          <form onSubmit={handleSubmit}>
            {/* Product Name */}
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full border p-2 mb-3 rounded"
            />

            {/* Category ID */}
            <input
              type="number"
              name="category_id"
              value={product.category_id}
              onChange={handleChange}
              placeholder="Category ID"
              className="w-full border p-2 mb-3 rounded"
            />

            {/* Category Name */}
            <input
              type="text"
              name="category_name"
              value={product.category_name}
              onChange={handleChange}
              placeholder="Category Name"
              className="w-full border p-2 mb-3 rounded"
            />

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 p-2 rounded">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditProductPage;
