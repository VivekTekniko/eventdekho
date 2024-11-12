import Footer from '@/Common/Footer'
import Header from '@/Common/Header'
import React from 'react';
import EventImage from "@/Common/EventImage";
import img from "../../Assets/event-banner.jpg"
// import MostPopular from '@/Component/MostPopular';
import ContactForm from '../contact-form/ContactForm';
import Component2 from "./Component2";
import About from "../../Component/About";
import Head from 'next/head';
import Image from 'next/image';

const page = () => {
  return (
    <>
     <Head>
        {/* Title Tag */}
        <title>Best Event Planners in Lucknow | Event & Party Planner - EventDekho</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow. Contact us for personalized event planning."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="best event planners in Lucknow, event planner in Lucknow, party planner in Lucknow, wedding planner Lucknow, corporate events Lucknow , birthday events Lucknow , anniverasry event Lucknow , surprise planning in Lucknow"
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Best Event Planners in Lucknow | Event & Party Planner - EventDekho" />
        <meta
          property="og:description"
          content="Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow."
        />
        <meta property="og:image" content="URL_to_your_image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* For responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
   
    <div>
        <Header/>
        <div className="font-sans p-4">
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-0 before:z-10">
         <Image height={100} width={100} src={img.src}  alt="Banner-Image-EventDekho" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h1 className='text-6xl text-white font-semibold py-8'>Event Planners in Lucknow</h1>
        <h2 class=" text-3xl font-bold text-center text-gray-100">All in one Party solution in Lucknow We give the best packages for your events including decoration,catering,bakery,photography,cleaning and much more...</h2>

        <a
          href='/contact-form'
          class="mt-12 bg-transparent text-2xl font-bold  text-white py-3 px-6 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </a>
      </div>
    </div>
  <div className="max-w-screen-lg mx-auto py-12">
 <Component2/>
  </div>
</div>

{/* <MostPopular/> */}
  <About/>
<ContactForm/>
<EventImage/>
<Footer/>
    </div>
    </>
  )
}

export default page