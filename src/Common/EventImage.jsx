"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Assets/evnt1.jpg";
import img2 from "../Assets/event2.jpg";
import img5 from "../Assets/event5.jpg";
import img3 from "../Assets/event3.jpg";
import img4 from "../Assets/event4.jpg";
import img6 from "../Assets/event6.jpg";
import img7 from "../Assets/event7.jpg";
import img8 from "../Assets/event8.jpg";
import img11 from "../Assets/event11.jpg";
import img10 from "../Assets/event10.jpg";
import Image from "next/image";


const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const imgData1 = [img1, img2, img3,img4,img5];
  const imgData2= [img6, img7, img8,img10,img11];

  return (
    <>
    <div className="text-start mt-12">
        <h1 className="text-black text-4xl font-bold px-6 py-4 ">See Our works</h1>
    </div>
    <div className="max-w-screen-xl md:mx-auto p-4">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1s ease "
        transitionDuration={500}
        slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgData1?.map((elem, id) => {
          return (
            <div className="md:m-12 m-4" key={id} style={{margin:"2rem"}}>
                 <Image height={100} width={100} layout="responsive" src={elem.src} className=""/>
            </div>
          );
        })}
      </Carousel>
      

    </div>
    <div className="max-w-screen-xl md:mx-auto p-4">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1s ease "
        transitionDuration={500}
        slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
    {imgData2?.map((elem, id) => {
      return (
        <div className="md:m-12 m-4" key={id} style={{ margin: "2rem" }}>
             <Image height={100} width={100} layout="responsive" src={elem.src} className="" />
        </div>
      );
    })}
      </Carousel>
      

    </div>
    </>
  );
};

export default HomePage;
