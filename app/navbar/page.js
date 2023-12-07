"use client";

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { BsStars } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { PiCertificateLight } from "react-icons/pi";
import { GrDomain } from "react-icons/gr";
import { SiMyspace } from "react-icons/si";
import { SiFuturelearn } from "react-icons/si";
import { RiBillFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';



export default function Page() {


    const router = useRouter();
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    const handleLogout = () => {
      // Perform any logout logic here
      // For example, redirect to the home page
      router.push("/");
    };
    
    return (
        <>
            <nav className='flex items-center fixed top-0 left-0 right-0 bg-slate-800 p-2 z-10'>
                <SiFuturelearn className='text-white mr-1' size={15} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>My Learing</Link>
                <SiMyspace className='text-white mr-1' size={20} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/space"}>Space</Link>
                <PiCertificateLight className='text-white mr-1 ' size={20} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>Certificate</Link>
                <CgProfile className='text-white mr-1' size={20} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/profile"}>Profile</Link>
                <BsStars className='text-white' size={20} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>Videos</Link>
                <GrDomain className='text-white mr-1' size={20} />
                <Link className='text-white text-sm mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>Domains</Link>
                <RiBillFill className='text-white mr-1' size={20} />
                <Link className='text-white text-sm mr-60 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>Billing</Link>
                <div className="ml-auto flex items-center">
                    <Link className='text-white text-sm flex items-center mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>
                        <BsStars className='mr-1' size={20} />
                        Browsing Courses & Exams
                    </Link>
                    <Link className='text-white text-sm flex items-center mr-10 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }} href={"/"}>
                        <GrDomain className='mr-1' size={20} />
                        Community
                    </Link>
                    <button className='text-white text-sm flex items-center hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-violet-300' style={{ fontFamily: 'cursive' }}  onClick={() => setShowLogoutDialog(true)}>
                        <CgProfile className='mr-1' size={20} />
                        Logout
                    </button>
                </div>
                  {/* Logout Dialog */}
      {/* Blur overlay for background */}
      {showLogoutDialog && (
        <div className="fixed top-0 left-0 w-full h-full  backdrop-blur-sm"></div>
      )}

      {/* Logout Dialog */}
      {showLogoutDialog && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold mb-4">Are you sure you want to logout?</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
              onClick={() => setShowLogoutDialog(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
            </nav>
        </>


    )
}
