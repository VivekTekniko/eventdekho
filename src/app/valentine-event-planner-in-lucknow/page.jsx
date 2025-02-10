import React from 'react'
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import img from "../../Assets/valentine.jpg"
import TreatmentList from '@/Component/TreatmentList';
import About from '@/Component/About'
import ContactForm from '../contact-form/ContactForm';
import EventImage from "@/Common/EventImage";

const page = () => {
  return (
    <>
      <Header />
      <div>
        <img src={img.src} alt="catering Banner Image" class="bannerImg" />
      </div>
      <header className='max-w-6xl mx-auto py-10'>
        <h1 className='md:text-6xl text-8xl text-black text-center font-semibold py-8'> Valentine Event Planner in Lucknow</h1>
      </header>
      <section className='max-w-screen-lg mx-auto py-4'>

        <p class="text-justify text-3xl my-2 font-medium  text-gray-800">We are a team of dedicated event planners, and we specialize in making your special moments unforgettable.
          Whether it’s a birthday, wedding, or any other occasion, we ensure everything goes smoothly. One of the most exciting events we plan is Valentine’s Day for couples who want to make their day extra special.
          From the moment you contact us, we work hard to bring your dreams to life.</p>
        <p class="text-justify text-3xl my-2 font-medium  text-gray-800">When it comes to planning a Valentine’s event, we take care of everything. We start by decorating the venue in the most beautiful and romantic way, with flowers, candles, and fairy lights. We create an atmosphere that feels magical and perfect for the occasion. Then, we move on to planning the surprise dinner for the couple. We make sure the food is delicious, and the setting is just right, whether it’s a cozy dinner at home or a more elaborate setting at a restaurant.</p>
        <p class="text-justify text-3xl my-2 font-medium  text-gray-800">Our team takes care of all the small details, like arranging a special gift or a surprise moment that will make your loved one smile. We believe that planning an event is not just about organizing a party, but creating memories that last forever. So, if you are looking for a team that can plan the perfect Valentine’s event, from decoration to a surprise dinner, we are here to make it happen! Let us help you show your love in the most wonderful way.</p>
      </section>

      <TreatmentList />

      <About />

      {/* <ContactForm /> */}
      <EventImage />
      <Footer />
    </>
  )
}

export default page

export const metadata = {
  title: 'Valentine Event Planner in Lucknow | Romantic Events - EventDekho',
  description:
    'Looking for the best Valentine event planner in Lucknow? EventDekho specializes in planning unforgettable Valentine’s Day events, including surprise dinners, romantic decorations, and more. Make your day special with our expert planning services.',
  keywords:
    'Valentine event planner in Lucknow, Valentine’s Day planning in Lucknow, romantic events Lucknow, surprise dinner for couples Lucknow, event planner Lucknow, romantic dinner planner Lucknow, event organizers for Valentine’s Lucknow, love celebration Lucknow, couple events in Lucknow, Valentine party planner in Lucknow, anniversary event planners Lucknow, surprise planning Lucknow, event management in Lucknow, romantic decorations Lucknow, best event planners for couples Lucknow',
  openGraph: {
    title: 'Valentine Event Planner in Lucknow | Romantic Events - EventDekho',
    description:
      'Looking for the best Valentine event planner in Lucknow? EventDekho specializes in planning unforgettable Valentine’s Day events, including surprise dinners, romantic decorations, and more.',
    image:
      'https://www.eventdekho.in/_next/static/media/logo.0513172d.png',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentine Event Planner in Lucknow | Romantic Events - EventDekho',
    description:
      'Looking for the best Valentine event planner in Lucknow? EventDekho specializes in planning unforgettable Valentine’s Day events, including surprise dinners, romantic decorations, and more.',
    image:
      'https://www.eventdekho.in/_next/static/media/logo.0513172d.png',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'Lucknow, India',
    position: '26.8467;80.9462',
  },
};
