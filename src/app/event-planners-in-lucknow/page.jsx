import Footer from '@/Common/Footer'
import Header from '@/Common/Header'
import React from 'react';
import EventImage from "@/Common/EventImage";
import img from "../../Assets/event-banner.jpg"
// import MostPopular from '@/Component/MostPopular';
import ContactForm from '../contact-form/ContactForm';
import Component2 from "./Component2";
import About from "../../Component/About";
import Image from 'next/image';
import HomePage from '@/Component/HomePage';
import MostPopular from '@/Component/MostPopular';
import HowWorks from '@/Component/HowWorks';

const page = () => {
  return (
    <>
      <div>
        <Header />
        <div className="font-sans p-4">
          <HomePage />
          {/* <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-gradient-to-b from-transparent to-black  before:bg-black before:opacity-0 before:z-10">
            <Image height={400} width={500} src={img.src} alt="event planner banner" class="absolute inset-0 w-full h-full object-cover" />

            <div class="min-h-[350px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
              <header>
                <h1 className='md:text-6xl text-8xl text-white font-bold py-8'>Welcome to the Best Event Planner in Lucknow</h1>
                <p className='text-4xl md:text-3xl font-bold text-center text-gray-100'>Looking for a <strong>best event planner in Lucknow</strong>? Look no further! We are your trusted partner in making every event a grand success. Whether it&apos;s a wedding, corporate event, birthday party, or any other celebration, we are here to make it unforgettable.</p>
              </header>
              <a
                href='/contact-form'
                class="mt-12 bg-white md:text-3xl text:5xl font-bold  text-black md:py-3 p-6 px-6 border-2 border-white rounded-lg  transition duration-300">
                Book Now
              </a>
            </div>
          </div> */}
          <MostPopular />
          <div className="max-w-screen-lg md:mx-auto mx-10 py-12">
            <Component2 />
          </div>
        </div>
        <HowWorks />
        <section className="max-w-screen-xl p-12 md:p-0 m-auto" style={{ backgroundColor: "#FFFADB" }}>

          <div className="max-w-screen-lg m-auto">
            <div>
              <h2 className="text-3xl py-4 text-black font-bold">
                <strong>Event Planner in Lucknow</strong> – Your Celebration, Our Expertise
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
                Searching for the <strong>best event planner in Lucknow</strong>? Look no further! At <strong>EventDekho</strong>, we bring your dream events to life with seamless execution and creative excellence. Whether its a <strong>wedding planner</strong>, <strong>engagement planner</strong>, or <strong>corporate event organizer</strong>, our team delivers personalized event solutions tailored to your vision. From elegant décor to premium catering, entertainment, and logistics – we ensure your event is memorable, stress-free, and picture-perfect.
              </p>
            </div>

            <div>
              <h2 className="text-3xl py-4 text-black font-bold">
                Your Go-To <strong>Event Management Company in Lucknow</strong>
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
                As a trusted <strong>event management company in Lucknow</strong>, we focus on providing end-to-end planning and execution for all types of events. Whether you are hosting a luxury wedding, a festive birthday bash, or a professional conference, our dedicated team handles everything – from theme development and venue selection to vendor coordination and real-time management. Count on <strong>EventDekho</strong> to be your reliable partner in delivering spectacular events that exceed expectations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl py-4 text-black font-bold">
                <strong>Top Event Organizers in Lucknow</strong> – Trusted by Thousands
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
                Ranked among the <strong>top event organizers in Lucknow</strong>, <strong>EventDekho</strong> is the name behind hundreds of successful events. Our creative professionals ensure your special day is uniquely yours – be it a cultural celebration, a themed party, or a formal gathering. We pay attention to every detail – from lighting and stage setup to guest experience and entertainment. With us, you are choosing passion, precision, and perfection.
              </p>
            </div>

            <div className='mb-4'>
              <p className='text-3xl font-semibold text-pink-700'>People also search for:</p>
              <h4 className='text-2xl mb-4 font-medium text-gray-600'>
                <strong>Best event planner in Lucknow</strong>, <strong>Wedding planner near me</strong>, <strong>Top birthday party organizers in Lucknow</strong>, <strong>Engagement party planner</strong>, <strong>House warming event planner in Lucknow</strong>, <strong>Corporate event planner</strong>, <strong>Luxury event management</strong>, <strong>Event decorators in Lucknow</strong>, <strong>Top catering services in Lucknow</strong>, <strong>Professional photography & videography</strong>, <strong>Post-event cleaning services</strong>.
              </h4>
            </div>
          </div>

        </section>

        <About />
        {/* <ContactForm /> */}
        <EventImage />
        <Footer />
      </div>
    </>
  )
}

export default page

export const metadata = {
  title: 'Event Planner in Lucknow | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow. Contact us for personalized event planning.',
  keywords:
    'best event planners in Lucknow, event planner in Lucknow, party planner in Lucknow, wedding planner Lucknow, corporate events Lucknow, birthday events Lucknow, anniversary event Lucknow, surprise planning in Lucknow, event planner in Lucknow, event organiser in Lucknow, event management in Lucknow, event management company in Lucknow, best event management companies in Lucknow, wedding planner in Gomati nagar , wedding planner in lucknow',
  openGraph: {
    title: 'Best Event Planners in Lucknow | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner in Lucknow | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '26.8467;80.9462',
  },
};