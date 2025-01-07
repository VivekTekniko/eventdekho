import React from "react";
import img1 from "../Assets/treatment/decoration.webp";
import img2 from "../Assets/treatment/catering.jpg";
import img3 from "../Assets/treatment/photography.jpg";
import img4 from "../Assets/treatment/cleaning.jpg";
import Image from "next/image";


const TreatmentList = () => {
  const treatmentData = [{
    id:"1",
    image:img1,
    name:"Decoration",
    slug:"event-decoration-in-lucknow"
},
{
  id:"1",
  image:img2,
  name:"Catering",
  slug:"catering-services-in-lucknow"
  
},
{
  id:"1",
  image:img3,
  name:"Photography",
  slug:"/contact-form"
  
},
{
  id:"1",
  image:img4,
  name:"Cleanup after party",
  slug:"/contact-form"
},

]

  // const handleItemClick = (elem) => {
  //   setDrawerContent(elem.name);
  //   setDrawerOpen(true);
  // };

  // const closeDrawer = () => {
  //   setDrawerOpen(false);
  // };

 


 

  
  return (
    <div className="max-w-screen-lg md:mx-auto p-4">
      <h2 className="text-center text-black font-semibold text-5xl font-sans pb-4">
        Our Top Services
      </h2>
      <p className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-black font-medium font-sans">
      We handle everything with precision and creativity, delivering a stress-free experience so you can focus on enjoying your special day.
          </p>
     
      <div className="grid md:grid-cols-4 grid-cols-2 place-items-center p-4">
        {treatmentData?.map((elem,id) => {
          return (
            <a
              className="m-12"
<<<<<<< HEAD
              href="/contact-form"
=======
              href={elem.slug}
>>>>>>> vivek
              key={id}
            >
              <div className=" shadow-lg rounded-2xl">
              <div className="md:w-80 md:h-80 w-96 h-80">
                 <Image height={200} width={200} src={elem.image.src} alt={`${elem.name}-image`}  className="w-full h-full" style={{borderRadius:"50%"}} />
              </div>
              <h6 className="text-2xl p-4 py-8 text-center font-semibold text-black md:h-28 h-20" >
                {elem.name}
              </h6>
              </div>
            </a>
          );
        })}
      </div>
   
    </div>
  );
};

export default TreatmentList;
