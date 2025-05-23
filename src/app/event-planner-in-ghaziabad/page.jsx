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
  title: 'Best Event Planners in Ghaziabad | Event & Party Planner - EventDekho',
  description:
    'Looking for the best event planners in Ghaziabad? EventDekho offers expert event, party, and wedding planning services in Ghaziabad. Contact us for personalized event planning.',
  keywords:
    'best event planners in Ghaziabad, event planner in Ghaziabad, party planner in Ghaziabad, wedding planner Ghaziabad, corporate events Ghaziabad, birthday events Ghaziabad, anniversary event Ghaziabad, surprise planning in Ghaziabad, event planner in Ghaziabad, event organiser in Ghaziabad, event management in Ghaziabad, event management company in Ghaziabad, best event management companies in Ghaziabad',
  openGraph: {
    title: 'Best Event Planners in Ghaziabad | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Ghaziabad? EventDekho offers expert event, party, and wedding planning services in Ghaziabad.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
    url: 'https://www.eventdekho.in/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Event Planners in Ghaziabad | Event & Party Planner - EventDekho',
    description:
      'Looking for the best event planners in Ghaziabad? EventDekho offers expert event, party, and wedding planning services in Ghaziabad.',
    image:
      'https://www.eventdekho.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.eb280abe.png&w=256&q=75',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  geo: {
    region: 'IN',
    placename: 'India',
    position: '28.6692;77.4538',
  },
};
