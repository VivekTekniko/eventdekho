import React from 'react';
import Header from "../../Common/Header"
import HomePage from "../../Component/HomePage";
import EventCategory from "./EventCategory";
import HowWorks from "../../Component/HowWorks";
import About from "../../Component/About";
import Testimonials from "../../Component/Testimonials";
import EventImage from "../../Common/EventImage";
import Footer from "../../Common/Footer";
import ContentKeywordpage from './ContentKeywordpage';
import ContentPage from './ContentPage';



const page = () => {
  return (
    <div>
        <Header/>
        <HomePage/>
        <EventCategory/>
<ContentPage/>

        <HowWorks/>
        <About/>
        <Testimonials/>
        <ContentKeywordpage/>
        <EventImage/>
        <Footer/>

    </div>
  )
}

export default page


export const metadata = {
  title: 'Event Planner in Deoria | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Deoria? EventDekho offers expert event, party, and wedding planning services in Deoria. Contact us for personalized event planning.',
  keywords:
    'best event planners in Deoria, event planner in Deoria, party planner in Deoria, wedding planner Deoria, corporate events Deoria, birthday events Deoria, anniversary event Deoria, surprise planning in Deoria, event planner in Deoria, event organiser in Deoria, event management in Deoria, event management company in Deoria, best event management companies in Deoria',
  openGraph: {
    title: 'Event Planners in Deoria | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Deoria? EventDekho offers expert event, party, and wedding planning services in Deoria.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner in Deoria | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Deoria? EventDekho offers expert event, party, and wedding planning services in Deoria.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '26.5024;83.7791',
  },
};
