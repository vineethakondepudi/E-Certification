"use client";

import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config';

const PersonalCard = () => {
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/emp_personal_form`, {
          cache: "no-store"
        });
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setPersonalData(data.login); // Assuming your API response has a 'login' property
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md bg-slate-600">
      <h2 className="text-2xl font-semibold mb-4">Personal Information:</h2>
      <hr />
      {personalData.length > 0 && (
        <div>
          <div className="flex mb-4">
            <div className="w-40 mr-80">
              <h1 className="text-slate-800/50">First Name</h1>
              <p className="text-slate-800/100">{personalData[0].firstName}</p>
            </div>
            <div>
              <h1 className="text-slate-800/50">Last Name</h1>
              <p className="text-slate-800/100">{personalData[0].lastName}</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-40 mr-80">
              <h1 className="text-slate-800/50">Gender</h1>
              <p className="text-slate-800/100">{personalData[0].gender}</p>
            </div>
            <div>
              <h1 className="text-slate-800/50">Marital Status</h1>
              <p className="text-slate-800/100">{personalData[0].maritalStatus}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalCard;
