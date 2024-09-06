import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div >
            <div className="fixed z-10  w-full ">
                <Navbar />
            </div>
            <div className=""> 
                <div className="fixed mt-16 ">
                    <Sidebar />
                </div>
                <div className="ml-[15%] bg-gray-100 h-screen p-16"> 
                    <main >
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
