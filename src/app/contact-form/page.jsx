import React from 'react';
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import EventImage from "../../Common/EventImage";
import ContactForm from "./ContactForm";

const Page = () => {
  return (
    <div>
    <Header />  
    <ContactForm/>
<EventImage/>
<Footer/>
    </div>
  )
}

export default Page