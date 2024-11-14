import Header from '@/Common/Header'
import React from 'react'
import HomePage from './HomePage'
import TreatmentList from "./TreatmentList";
import MostPopular from './MostPopular';
import Footer from '@/Common/Footer';
import About from './About';
import Testimonials from './Testimonials';
import ContentPage from './ContentPage';
import PriceList from './PriceList';
import HowWorks from "./HowWorks";
import EventImage from "../Common/EventImage";
import Head from 'next/head';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Planner in Lucknow",
  description: "Best Event Planners in Lucknow | Event & Party Planner | Events Planner in Lucknow | Party Planners in Lucknow - EventDekho | Surprise Planner in Lucknow",
  icons: {
    icon: "https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75",
  },
};

const LandingPage = () => {
  
  return (
    <div>
      <Head>
        <title>Event Planner in Lucknow </title>
        <link rel="canonical" href="https://www.eventdekho.in/" />
        <meta name="description" content="Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning. Book everything you need to host your perfect party, all in one place. Enjoy seamless event planning from start to finish!" />
        <meta name="keywords" content="Best Event Planners in Lucknow | Event & Party Planner | Events Planner in Lucknow | Party Planners in Lucknow - EventDekho | Surprise Planner in Lucknow" />
        <meta property="og:title" content="Event Planner in Lucknow " />
        <meta property="og:description" content="Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning. Book everything you need to host your perfect party, all in one place. Enjoy seamless event planning from start to finish!" />
        <meta property="og:image" content="https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75" />
        <meta property="og:url" content="https://www.eventdekho.in/" />

{/* Language and Region */}
        <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
        <Header/>
        <HomePage/>
        <MostPopular/>
        <PriceList/>
        <TreatmentList />
        <HowWorks/>
        <About/>
        <Testimonials/>
        <ContentPage/>
        <EventImage/>
        <Footer/>
    </div>
  )
}

export default LandingPage