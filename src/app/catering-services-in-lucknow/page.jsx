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
import Head from 'next/head';
 const page = () => {
  return (
    <div>
       <Head>
        {/* Title Tag */}
        <title>Best Catering Services in Lucknow</title>
        <link rel="canonical" href="https://www.eventdekho.in/catering-services-in-lucknow" />
        {/* Meta Description */}
        <meta
          name="description"
          content="Looking for the best catering services in Lucknow?At Event Dekho, we bring the rich culinary heritage of Lucknow right to your event. Our catering services are tailored to deliver an unforgettable dining experience that combines traditional flavors with modern presentation."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="best catering services in Lucknow, wedding catering Lucknow, corporate catering Lucknow , birthday catering services in Lucknow , anniverasry catering services in Lucknow "
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Best catering services in Lucknow | Event & Party Planner - EventDekho" />
        <meta
          property="og:description"
          content="Looking for the best catering services in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow."
        />
      <meta property="og:image" content="https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75" />
      <meta property="og:url" content="https://www.eventdekho.in/" />
        <meta property="og:type" content="website" />

        {/* For responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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