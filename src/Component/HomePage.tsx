"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Assets/custombanner.jpg";
import img2 from "../Assets/custombanner2.jpg";
import img3 from "../Assets/custombanner3.jpg";
import Image from "next/image";
const HomePage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const imgData = [img1, img2, img3,img1,img2, img3,img1, img2, img3];

  return (
    <div className="max-w-screen-xl md:mx-auto p-4">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 1s ease "
        transitionDuration={5000}
        slidesToSlide={1}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {imgData?.map((elem, id) => {
          return (
            <div className="md:m-12 m-4" key={id} style={{margin:"2rem"}}>
                 <Image height={100} width={100} layout="responsive" src={elem.src} style={{borderRadius:"10px"}} alt="Event-dekho-banner"/>
            </div>
          );
        })}
      </Carousel>
      
    </div>
  );
};

export default HomePage;
