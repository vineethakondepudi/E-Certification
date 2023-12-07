"use client"

import React, { useState } from 'react';
import { BASE_URL } from '../config';

export default function Page() {
  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    maritalStatus: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${BASE_URL}/api/emp_personal_form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeDetails),
      });
  
      if (response.ok) {
        console.log('Submitted Employee Details:', employeeDetails);
        // Provide feedback to the user (e.g., show a success message)
        alert('Form submitted successfully!');
        // Redirect to the desired page
        router.push('/personal');
      } else {
        console.error('Form submission failed');
        // Handle error and provide feedback to the user
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      // Handle error and provide feedback to the user
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  


 

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md bg-slate-600">
      <h2 className="text-2xl font-semibold mb-4">Employee Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={employeeDetails.firstName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={employeeDetails.lastName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={employeeDetails.gender}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-600">
            Marital Status:
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={employeeDetails.maritalStatus}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">
            Upload Profile Picture:
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
