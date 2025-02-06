// "use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo.png";


const Header = () => {

  return (
    <div className="sticky top-0 z-50">
    <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900 z-50">
      <div className="max-w-screen-xl flex p-2 items-center justify-between md:mx-auto">
        <Link href='/' className="flex md:basis-1/5 justify-between items-center" style={{height:"50px"}}>
    <img src={logo.src} className="h-full w-full" alt="eventdekho-logo" />
   {/* <Image height={120} width={120} src={logo.src} className='h-full w-full' alt="Event-dekho-partyplanner"/> */}

        </Link>
       
        <div className="flex basis-3/5 gap-4 justify-between md:justify-end items-center md:order-2 ">
        <Link className="md:text-[20px] text-2xl  font-bold text-web  " href="/event-planners-in-lucknow">About Us </Link>
        <Link className="md:text-[20px] text-2xl  font-bold text-web  "href="/contact-form">Contact Us </Link>
        <Link className="md:text-[20px] text-2xl  font-bold text-web  " href="/catering-services-in-lucknow">Our Menu </Link>
        <div className="md:text-[20px] text-2xl  text-white md:mx-8 ">

        <div className="my-2">
                <a  href="/contact-form" className="text-center py-3 bg-web mt-2 rounded-xl ">
                  <span className="font-bold p-4 text-white md:text-[20px] text-2xl ">Book Now</span>
                </a>
              </div>
        </div>
        </div>
      </div>
    </nav>
{/* <Navbar/> */}
    </div>
  );
};

export default Header;
