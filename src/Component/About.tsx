import React from "react";
import img1 from "../Assets/treatment/decoration.webp";
import img2 from "../Assets/treatment/catering.jpg";
import img3 from "../Assets/treatment/photography.jpg";
import img4 from "../Assets/treatment/cleaning.jpg";
import Image from "next/image";
const YoutubeComponent = () => {
  return (
    <section className="bg-pink-200">
      <div className="max-w-screen-lg py-24 mx-auto ">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="md:block hidden">
            <div className="grid grid-cols-2  gap-4">
              <div className="h-80 w-80">
                <img
                  src={img1.src}
                  alt="decoration-EventDekho"
                  className="w-full h-full mt-8 ml-20  rounded-lg shadow-md"
                />
              </div>
              <div className="h-80 w-80">
                <img
                  src={img2.src}
                  alt="catering-EventDekho"
                  className="w-4/5 h-4/5 mt-24 rounded-lg shadow-md"
                />
              </div>
              <div className="h-80 w-80">
                <img
                  src={img3.src}
                  alt="photography-EventDekho"
                  className="w-4/5 h-4/5 ml-36 mt-6 rounded-lg shadow-md"
                />
              </div>
              <div className="h-80 w-80">
                <img
                  src={img4.src}
                  alt="EventDekho-cleaning"
                  className="w-full h-full mt-6 rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="m-auto p-12 md:p-0">
            <h3 className="text-web text-5xl font-bold">About Us</h3>
            <h2 className="text-4xl font-bold text-gray-900 my-8">
              Welcome to <span className="text-web">EventDekho</span>
            </h2>
            <p className="text-gray-600 text-3xl mb-4">
              We make your events smooth and unforgettable. Whether it&apos;s a wedding, a corporate event, a birthday, or any special occasion, our team is here to take care of everything.           </p>
            <p className="text-gray-600 text-3xl mb-6">
              From beautiful decorations and tasty food to expert photography and cleaning up after the event, we offer all the services you need to make your event a success from beginning to end.
            </p>

            {/* Experience and Chefs */}
            <div className="flex space-x-10 mb-20">
              <div>
                <span className="text-web text-5xl font-bold">3+</span>
                <p className="text-gray-700 font-semibold">Years of EXPERIENCE</p>
              </div>
              <div>
                <span className="text-web text-5xl font-bold">50+</span>
                <p className="text-gray-700 font-semibold">Event Planned</p>
              </div>
            </div>

            {/* Read More Button */}
            <a href="/contact-form" className="bg-web text-white py-8 px-12 rounded-xl text-2xl font-bold hover:bg-orange-600 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeComponent;
