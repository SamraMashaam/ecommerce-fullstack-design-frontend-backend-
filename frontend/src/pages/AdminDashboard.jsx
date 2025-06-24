import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      alert("Access denied: Admins only");
      navigate('/');
    }
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert("Logged out successfully!");
    navigate('/adminlogin'); // or wherever your admin login page is
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: token },
      });
      fetchProducts(); // refresh list
    } catch (err) {
      alert('Delete failed: ' + (err.response?.data?.msg || 'Server error'));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Admin Product Management</h2>
      <button
        onClick={() => navigate('/admin/add')}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Product
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 float-right"
        >
        Logout
        </button>


      <table className="w-full bg-white border rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td className="p-2 border"><img src={p.image} className="w-20" /></td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.price}</td>
              <td className="p-2 border">
                <button
                  className="text-red-600 mr-2"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
                {/* For edit later */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
