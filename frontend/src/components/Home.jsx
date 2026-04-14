import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Product & Category Manager
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-8">
        This application helps you manage Products and Categories with full CRUD
        operations. You can create, read, update, and delete products and assign
        them to categories easily.
      </p>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Create new products and categories</li>
          <li>View all products with categories</li>
          <li>Edit product and category details</li>
          <li>Delete unwanted data</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Link
          to="/products"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          View Products
        </Link>

        <Link
          to="/categories"
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
        >
          View Categories
        </Link>

        <Link
          to="/create-product"
          className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600"
        >
          Add Product
        </Link>
        <Link
          to="/create-product"
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Add Categories
        </Link>
      </div>
    </div>
  );
}

export default Home;
