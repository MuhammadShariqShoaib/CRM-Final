import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import EnterData from "./EnterData";

export default function Data() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    field: "",
    gender: "",
    phone: "",
    email: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleEdit = (item) => {
    setEditId(item._id);
    setEditData(item);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:5000/api/deleteUser/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      alert("There was an error deleting the user!", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/updateUser/${id}`, editData);
      setData(data.map((item) => (item._id === id ? editData : item)));
      setEditId(null); // Close the edit form
      alert("User updated successfully");
    } catch (error) {
      alert("There was an error updating the user!", error);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Layout>
        <div className="mx-4  my-8">
          <h2 className="text-xl font-extrabold text-gray-800 tracking-wide mb-6">
            Employees Data
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left font-medium text-gray-700">
                    Name
                  </th>
                  <th className="p-2 text-left font-medium text-gray-700">
                    Field
                  </th>
                  <th className="p-2 text-left font-medium text-gray-700">
                    Gender
                  </th>
                  <th className="p-2 text-left font-medium text-gray-700">
                    Phone Number
                  </th>
                  <th className="p-2  text-left font-medium text-gray-700">
                    Email
                  </th>
                  <th className="p-2  text-left font-medium text-gray-700">
                    Status
                  </th>
                  <th className="p-2  text-left font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white hover:bg-gray-100 transition duration-200 border-b border-gray-200"
                    >
                      <td className="p-2 ">
                        {index + 1}. {item.name}
                      </td>
                      <td className="p-2 ">{item.field}</td>
                      <td className="p-2 ">{item.gender}</td>
                      <td className="p-2 ">{item.phone}</td>
                      <td className="p-2 ">{item.email}</td>
                      <td className="p-2 ">
                        <span
                          className={`px-2 py-1 rounded-full text-sm font-medium ${
                            item.status === "Full-time"
                              ? "bg-yellow-100 text-yellow-800"
                              : item.status === "Part-time"
                              ? "bg-green-100 text-green-800"
                              : item.status === "Intern"
                              ? "bg-violet-100 text-violet-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-1 flex space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-1 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="px-1 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition duration-200"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      className="border border-gray-300 p-6 text-center  text-gray-700 rounded-md shadow-sm"
                    >
                      No data available!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {editId && (
            <div className="my-4 p-4 border rounded-lg bg-gray-50 shadow">
              <h3 className="text-lg font-bold mb-4">Edit User</h3>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="field"
                value={editData.field}
                onChange={handleChange}
                placeholder="Field"
                className="p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="gender"
                value={editData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-2 border rounded mb-2"
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 border rounded mb-2"
              />
              <div className="mb-2">
                <label className="font-semibold mr-2">Status:</label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="status"
                    value="Part-time"
                    checked={editData.status === "Part-time"}
                    onChange={handleChange}
                  />
                 {" "} Part time
                </label>
                <label className="mr-4">
                  <label>
                    <input
                      type="radio"
                      name="status"
                      value="Intern"
                      checked={editData.status === "Intern"}
                      onChange={handleChange}
                    />
                    {" "}Intern
                  </label>
                </label>
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="Full-time"
                    checked={editData.status === "Full-time"}
                    onChange={handleChange}
                  />
                 {" "} Full time
                </label>
              </div>
              <button
                onClick={() => handleUpdate(editId)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Update
              </button>
              <button
                onClick={() => setEditId(null)}
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <EnterData />
      </Layout>
    </div>
  );
}
