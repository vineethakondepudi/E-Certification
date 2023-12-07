import React from 'react';
import Navbar from '@/app/navbar/page'

export default function StaticPage() {
    return (
      <>
      <Navbar />
      <div className='flex items-center fixed top-20 left-0 right-0 bg-slate-100 p-10 z-10'>
      <img
           className='flex mx-auto w-full max-w-7xl pb-15 pr-30'
            src='https://img.freepik.com/premium-photo/top-view-laptop-concept-with-blue-desk-concept-background-3d-rendering_626958-393.jpg'
            alt='Banner'
        />
        <div
                    style={{
                        position: 'absolute',
                        top: '45%',
                        left: '20%', // Adjust left value to change the horizontal position of the text
                        transform: 'translateY(-50%)',
                        color: 'white', // Set text color
                        zIndex: 1, // Ensure text appears above the image
                    }}
                >
                    <div className='text-lg font-sans font-2 mb-10'> SPACES </div>
                 <div className='text-4xl font-sans text-bold'>Get started coding</div>
                 <div className='text-4xl font-sans text-bold mb-10'>on your own   </div>
                 <div className='text-lg font-sans font-2'>  Create your own spaces. Use</div>
                 <div className='text-lg font-sans font-2'>  them to host your website or  </div>
                 <div className='text-lg font-sans font-2'>try out ideas.</div>
                </div>
      </div>
         
      </>
        
        
    )
}
