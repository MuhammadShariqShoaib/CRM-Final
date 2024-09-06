import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-gray-100 w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-extrabold mb-12">DevHawks</h2>
        <ul className="space-y-8">
          <li>
            <Link to="/Dashboard" className="block hover:bg-gray-700 p-3 rounded-md transition duration-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/EmployeeManagement" className="block hover:bg-gray-700 p-3 rounded-md transition duration-200">
              Employee Management
            </Link>
          </li>
          <li>
            <Link to="/ClientsManagement" className="block hover:bg-gray-700 p-3 rounded-md transition duration-200">
              Clients Management
            </Link>
          </li>
          <li>
            <Link to="/ConnectionManagement" className="block hover:bg-gray-700 p-3 rounded-md transition duration-200">
              Connection Management
            </Link>
          </li>

          <li>
  <Link
    to="/"
    className="flex items-center hover:bg-gray-700 p-3 rounded-md transition duration-200"
  >
    <FiLogOut className="text-red-900 text-3xl mr-2" /> {/* Larger icon */}
    <span className="text-lg font-semibold">Logout</span> {/* Larger and bolder text */}
  </Link>
</li>
        </ul>
      </div>
    </div>
  );
}
