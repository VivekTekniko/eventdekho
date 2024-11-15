"use client"
import React from "react";
import img4 from "../Assets/test4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Assets/test1.jpg";
import img2 from "../Assets/test2.jpg";
import img3 from "../Assets/test3.jpg";
import Image from "next/image";

const Testimonials: any = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const testimonialsData = [
    {
      mainimg: img1,
      name: "Nitin & Meera Verma",
      prof: "Doctor",
      star: "",
      comment:
        "We hired EventDekho for our anniversary event in Lucknow, and they exceeded our expectations! The decorations were stunning, the catering was delicious, and the photography captured every special moment perfectly. !",
      img: "",
    },
    {
      mainimg: img3,
      name: "Rahul Verma ",
      prof: "C.E.O.",
      star: "",
      comment:
        "Our corporate event was a huge success thanks to EventDekho. They managed everything from venue setup to catering, and the event ran smoothly. !",
      img: "",
    },
    {
      mainimg: img2,
      name: "Priya & Amit Sharma",
      prof: "Teacher",
      star: "",
      comment:
        "Team of EventDekho took care of everything, including cleaning up afterward. It was a stress-free experience, and we highly recommend them!",
      img: "",
    },
    {
      mainimg: img4,
      name: "Sonal Mehra",
      prof: "Designer",
      star: "",
      comment:
        "From the initial planning stages to the final cleanup,EventDekho handled everything perfectly for our anniversary party. The team was responsive and worked with us every step of the way.!",
      img: "",
    },
    {
      mainimg: img3,
      name: "Amit Gupta",
      prof: "Engineer",
      star: "",
      comment:
        "The attention to detail was impressive, and the team was highly professional throughout. Will definitely use their services again. Highly recommend them for any event!",
      img: "",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto py-10" style={{backgroundColor:"rgb(255, 250, 248)"}}>
      <div className="md:mb-14 text-center">
        <h2 className="text-black text-5xl font-bold">What our happy client say</h2>
      </div>
        <div className="my-16 font-[sans-serif] max-w-screen-lg mx-auto">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all 1s ease "
            transitionDuration={500}
            slidesToSlide={1}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {testimonialsData?.map((elem, id) => {
                return (
                    <>
                  
      <div className="relative">
        <div className="h-auto m-6 rounded-2xl p-6 shadow-xl bg-white">
          <div>
               <Image height={100} width={100} src={elem.mainimg.src} className="w-16 h-16 rounded-full" alt="event-planner-testimonial" />
            <h4 className="text-gray-800 text-2xl whitespace-nowrap font-bold mt-3">{elem.name}</h4>
            <p className="mt-0.5 text-2xl text-gray-600">{elem.prof}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-xl leading-relaxed">{elem?.comment}</p>
          </div>
        </div>
      </div>
                </>
              );
            })}
          </Carousel>
    </div>

      </div>
  );
};

export default Testimonials;
