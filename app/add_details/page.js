"use client";

import React from 'react';
import { useState } from 'react';
import Navbar from '@/app/navbar/page';
import { IoPersonSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import Personal from '@/app/personal/page';
import Work from '@/app/work/page';
import Contact from '@/app/contact/page';
import Education from '@/app/education/page';
import Skills from '@/app/skills/page';
import Social from '@/app/social/page';


function Page() {
  const [selectedComponent, setSelectedComponent] = useState();

  const handleOptionChange = (option) => {
    switch (option) {
      case 'Personal':
        setSelectedComponent(<Personal />);
        break;
      case 'Work':
        setSelectedComponent(<Work />);
        break;
      case 'Contact':
        setSelectedComponent(<Contact />);
        break;
      case 'Education':
        setSelectedComponent(<Education />);
        break;
      case 'Skills':
        setSelectedComponent(<Skills />);
        break;
      case 'Social':
        setSelectedComponent(<Social />);
        break;
        break;
      default:
        setSelectedComponent(null);
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <div className="bg-slate-800 h-full w-40 p-4 fixed top-20 flex flex-col gap-4">
        <div
          className="flex mb-4 items-center hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Personal')}
        >
          <IoPersonSharp className='text-white mr-4' size={18} />
          <h2 className='text-white text-sm hover:text-black' style={{ fontFamily: 'cursive' }}>Personal</h2>
        </div>

        <div
          className="flex items-center mb-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Work')}
        >
          <MdWork  className='text-white mr-4' size={18} />
          <h2 className='text-white text-sm hover:text-black ' style={{ fontFamily: 'cursive' }}>Work</h2>
        </div>

        <div
          className="flex items-center mb-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Contact')}
        >
          <FaPhoneAlt className='text-white mr-4' size={18} />
          <h2 className='text-white text-sm hover:text-black ' style={{ fontFamily: 'cursive' }}>Contact</h2>
        </div>

        <div
          className="flex items-center mb-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Education')}
        >
          <FaGraduationCap className='text-white mr-4' size={18} />
          <h2 className='text-white text-sm hover:text-black ' style={{ fontFamily: 'cursive' }}>Education</h2>
        </div>

        <div
          className="flex items-center mb-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Skills')}
        >
          <TiStarburst className='text-white mr-4' size={18} />
          <h2 className='text-white text-sm hover:text-black ' style={{ fontFamily: 'cursive' }}>Skills</h2>
        </div>

        <div
          className="flex items-center mb-4 hover:bg-white focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer"
          onClick={() => handleOptionChange('Social')}
        >
          <BsGlobeCentralSouthAsia className='text-white mr-4' size={15} />
          <h2 className='text-white text-sm hover:text-black ' style={{ fontFamily: 'cursive' }}>Social</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-40 pt-20">
        {selectedComponent}
        
      </div>
    </div>
  );
}

export default Page;
