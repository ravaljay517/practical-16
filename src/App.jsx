
import React, { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...product,
    };

    setProducts([...products, newProduct]);

    setProduct({
      name: "",
      price: "",
      category: "",
      quantity: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Product Management
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Add and manage your products
        </p>

        {/* Product Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold mb-5">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  min="0.01"
                  step="0.01"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Books">Books</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  min="0"
                  step="1"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              + Add Product
            </button>
          </form>
        </div>

        {/* Product List */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-5">
            Product List ({products.length})
          </h2>

          {products.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No products added yet. Add your first product above.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Quantity</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">
                        ₹{Number(item.price).toFixed(2)}
                      </td>
                      <td className="p-3">{item.category}</td>
                      <td className="p-3">{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
