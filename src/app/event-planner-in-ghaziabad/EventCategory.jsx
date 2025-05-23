import React from 'react';
import img1 from "../../Assets/birthday.webp";
import img2 from "../../Assets/anniversary.webp";
import img3 from "../../Assets/corporate.jpg";
import img4 from "../../Assets/housewarming.jpeg";
import img5 from "../../Assets/babyshower.jpg";
import img6 from "../../Assets/rituals.jpg";
import img7 from "../../Assets/wedding.jpeg";
import img8 from "../../Assets/engagment.jpeg"
import Image from "next/image";
import Link from 'next/link';
const MostPopular = () => {
    const treatmentData = [
        {
            key: 3,
            image: img7,
            text: "Wedding Events",
            link: "wedding-planner-in-Ghaziabad",
            price: 4999,
            imgarr: [img1, img2, img3],
            desc: "Best Wedding Events Planners in Ghaziabad"
        },
        {
            key: 3,
            image: img8,
            text: "Engagment",
            link: "engagement-planner-in-Ghaziabad",
            price: 4999,
            imgarr: [img1, img2, img3],
            desc: "Engagement Events Planners in Ghaziabad"
        },
        {
            key: 1,
            image: img1,
            text: "Birthday",
            link: "birthday-event-planner-in-Ghaziabad",
            price: 4999,
            imgarr: [img1, img2, img3],
            desc: "Best Birthday Events Planners in Ghaziabad"
        },
        {
            key: 2,
            image: img2,
            text: "Anniversary",
            link: "anniversary-event-planner-in-Ghaziabad",
            price: 7999,
            imgarr: [img1, img2, img3],
            desc: "Best Anniversary Planners in Ghaziabad"
        },
        {
            key: 3,
            image: img3,
            text: "Corporate Events",
            link: "corporate-event-planner-in-Ghaziabad",
            price: 9999,
            imgarr: [img1, img2, img3],
            desc: "Best Corporate Events Planners in Ghaziabad"
        },
        {
            key: 3,
            image: img4,
            text: "House Warming Cermony",
            link: "house-warming-event-planner-in-Ghaziabad",
            price: 6999,
            imgarr: [img1, img2, img3],
            desc: "Best House warming Planners in Ghaziabad"
        },
        {
            key: 3,
            image: img5,
            text: "Baby Shower",
            link: "baby-shower-event-planner-in-Ghaziabad",
            price: 5999,
            imgarr: [img1, img2, img3],
            desc: "Best Baby shower Planners in Ghaziabad"
        },
        {
            key: 3,
            image: img6,
            text: "Rituals Events",
            link: "ritual-event-planner-in-Ghaziabad",
            price: 4999,
            imgarr: [img1, img2, img3],
            desc: "Best Ritual Events Planners in Ghaziabad"
        },


    ];


    return (
        <section className='max-w-screen-xl md:mx-auto  md:py-10' style={{ backgroundColor: "rgba(255, 250, 248, 1)" }}>
            <div className="max-w-screen-xl md:mx-auto p-4">
                <h1 className="text-center text-black font-semibold text-5xl font-sans pb-8" >
                    Our Most Popular Party Packages List
                </h1>
                <h2 className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-black font-medium font-sans">
                    Our experienced team handles everything from decoration, catering, and photography to managing the entire event, ensuring it&apos;s stress-free and magical.
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 p-4">
                    {treatmentData.map((elem, id) => {
                        return (
                            <div className="flex justify-center items-center transition-transform duration-500 hover:scale-110" key={id}>
                                <div className="container flex justify-center">
                                    <div className="max-w-sm py-8 rounded-2xl">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <div className='h-72'>
                                                <Image
                                                    height={234}
                                                    width={189}
                                                    src={elem.image.src}
                                                    alt='mostpopular-image'
                                                    className="w-full h-full rounded-2xl" />
                                            </div>
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <h3 className="text-gray-700 font-bold md:text-2xl text-center text-3xl mb-3 hover:text-gray-900 hover:cursor-pointer">{elem.text}</h3>
                                                <p className="text-gray-700 text-xl text-web font-semibold text-center md:text-2xl">{elem?.desc}</p>
                                                {/* <div className='w-full'>
                                                    <Link className="mt-6 py-3 px-4 block text-center bg-web text-white text-2xl rounded-lg shadow-md hover:shadow-lg transition duration-300"
                                                        href={`/${elem.link}`}>View details</Link>
                                                </div> */}
                                            </div>
                                            {/* <div className="absolute top-2 right-2 py-2 px-2 text-2xl bg-white rounded-lg">
                    <span className="text-md">{elem.price}</span>
                  </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default MostPopular