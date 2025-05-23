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
  title: 'Event Planner in Hazaribagh | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Hazaribagh? EventDekho offers expert event, party, and wedding planning services in Hazaribagh. Contact us for personalized event planning.',
  keywords:
    'best event planners in Hazaribagh, event planner in Hazaribagh, party planner in Hazaribagh, wedding planner Hazaribagh, corporate events Hazaribagh, birthday events Hazaribagh, anniversary event Hazaribagh, surprise planning in Hazaribagh, event planner in Hazaribagh, event organiser in Hazaribagh, event management in Hazaribagh, event management company in Hazaribagh, best event management companies in Hazaribagh',
  openGraph: {
    title: 'Event Planners in Hazaribagh | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Hazaribagh? EventDekho offers expert event, party, and wedding planning services in Hazaribagh.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner in Hazaribagh | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Hazaribagh? EventDekho offers expert event, party, and wedding planning services in Hazaribagh.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '23.9925;85.3637',
  },
};
