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
  title: 'Event Planner in Gorakhpur | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Gorakhpur? EventDekho offers expert event, party, and wedding planning services in Gorakhpur. Contact us for personalized event planning.',
  keywords:
    'best event planners in Gorakhpur, event planner in Gorakhpur, party planner in Gorakhpur, wedding planner Gorakhpur, corporate events Gorakhpur, birthday events Gorakhpur, anniversary event Gorakhpur, surprise planning in Gorakhpur, event planner in Gorakhpur, event organiser in Gorakhpur, event management in Gorakhpur, event management company in Gorakhpur, best event management companies in Gorakhpur',
  openGraph: {
    title: 'Event Planners in Gorakhpur | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Gorakhpur? EventDekho offers expert event, party, and wedding planning services in Gorakhpur.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner in Gorakhpur | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Gorakhpur? EventDekho offers expert event, party, and wedding planning services in Gorakhpur.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '26.7606;83.3732',
  },
};
