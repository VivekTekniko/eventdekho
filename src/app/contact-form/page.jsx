import React from 'react';
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import EventImage from "../../Common/EventImage";
import ContactForm from "./ContactForm";

const Page = () => {
  return (
    <div>
       <Head>
        {/* Title Tag */}
        <title>Contact Us</title>
        <link rel="canonical" href="https://www.eventdekho.in/contact-form" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Fill the form our team will contact you soon"
        />
   <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />

        {/* Open Graph Meta Tags for Social Sharing */}
      </Head>
    <Header />  
    <ContactForm/>
<EventImage/>
<Footer/>
    </div>
  )
}

export default Page