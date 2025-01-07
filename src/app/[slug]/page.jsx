import Header from "@/Common/Header";
import Image from "next/image";
import React from "react";
import img1 from "../../Assets/birthday.webp";
import img11 from "../../Assets/event3.jpg";
import img12 from "../../Assets/event10.jpg";
import img2 from "../../Assets/anniversary.webp";
import img21 from "../../Assets/pre-ann.jpg";
import img22 from "../../Assets/elite-ann.jpg";
import img3 from "../../Assets/corporate.jpg";
import img4 from "../../Assets/housewarming.jpeg";
import img5 from "../../Assets/babyshower.jpg";
import img6 from "../../Assets/rituals.jpg";
import babypre from "../../Assets/baby2.jpg";
import babyeli from "../../Assets/baby3.jpg";
import corporate4 from "../../Assets/corporate4.jpg";
import corporate5 from "../../Assets/corporate5.jpg";
import house4 from "../../Assets/housewarmig4.jpg";
import house5 from "../../Assets/housewarming5.jpg"
import { IoStar } from "react-icons/io5";
import Footer from "@/Common/Footer";
import EventImage from "@/Common/EventImage";
import Head from "next/head";
import Content from "./Content";

const page = ({ params }) => {

  let name = params.slug.split("-")[0];

  let imgGallery = [
    {
      name: "birthday",
      type: "basic",
      image: img1,
    },
    {
      name: "birthday",
      type: "premium",
      image: img11,
    },
    {
      name: "birthday",
      type: "elite",
      image: img12,
    },
    {
      name: "anniversary",
      type: "basic",
      image: img2,
    },
    {
      name: "anniversary",
      type: "premium",
      image: img21,
    },
    {
      name: "anniversary",
      type: "elite",
      image: img22,
    },
    {
      name: "corporate",
      type: "basic",
      image: img3,
    },
    {
      name: "corporate",
      type: "premium",
      image: corporate4,
    },
    {
      name: "corporate",
      type: "elite",
      image: corporate5,
    },
    {
      name: "house",
      type: "basic",
      image: img4,
    },
    {
      name: "house",
      type: "premium",
      image: house4,
    },
    {
      name: "house",
      type: "elite",
      image: house5,
    },
    {
      name: "baby",
      type: "basic",
      image: babypre,
    },
    {
      name: "baby",
      type: "premium",
      image: babyeli,
    },
    {
      name: "baby",
      type: "elite",
      image: img5,
    },
    {
      name: "ritual",
      type: "basic",
      image: img6,
    },
    {
      name: "ritual",
      type: "premium",
      image: house5,
    },
    {
      name: "ritual",
      type: "elite",
      image: house4,
    },
  ];

  return (
    <div>
      <Head>
        {/* Title Tag */}
        <title>{params.slug} in Lucknow</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={`we are the best ${params.slug} planner in Lucknow`}
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content={`${params.slug},Best event planner in lucknow , Best birthday planner in lucknow , Best Anniversary planner in Lucknow , Best House Warming planner in lucknow , Best Ritual Events planner in Lucknow , Best Corporate Event planner in Lucknow,Event Decoratos in lucknow , Best catering services in lucknow , Photography/videography in lucknow , Post Party cleanup in lucknow `}
        />
        <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
      <Header />
      <div class="max-w-screen-lg mx-auto">
        <header>
          <h3 className="p-8 text-center font-bold text-4xl">
            BEST-{params.slug.toUpperCase()}
          </h3>
        </header>
      </div>
      <section className=" max-w-screen-lg mx-auto p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">

          <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm lg:flex-row">
            {imgGallery
              .filter((elem) => elem.name == name && elem.type == "basic")
              .map((item, id) => {
                return (
                  <Image
                    key={id}
                    height={300}
                    width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className="md:h-96 md:w-96 w-full h-full dark:bg-gray-500 rounded-lg "
                  />
                );
              })}
            <div className="flex flex-wrap justify-center flex-1 pl-6 dark:bg-gray-50">
              <div class=" max-w-5xl md:pt-0 pt-4">
                <h3 className="text-5xl md:text-3xl font-bold mb-4">Basic {name} plan</h3>
                <p class="font-normal text-justify text-gray-800 text-2xl">
                  We are the best <strong>event planner in Lucknow</strong>, dedicated to providing exceptional service and creating unforgettable birthday celebrations. Our basic decoration includes balloons in any two colors,
                  setting the perfect mood for your party. We also offer basic catering services that include <strong>starters, food, beverages, and desserts</strong>, ensuring your guests are delighted with every bite. To make the occasion even more special,
                  we provide a <strong>1kg cake</strong> in any flavor, along with poppers, caps, knives, ribbons, and more. As the top <strong>event planner in Lucknow</strong>, we understand the importance of every detail and work tirelessly to bring your vision to life.
                  Whether it&apos;s a birthday or any special occasion, we handle it all with the utmost care and expertise, ensuring a seamless event experience from start to finish.
                </p>

              </div>

              <div className="flex justify-end items-end ">
                <a
                  href="/contact-form"
                  className=" md:px-6 py-4 font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-8  text-center me-2 mb-2"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            {imgGallery
              .filter(
                (elem) => elem.name == name && elem.type == "premium"
              )
              .map((item, id) => {
                return (
                  <Image
                    key={id}
                    height={300}
                    width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className="md:h-96 md:w-96 w-full h-full dark:bg-gray-500 rounded-lg"
                  />
                );
              })}
            <div className="flex flex-wrap justify-center flex-1  dark:bg-gray-50">
              <div class=" max-w-5xl md:pt-0 pt-4">
                <h3 className="text-5xl md:text-3xl  font-bold mb-4">Premium {name} plan</h3>
                <p class="font-normal text-justify text-gray-800 text-2xl">
                  We are the best <strong>event planner in Lucknow</strong>, known for turning every event into a grand celebration with premium services. Our premium decoration package includes elegant balloons, banners, LED lighting, and more,
                  creating a stunning atmosphere for your event. We also offer <strong>premium food services</strong>, including starters, main courses, beverages, and desserts, ensuring that your guests have a delightful culinary experience. For the cake, we provide a beautiful <strong>2-tier cake, along with poppers, caps, knives, ribbons</strong>, and all the essentials to make your
                  celebration complete. As the top <strong>event planner in Lucknow</strong>, we also take care of cleaning up the party area after the event, so you can relax and enjoy. Plus, we offer professional <strong>DSLR camera services</strong> to capture every precious moment of your special day,
                  ensuring you have beautiful memories to cherish. With our attention to detail and commitment to excellence, we guarantee an unforgettable experience for you and your guests.
                </p>
                <div className="flex justify-end items-end ">
                  <a
                    href="/contact-form"
                    className="md:px-6 py-4  font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-8 text-center me-2 mb-2"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm lg:flex-row">
            {imgGallery
              .filter((elem) => elem.name == name && elem.type == "elite")
              .map((item, id) => {
                return (
                  <Image
                    key={id}
                    height={300}
                    width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className=" md:h-96 md:w-96 w-full h-full dark:bg-gray-500 rounded-lg"
                  />
                );
              })}
            <div className="flex flex-wrap justify-center flex-1 pl-6 dark:bg-gray-50">
              <div class=" max-w-5xl md:pt-0 pt-4">
                <h3 className="text-5xl md:text-3xl font-bold mb-4">Elite {name} plan</h3>
                <p class="font-normal text-justify text-gray-800 text-2xl">
                  We are the best <strong>event planner in Lucknow</strong>, offering elite theme-based decoration services that are fully customizable to match your vision and style. Whether you&apos;re planning a birthday, corporate event, or any special occasion, we design stunning setups with attention to detail,
                  creating a truly memorable atmosphere. Our elite catering services include a range of exquisite <strong>starters, main courses, beverages, and desserts</strong>, ensuring a delicious experience for your guests. In addition to the food, we provide a customizable cake, poppers, caps, knives, ribbons, and everything needed to complete the celebration. As the top <strong>event planner in Lucknow</strong>,
                  we also handle cleaning the party area after the event, so you don&apos;t have to worry about anything. To capture the beauty of your special moments, we offer professional DSLR camera services with <strong>specialist photographers</strong>,
                  making sure your memories are preserved in the highest quality. With our dedication to perfection, we guarantee an extraordinary event from start to finish
                </p>

              </div>
              <div className="flex justify-end items-end ">
                <a
                  href="/contact-form"
                  className="md:px-6 py-4 font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-8  text-center me-2 mb-2"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
        <Content type={name} />
      </section>
      <EventImage />
      <Footer />
    </div>
  );
};

export default page;
