import React from 'react';
import Header from "../../Common/Header"
import HomePage from "../../Component/HomePage";
import EventCategory from "./EventCategory";
import HowWorks from "../../Component/HowWorks";
import About from "../../Component/About";
import Testimonials from "../../Component/Testimonials";
import EventImage from "../../Common/EventImage";
import Footer from "../../Common/Footer";
import ContentPage from './ContentPage';
import ContentKeywordpage from './ContentKeywordpage';



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
  title: 'Best Event Planners in Noida | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Noida? EventDekho offers expert event, party, and wedding planning services in Noida. Contact us for personalized event planning.',
  keywords:
    'best event planners in Noida, event planner in Noida, party planner in Noida, wedding planner Noida, corporate events Noida, birthday events Noida, anniversary event Noida, surprise planning in Noida, event planner in Noida, event organiser in Noida, event management in Noida, event management company in Noida, best event management companies in Noida',
  openGraph: {
    title: 'Best Event Planners in Noida | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Noida? EventDekho offers expert event, party, and wedding planning services in Noida.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Event Planners in Noida | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Noida? EventDekho offers expert event, party, and wedding planning services in Noida.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '28.5355;77.3910',
  },
};
