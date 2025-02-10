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

const page = () => {
  return (
    <>
      <div>
        <Header />
        <div className="font-sans p-4">
          <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 bg-gradient-to-b from-transparent to-black  before:bg-black before:opacity-0 before:z-10">
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
          </div>
          <div className="max-w-screen-lg md:mx-auto mx-10 py-12">
            <Component2 />
          </div>
        </div>

        <section className="max-w-screen-xl p-12 md:p-0 m-auto" style={{ backgroundColor: "#FFFADB" }}>
          <div className="max-w-screen-lg m-auto" >
            <div >
              <h2 className="text-3xl py-4 text-black font-bold">
              Event Planner in Lucknow
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
              Looking for the best event planner in Lucknow? Your search ends here! At <strong>EventDekho</strong>, we specialize in turning your dream events into reality. Whether it&apos;s a wedding, corporate gathering, or a social celebration, we offer end-to-end <strong>event management services </strong>that ensure every detail is taken care of. From event decoration to catering, photography, and everything in between, our expert team makes sure your special occasion is flawless. We are committed to delivering a seamless experience, providing you with high-quality service and unmatched attention to detail.              </p>
            </div>
            <div>
              <h2 className="text-3xl py-4 text-black font-bold">
              Event Management Company in Lucknow
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
              As a leading <strong>event management company in Lucknow</strong>, we pride ourselves on our extensive experience and attention to detail. We understand that planning an event can be overwhelming, and that&apos;s why we offer comprehensive services. Our team works tirelessly to ensure that each event is carefully crafted according to your preferences and vision. Whether you need help with venue selection, decoration, or managing vendors, we&apos;ve got you covered. We handle all aspects of your event, giving you peace of mind and the freedom to enjoy your celebration without a worry.              </p>
            </div>
            <div>
              <h2 className="text-3xl py-4 text-black font-bold">
              Top Event Organizers in Lucknow
              </h2>
              <p className="text-2xl text-gray-600 font-medium py-4">
              When it comes to top event organizers in Lucknow, <strong>EventDekho</strong> stands out as the preferred choice for hundreds of satisfied clients. We understand the significance of every event, and we go above and beyond to create extraordinary experiences. From conceptualizing themes and decorations to sourcing the best vendors, we ensure that every element is perfectly coordinated. Whether it&apos;s an intimate gathering or a grand celebration, our team works with you to execute your vision flawlessly, providing top-tier service at every step.              </p>
            </div>
            
            <div className='mb-4'>
              <p className='text-3xl font-semibold text-pink-700'>People also search this</p>
              <h4 className='text-2xl mb-4 font-medium text-gray-600'>Best event planner in lucknow , Best birthday planner in lucknow , Best Anniversary planner in Lucknow , Best House Warming planner in lucknow , Best Ritual Events planner in Lucknow , Best Corporate Event planner in Lucknow.
                Event Decoratos in lucknow , Best catering services in lucknow , Photography/videography in lucknow , Post Party cleanup in lucknow
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
  title: 'Best Event Planners in Lucknow | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow. Contact us for personalized event planning.',
  keywords:
    'best event planners in Lucknow, event planner in Lucknow, party planner in Lucknow, wedding planner Lucknow, corporate events Lucknow, birthday events Lucknow, anniversary event Lucknow, surprise planning in Lucknow, event planner in Lucknow, event organiser in Lucknow, event management in Lucknow, event management company in Lucknow, best event management companies in Lucknow',
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
    title: 'Best Event Planners in Lucknow | Event & Party Planner - EventDekho',
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