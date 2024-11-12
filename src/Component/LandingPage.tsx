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

const LandingPage = () => {
  return (
    <div>
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