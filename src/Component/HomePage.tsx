"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import img1 from "../Assets/custombanner.jpg";
// import img2 from "../Assets/custombanner2.jpg";
// import img3 from "../Assets/custombanner3.jpg";

import img1 from "../Assets/valentine.jpg";
import img2 from "../Assets/cateringlatest.jpg";
import img3 from "../Assets/cleaninglatest.jpg";
import img4 from "../Assets/decorationlatest.jpg";
import img5 from "../Assets/photographerlatest.jpg";

import Image from "next/image";
const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const imgData = [img2, img3,img4,img5, img3,img1, img2, img3];

  return (
    <div className="py-2">
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
        transitionDuration={3000}
        slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgData?.map((elem, id) => {
          return (
            <div className="" key={id}>
                 {/* <Image height={100} width={100} layout="responsive" src={elem.src} style={{borderRadius:"10px"}} alt="Event-dekho-banner"/> */}
                 <img  src={elem.src}  className="bannerImg" alt="Event-dekho-banner"/>
            </div>
          );
        })}
      </Carousel>
      
    </div>
  );
};

export default HomePage;
