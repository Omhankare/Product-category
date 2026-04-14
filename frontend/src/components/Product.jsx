import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8086/products?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8086/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((p) => p.product_id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product List</h2>
      <div className="card shadow">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered border-black table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>product_id</th>
                  <th>product_name</th>
                  <th>category_id</th>
                  <th>category_name</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr key={p.product_id}>
                    <td>{p.product_id}</td>
                    <td>{p.product_name}</td>
                    <td>{p.category_id}</td>
                    <td>{p.category_name}</td>
                    <td>
                      <Link
                        to={`/edit-product/${p.product_id}`}
                        className="btn btn-warning btn-sm me-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p.product_id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="btn btn-secondary"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>

              <span className="align-self-center">Page {page}</span>

              <button
                className="btn btn-primary"
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
