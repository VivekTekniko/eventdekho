import React from 'react';
import "../globals.css"

const ContentPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Event planner in Gorakhpur
          </h1>
          <p className="mt-4 text-2xl text-gray-600">
            At Your Eventdekho, we don&apos;t just plan events – we create unforgettable experiences. As a full-service event
            management company, we specialize in crafting exceptional events of all types and scales, ensuring every detail
            is meticulously executed. Whether you&apos;re planning an intimate gathering or a grand celebration, our dedicated
            team brings creativity, professionalism, and a personal touch to every event.
          </p>
        </div>

        {/* Event Specializations */}
        <div className="mt-32">
          <h2 className="text-4xl text-web font-bold text-gray-900 text-center">🎊 Our Event Specializations</h2>
          <p className="mt-2 text-center text-[16px] text-gray-600">
            We proudly handle all types of events, tailored to suit your needs, culture, and style:
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">💍 Weddings / Destination Weddings</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Your big day deserves perfection. From traditional to modern themes, we offer full wedding planning,
                including venue selection, decor, entertainment, and coordination. Whether it&apos;s a single-day celebration or
                a multi-day extravaganza, we handle it with finesse.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">💑 Engagement Ceremonies</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Make your &apos;Yes&apos; moment even more memorable. We curate engagement parties that are elegant, lively, and
                perfectly reflect your personality as a couple.
              </p>
            </div>
           
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🕉️ Rituals & Traditional Events</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                We respect traditions and specialize in organizing events like Mehendi, Sangeet, Haldi, Mata ki Chowki,
                Puja ceremonies, and other cultural rituals with authenticity and elegance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🎂 Birthday Parties</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                From fun-filled kids&apos; themes to milestone celebrations and surprise parties, we organize birthday events
                that are joyful and unforgettable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🎉 Anniversary Celebrations</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Celebrate years of togetherness with a romantic or family-oriented anniversary party. We provide bespoke
                solutions from decor and catering to entertainment and memory-making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🏢 Corporate Events</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                From product launches and seminars to annual meets and team outings, we help brands build lasting
                impressions through professionally managed corporate events.
              </p>
            </div>
          </div>
        </div>

        {/* End-to-End Services */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-web text-gray-900 text-center">🛠️ Our End-to-End Services</h2>
          <p className="mt-2 text-center text-[16px] text-gray-600">
            We take pride in offering complete event solutions, so you don&apos;t have to worry about a thing:
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🎨 Event Decoration & Theming</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                We transform venues with stunning decorations – floral, LED, rustic, royal, minimalistic, Bollywood-style –
                you name it! Every theme is executed with precision and creativity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🍽️ Catering Services</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Food is the heart of every celebration. We provide multi-cuisine menus crafted by top chefs to suit your
                taste and theme – whether it&apos;s traditional Indian thalis, global gourmet, or fusion treats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">📸 Photography & Videography</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Capture every magical moment with our expert photographers and cinematographers. From candid clicks to
                cinematic reels, we ensure your memories are beautifully preserved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🎤 Entertainment & Artists</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                We arrange DJs, live bands, dancers, emcees, celebrity guests, and more. Entertainment tailored to suit the
                audience and event vibe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">📍 Venue Selection & Management</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                Be it banquet halls, open lawns, hotels, or resorts, we help you find and manage the perfect venue, taking
                care of bookings, permissions, layout, and guest arrangements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-500 hover:text-white ease-in-out">
              <h3 className="text-3xl font-semibold ">🚗 Logistics & Hospitality</h3>
              <p className="mt-2  text-[14px] hover:text-white">
                From guest pickup and drop services to welcome kits, room bookings, and on-site coordination – we handle
                every logistic with professionalism.
              </p>
            </div>
           
          </div>
        </div>

        {/* Why Choose Us */}
        
      </div>
    </div>
  );
};

export default ContentPage;