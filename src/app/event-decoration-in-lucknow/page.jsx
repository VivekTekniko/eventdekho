import Footer from '@/Common/Footer'
import Header from '@/Common/Header'
import React from 'react';
import EventImage from "@/Common/EventImage";
import img from "../../Assets/event-banner.jpg"
// import MostPopular from '@/Component/MostPopular';
import ContactForm from '../contact-form/ContactForm';
import Component from "./Component";
import About from "../../Component/About";
import Head from 'next/head';
import Image from 'next/image';
import img1 from "../../Assets/event10.jpg"
import img2 from "../../Assets/event11.jpg"
import img3 from "../../Assets/event6.jpg"
import img4 from "../../Assets/evnt1.jpg"

const page = () => {
  return (
    <>
      <Head>
        {/* Title Tag */}
        <title>Event Decoration Services in Lucknow | Affordable and Premium Decorators  </title>
        <link rel="canonical" href="https://www.eventdekho.in/event-decoration-in-lucknow" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Event Dekho offers budget-friendly and premium event decoration services in Lucknow. From basic balloon decorations starting at just ₹2000 to elite premium setups, we provide the best decorators to make your event unforgettable."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Event Decoration in Lucknow, Affordable Event Decorators, Premium Decoration Services, Basic to Premium Event Decoration, Ballon Decorations Lucknow, Elite Event Decorators in Lucknow, Budget Event Planners Lucknow , Birthday Decorators in Lucknow , Anniversary Decorators in Lucknow , Flowers Decorators in Lucknow "
        />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="Best Event decorators in Lucknow | Event & Party decorators - EventDekho" />
        <meta
          property="og:description"
          content="Looking for the best event planners in Lucknow? EventDekho offers expert event, party, and wedding planning services in Lucknow."
        />
        <meta property="og:image" content="https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75" />
        <meta property="og:url" content="https://www.eventdekho.in/" />
        <meta property="og:type" content="website" />

        {/* For responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
      
      <div>
        <Header />
        <div className="font-sans p-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={img1.src} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={img2.src} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={img3.src} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={img4.src} alt=""/>
    </div>
    
</div>
          <div className="max-w-screen-lg mx-auto py-12">
            <Component />
          </div>
        </div>

        {/* <MostPopular/> */}
        <About />
        <ContactForm />
        <EventImage />
        <Footer />
      </div>
    </>
  )
}

export default page