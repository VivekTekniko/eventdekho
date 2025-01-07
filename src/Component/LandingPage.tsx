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
    <link rel="shortcut icon" href="/images/logo/eventdekho-logo.webp" type="image/x-icon" />
    <title>Event Planner in Lucknow - Event Dekho</title>
    <meta name="description" content="Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!" />
    <meta name="author" content="Event Dekho" />
    <meta name="keywords" content="Best Event Planners in Lucknow, Event & Party Planner, Events Planner in Lucknow, Party Planners in Lucknow, Birthday Party Planners, Wedding Planners, Anniversary Planners, Baby Shower Planners, Corporate Event Planners, Event Dekho, Event planner in Lucknow , event organiser in Lucknow , event management in Lucknow , event managment company in Lucknow , best event managment companies in Lucknow" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.eventdekho.in/" />
    <meta property="og:title" content="Event Planner in Lucknow - Event Dekho" />
    <meta property="og:description" content="Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!" />
    <meta property="og:image" content="https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75" />
    <meta property="og:image:type" content="image/webp" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    <meta property="og:image:alt" content="Event Dekho - Event Planning Services in Lucknow" />
    <meta property="og:url" content="https://www.eventdekho.in/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Event Dekho" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Event Planner in Lucknow - Event Dekho" />
    <meta name="twitter:description" content="Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!" />
    <meta name="twitter:image" content="https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75" />
    <meta name="twitter:image:alt" content="Event Dekho Event Planning Services in Lucknow" />

    {/* Language and Region */}
    <html lang="en-IN" />
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="Lucknow, India" />
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