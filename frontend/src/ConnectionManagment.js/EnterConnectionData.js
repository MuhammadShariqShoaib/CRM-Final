import React, { useState } from 'react';
import axios from 'axios';

export default function EnterConnectionData() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        Linkedin: ''

    });
    const [showForm, setShowForm] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/saveConnectionData', formData);
            console.log('Form submitted successfully:', response.data);
            window.location.reload();
            // Optionally, you can update the UI here (e.g., show a success message)
        } catch (error) {
            alert('There was a problem with the submission:', error);
            // Optionally, you can update the UI here (e.g., show an error message)
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div className="my-6 mx-5">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 mb-4 flex items-center"
        >
          <span className="mr-2">+</span> Add
        </button>
        {showForm && (
          <div className="z-50 my-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-lg font-bold mb-4">Enter Connection Data</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Gender</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={formData.gender === 'male'}
                    className="mr-2 focus:ring-blue-500"
                  />
                  <label htmlFor="male" className="mr-4">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={formData.gender === 'female'}
                    className="mr-2 focus:ring-blue-500"
                  />
                  <label htmlFor="female" className="mr-4">Female</label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Linkedin</label>
                <input
                  type="text"
                  id="Linkedin"
                  name="Linkedin"
                  value={formData.Linkedin}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      
    );
}
