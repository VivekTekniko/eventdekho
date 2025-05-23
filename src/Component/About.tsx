import React from "react";
// import img1 from "../Assets/treatment/decoration.webp";
// import img2 from "../Assets/treatment/catering.jpg";
// import img3 from "../Assets/treatment/photography.jpg";
// import img4 from "../Assets/treatment/cleaning.jpg";
import img1 from "../Assets/wedd1.jpeg";
import img2 from "../Assets/event5.jpg";
import img4 from "../Assets/wedd2.jpeg";
import img3 from "../Assets/event6.jpg";
import Image from "next/image";
const YoutubeComponent = () => {
  return (
    <section className="bg-pink-200">
      <div className="max-w-screen-lg py-24 mx-auto ">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="md:block hidden">
            <div className="grid grid-cols-2  gap-4">
              <div className="h-full w-full">
                <Image
                  height={100}
                  width={100}
                  src={img1.src}
                  alt="decoration-EventDekho"
                  className="w-full h-full   rounded-lg shadow-md"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  height={100}
                  width={100}
                  src={img2.src}
                  alt="catering-EventDekho"
                  className="h-full w-full  rounded-lg shadow-md"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  height={100}
                  width={100}
                  src={img3.src}
                  alt="photography-EventDekho"
                  className="h-full w-full mt-6 rounded-lg shadow-md"
                />
              </div>
              <div className="h-full w-full">
                <Image
                  height={100}
                  width={100}
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
              At <strong>EventDekho</strong>, we specialize in creating{" "}
              <strong>seamless and unforgettable events in city</strong>.
              Whether its a <strong>wedding celebration</strong>, a{" "}
              <strong>corporate gathering</strong>, a{" "}
              <strong>birthday party</strong>, or any other special occasion,
              our experienced team is here to handle every detail with care and
              professionalism.
            </p>
            <p className="text-gray-600 text-3xl mb-6">
              From stunning <strong>event decorations</strong> and delicious{" "}
              <strong>catering services</strong> to skilled{" "}
              <strong>event photography</strong> and hassle-free{" "}
              <strong>post-event cleanup</strong>, we offer complete{" "}
              <strong>event management services in your city</strong>. Trust us to
              manage your event from start to finish, so you can relax and enjoy
              every moment.
            </p>

            {/* Experience and Chefs */}
            <div className="flex space-x-10 mb-20">
              <div>
                <span className="text-web text-5xl font-bold">3</span>
                <p className="text-gray-700 font-semibold">
                  Years of EXPERIENCE
                </p>
              </div>
              <div>
                <span className="text-web text-5xl font-bold">50+</span>
                <p className="text-gray-700 font-semibold">Event Planned</p>
              </div>
            </div>

            {/* Read More Button */}
            <a
              href="/contact-form"
              className="bg-web text-white py-8 px-12 rounded-xl text-2xl font-bold hover:bg-orange-600 transition duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeComponent;
