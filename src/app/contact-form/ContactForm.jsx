"use client"
import React, { useState } from 'react';
// import EventImage from "../../Common/EventImage";
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';
const ContactForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    occasion: '',
    plan: '',
    address:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
// console.log(process.env.SERVICE_ID, "process.env.SERVICE_ID")
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_quup0v5", "template_hfqkv4f", e.target, "_qLfEI_a3r4W0Ut9m")
       .then((result) => {
        router.push("/thankyou")
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
    // Handle form submission
  };
  return (
    <div className='bg-web'>  
    <div className="md:flex block justify-center items-start p-14  md:p-28">
      <div className="w-full md:w-1/2 text-white pr-10">
        <h2 className="text-6xl font-bold mb-6">Step By Step Process</h2>
        <div className="mb-4">
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">1</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Fill Out The Form</span>
              <br />
              Customers select their desired decoration type and provide event details through an online form.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">2</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Executive Call</span>
              <br />
              Our team contacts customers to gather more information, offer recommendations, and address any queries or concerns.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">3</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Decoration</span>
              <br />
              Our dedicated team creates and sets up the decorations according to the customer&apos;s chosen style and preferences.
            </p>
          </div>
          <div className="flex items-start my-8">
            <span className="text-4xl font-bold bg-white text-web rounded-full h-16 w-24 p-4 flex justify-center items-center">4</span>
            <p className="ml-4">
              <span className="font-bold text-4xl">Customer Satisfaction</span>
              <br />
              We ensure the customer&apos;s approval and happiness by providing a visually appealing and personalized decoration experience.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-5xl font-bold mb-4">Request Callback</h2>
        <p className="md:text-3xl text-4xl mb-6">Please fill your details, we will get back to you shortly.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 md:text-2xl text-4xl font-bold my-4">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 md:text-2xl text-4xl font-bold my-4">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 md:text-2xl text-4xl font-bold my-4">Enter Your Address <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
              placeholder="Enter Your Full Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 md:text-2xl text-4xl font-bold my-4">Select your Occasion</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            >
              <option value="" disabled>Select</option>
              <option value="ValentineEvents">Valentine Event</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="CorporateEvents">Corporate Events</option>
              <option value="HouseWarming">House Warming</option>
              <option value="RitualEvents">Ritual Events</option>
              <option value="Decoration">Decoration</option>
              <option value="Catering">Catering</option>
              <option value="Photography">Photography</option>
              <option value="Cleaning">Cleaning</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 md:text-2xl text-4xl font-bold my-4">Select your Plan Type</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full px-3 md:py-4 py-10 md:text-2xl text-4xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-pink-500"
            >
              <option value="" disabled>Select</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Elite">Elite</option>
              <option value="NotDecided">Not Decided Now</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-web text-white md:py-2 py-10 px-4 rounded-md shadow hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default ContactForm