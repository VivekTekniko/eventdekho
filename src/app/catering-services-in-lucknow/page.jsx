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
          content="best catering services in Lucknow, wedding catering Lucknow, corporate catering Lucknow ,Best event planner in lucknow , Best birthday planner in lucknow , Best Anniversary planner in Lucknow , Best House Warming planner in lucknow , Best Ritual Events planner in Lucknow , Best Corporate Event planner in Lucknow,Event Decoratos in lucknow  , Photography/videography in lucknow , Post Party cleanup in lucknow"
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

        <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Lucknow, India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
      <Header />
      <div className="font-sans p-4">
        <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-10 before:z-0">
          <Image height={400} width={1000} src={img.src} alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

          <div class="min-h-[350px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <header>
              <h1 className='md:text-6xl text-8xl text-white font-semibold py-8'> Catering Services in Lucknow</h1>
              <h2 class=" text-4xl md:text-3xl font-bold text-center text-gray-100">All in one Party solution in Lucknow We give the best packages for your events including decoration,catering,bakery,photography,cleaning and much more...</h2>
            </header>
            <a
              href='/contact-form'
              class="mt-12 bg-white md:text-3xl text:5xl font-bold  text-black md:py-3 p-6 px-6 border-2 border-white rounded-lg  transition duration-300">
              Book Now
            </a>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto py-12">
          <Component />
        </div>
      </div>
      <section className="max-w-screen-xl p-12 md:p-0 m-auto" style={{ backgroundColor: "#FFFADB" }}>
        <div className="max-w-screen-lg m-auto" >
          <div >
            <h2 className="text-3xl py-4 text-black font-bold">
              Top Catering Service in Lucknow
            </h2>
            <p className="text-2xl text-gray-600 font-medium py-4">
              Searching for the top catering service in Lucknow? Look no further! At <strong>EventDekho</strong>, we provide high-quality catering services tailored to meet the diverse needs of our clients. Whether it&apos;s an intimate gathering or a large celebration, our expert team ensures that every dish is prepared with the utmost care and attention to detail. From traditional Lucknowi flavors to international cuisines, we offer a wide variety of menu options that cater to all tastes and preferences. Our commitment to freshness and flavor makes us the top choice for <span>catering in Lucknow</span>.
            </p>
          </div>
          <div>
            <h2 className="text-3xl py-4 text-black font-bold">
              Best Catering Service in Lucknow
            </h2>
            <p className="text-2xl text-gray-600 font-medium py-4">
              When it comes to the best catering service in Lucknow, <strong>EventDekho</strong> is the name you can trust. We understand that food plays a central role in any event, and our team works tirelessly to deliver delicious and beautifully presented dishes that will leave a lasting impression. Our chefs use only the finest ingredients to create mouthwatering meals, whether it&apos;s for a <strong>wedding, corporate event, or private party</strong>. With our personalized service and extensive menu options, we guarantee a delightful culinary experience that exceeds your expectations.
            </p>

          </div>
          <div>
            <h2 className="text-3xl py-4 text-black font-bold">
              Wedding Catering Services in Lucknow
            </h2>
            <p className="text-2xl text-gray-600 font-medium py-4">
              Your wedding day deserves the best, and our <strong>wedding catering services</strong> in Lucknow ensure that your special day is complemented with exquisite food that your guests will rave about. At <strong>EventDekho</strong>, we understand the importance of creating a memorable dining experience. We offer customized wedding menus that include a wide variety of appetizers, main courses, and desserts, all crafted to perfection. Whether you&apos;re hosting a small, intimate wedding or a grand celebration, our catering team will work closely with you to curate a menu that reflects your personal tastes and style.                       </p>
          </div>

          <div>
            <h2 className="text-3xl py-4 text-black font-bold">
              Venue Catering Services in Lucknow
            </h2>
            <p className="text-2xl text-gray-600 font-medium py-4">
              Looking for venue catering services in Lucknow? <strong>EventDekho</strong> offers a complete catering solution for your venue, whether it&apos;s a banquet hall, outdoor setting, or any other venue of your choice. We take care of all the catering aspects, from food preparation to setup, ensuring that everything runs smoothly on the day of your event. Our team will collaborate with the venue to create an unforgettable experience for you and your guests, providing the best in food and service. We are known for delivering fresh, high-quality meals that are prepared on-site to guarantee taste and quality.                   </p>
          </div>

          <div>
            <h2 className="text-3xl py-4 text-black font-bold">
              Home Catering Services in Lucknow
            </h2>
            <p className="text-2xl text-gray-600 font-medium py-4">
              For those hosting events at home, our <span>home catering services in Lucknow</span> offer a convenient and hassle-free way to enjoy a <span>professional catering experience</span> in the comfort of your own space. Whether you&apos;re celebrating a birthday, anniversary, or a small gathering, we bring the same level of expertise and attention to detail to your home event. Our team takes care of everything—from setting up the food to cleaning up afterward—so you can relax and enjoy your time with friends and family. With customizable menus, we ensure that your event has the perfect food options for every guest.    </p>        </div>

          <div className='mb-4'>
            <p className='text-3xl font-semibold text-pink-700'>People also search this</p>
            <h4 className='text-2xl mb-4 font-medium text-gray-600'>Best event planner in lucknow , Best birthday planner in lucknow , Best Anniversary planner in Lucknow , Best House Warming planner in lucknow , Best Ritual Events planner in Lucknow , Best Corporate Event planner in Lucknow.
              Event Decoratos in lucknow , Best catering services in lucknow , Photography/videography in lucknow , Post Party cleanup in lucknow, Top event organisers in lucknow , Top event managment company in lucknow
            </h4>
          </div>
        </div>
      </section>
      <About />
      <ContactForm />
      <EventImage />
      <Footer />
    </div>
  )
}
export default page