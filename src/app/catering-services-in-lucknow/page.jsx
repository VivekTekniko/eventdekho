import React from 'react';
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Component from './Component';
import img from "../../Assets/event-banner.jpg"
// import MostPopular from '@/Component/MostPopular';
import ContactForm from '../contact-form/ContactForm';
import About from "../../Component/About";
import EventImage from "@/Common/EventImage";
import Image from 'next/image';
 const page = () => {
  return (
    <div>
         <Header/>
        <div className="font-sans p-4">
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-10 before:z-0">
         <Image height={200} width={100} src={img.src}  alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h1 className='text-6xl text-white font-semibold py-8'>Best Catering Services in Lucknow</h1>
        <h2 class=" text-3xl font-bold text-center text-gray-100">All in one Party solution in Lucknow We give the best packages for your events including decoration,catering,bakery,photography,cleaning and much more...</h2>

        <button
          type="button"
          class="mt-12 bg-transparent text-2xl font-bold  text-white py-3 px-6 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div>
    <div className="max-w-screen-lg mx-auto py-12">
 <Component/>
  </div>
</div>
{/* <MostPopular/> */}
  <About/>
<ContactForm/>
<EventImage/>
<Footer/>
    </div>
  )
}
export default page