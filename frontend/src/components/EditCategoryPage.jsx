import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditCategoryPage() {
  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
  });

  useEffect(() => {
    fetch(`http://localhost:8086/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategory({ name: data.name });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:8086/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
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
          <h1 className="text-xl font-bold mb-4">Edit Category</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Category Name"
              className="w-full border p-2 mb-3 rounded"
            />

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 p-2 rounded">
              Update Category
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditCategoryPage;
