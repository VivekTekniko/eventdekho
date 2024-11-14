"use client";
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
import { IoStar } from "react-icons/io5";
import Footer from "@/Common/Footer";
import EventImage from "@/Common/EventImage";
import Head from "next/head";

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
      image: img3,
    },
    {
      name: "corporate",
      type: "elite",
      image: img3,
    },
    {
      name: "house",
      type: "basic",
      image: img4,
    },
    {
      name: "house",
      type: "premium",
      image: img4,
    },
    {
      name: "house",
      type: "elite",
      image: img4,
    },
    {
      name: "baby",
      type: "basic",
      image: img5,
    },
    {
      name: "baby",
      type: "premium",
      image: img5,
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
      image: img6,
    },
    {
      name: "ritual",
      type: "elite",
      image: img6,
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
          content={params.slug} 
        />
   <html lang="en-IN" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="26.8467;80.9462" />
      </Head>
      <Header />
      <div class="max-w-screen-lg mx-auto">
        <h3 className="p-8 text-center font-bold text-4xl">
          BEST-{params.slug.toUpperCase()}
        </h3>
      </div>
      <section className=" max-w-screen-lg mx-auto p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto space-y-12">
         
<div className="flex flex-wrap overflow-hidden rounded-md shadow-sm lg:flex-row">
            {imgGallery
              .filter((elem) => elem.name == name && elem.type == "basic")
              .map((item,id) => {
                return (
                 <div>
                   <Image
                  key={id}
                   height={300}
                   width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className="h-96 w-96 dark:bg-gray-500 rounded-lg "
                  />
                 </div>
                );
              })}
            <div className="flex flex-wrap justify-center flex-1 p-6 dark:bg-gray-50">
              <div class="pt-4">
              <h3 className="text-5xl md:text-3xl font-bold mb-8">Basic {name} plan</h3>
                <p class="font-semibold text-black text-left">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                   Basic decoration with any two colors ballons only
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Basic catering services (inluding starter,food, bevarges,
                    deserts)
                  </span>
                </p>
                
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Cake (1kg any flavour), popper , cap , knife, ribbon etc
                  </span>
                </p>
                
              </div>
              <div className="flex justify-end items-end ">
                <a
                  href="/contact-form"
                  className="w-full   md:p-4 p-8 font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
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
              .map((item,id) => {
                return (
                  <Image
                  key={id}
                  height={300}
                  width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className="h-96 w-96 dark:bg-gray-500 rounded-lg"
                  />
                );
              })}
            <div className="flex flex-wrap justify-center flex-1 p-6 dark:bg-gray-50">
              <div class="pt-4">
              <h3 className="text-5xl md:text-3xl font-bold mb-8">Premium {name} plan</h3>
                <p class="font-semibold text-black text-left">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Premium Decoration with ballons , banners , led etc
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Premium Food (including Starter , Food, bevarges,deserts )
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Cake (2 floor), popper , cap , knife, ribbon etc
                  </span>
                </p>
                
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Cleaning your party area after party DSLR camera only
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    DSLR camera only
                  </span>
                </p>
              </div>
              {/* <p className="my-2 md:text-2xl text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p> */}
              <div className=" ">
                <a
                  href="/contact-form"
                  className="w-full flex justify-end  md:p-4 p-8 font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap overflow-hidden rounded-md shadow-sm lg:flex-row">
            {imgGallery
              .filter((elem) => elem.name == name && elem.type == "elite")
              .map((item,id) => {
                return (
                  <Image
                  key={id}
                  height={300}
                  width={300}
                    src={item.image.src}
                    alt={item.name + item.type}
                    className=" h-96 w-96 dark:bg-gray-500 rounded-lg"
                  />
                );
              })}
            <div className="flex flex-wrap justify-center flex-1 p-6 dark:bg-gray-50">
              <div class="pt-4">
              <h3 className="text-5xl md:text-3xl font-bold mb-8 ">Elite {name} plan</h3>
                <p class="font-semibold text-black text-left">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Elite theme based decoration (customizable also)
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Elite catering services (inluding starter,food, bevarges,
                    deserts)
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Cleaning your party area after party
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    Cake (customizable), popper , cap , knife, ribbon etc
                  </span>
                </p>
                <p class="font-semibold text-black text-left pt-5">
                  <span class="pl-2 flex md:text-2xl text-3xl">
                    <IoStar
                      style={{
                        fontSize: "10px",
                        marginTop: "3px",
                        color: "pink",
                        marginRight: "4px",
                      }}
                    />{" "}
                    DSLR camera with specialist photographers
                  </span>
                </p>
              </div>
              {/* <p className="my-2 md:text-2xl text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p> */}
              <div className="flex justify-end items-end ">
                <a
                  href="/contact-form"
                  className="w-full   md:p-4 p-8 font-bold md:text-2xl text-4xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventImage />
      <Footer />
    </div>
  );
};

export default page;
