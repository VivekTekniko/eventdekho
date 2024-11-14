import React from 'react';
import img1 from "../../Assets/aboutimg1.jpg";
import img3 from "../../Assets/aboutimg3.jpg";
import img2 from "../../Assets/cleaning.jpg";
import img4 from "../../Assets/photography.jpg";
import Image from 'next/image';



const Component2 = () => {
  return (
    <>
    
    <div>
        <div class="max-w-screen-lg  mx-auto font-[sans-serif] my-4">
      <div class="text-center max-w-8xl mx-auto">
        <h2 class="text-gray-800 text-5xl font-extrabold text-center mb-6">Our Exclusive Features</h2>
        <p class="text-gray-600 text-3xl"> Based in the heart of Lucknow, we provide a full range of event planning services, whether it&apos;s a birthday, wedding anniversary , baby shower , corporate event, or any special occasion. Our experienced team handles everything from decoration, catering, and photography to managing the entire event, ensuring it&apos;s stress-free and magical.</p>
      </div>

      <div class="mt-16">
        <div class="grid md:grid-cols-2 items-center gap-16">
          <div>
               <Image height={100} width={100} src={img1.src} layout="responsive" class="w-4/5 object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='decoration-img-partykaronIndia'/>
          </div>
          <div>
            <h3 class="text-gray-800 text-4xl font-bold mb-4">Decoration</h3>
            <p class="text-gray-600 md:text-2xl text-3xl">Transform your event space with stunning decorations that align with your theme and style. Whether it&apos;s an intimate gathering or a grand celebration, our expert decorators will create the perfect ambiance for your party.</p>
            <ul>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Basic Decoration : </span> Simple yet elegant décor with balloons, banners, and minimal table settings 
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Premium Decoration : </span> Themed decorations with floral arrangements, stage setup, and lighting enhancements.
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Elite Decoration : </span> Luxurious décor including custom centerpieces, intricate stage designs, mood lighting, and more.
              </li>
            </ul>
            <a href='/contact-form'
              class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-pink-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Book now
            </a>
          </div>
          <div>
            <h3 class="text-gray-800 text-4xl font-bold mb-4">Catering</h3>
            <p class="text-gray-600 md:text-2xl text-3xl">Delight your guests with a delicious spread of food and beverages tailored to your event. Our catering team is skilled in preparing a variety of cuisines, ensuring high quality and taste in every bite.</p>
            <ul>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Basic Catering : </span> A well-curated selection of starters, main courses, and desserts
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Premium Catering : </span> Expanded menu options with live counters, specialized dishes, and mocktails
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Elite Catering : </span>Gourmet cuisine, exclusive live stations, personalized menus, and signature drinks.
              </li>
            </ul>
            <a href='/contact-form'
              class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-pink-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Book now
            </a>
          </div>
          <div>
               <Image height={100} width={100} src={img3.src} layout="responsive" class="w-4/5 object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='catering-img-partykaronIndia' />
          </div>
          <div>
               <Image height={100} width={100} src={img4.src} layout="responsive" class="w-4/5 object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='photography-img-partykaronIndia'/>
          </div>
          <div>
            <h3 class="text-gray-800 text-4xl font-bold mb-4">Photography</h3>
            <p class="text-gray-600 md:text-2xl text-3xl">Capture every special moment with our professional photography services. Whether it&apos;s candid shots or formal group pictures, our photographers will ensure that you have timeless memories of your event.</p>
            <ul>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Basic Photography : </span>Professional event coverage with candid and posed shots.
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Premium Photography : </span>Full event coverage with pre-event shoots, candid and cinematic photography.
              </li>
              <li className='py-1 md:text-2xl text-3xl font-normal'>
                <span className='font-bold md:text-2xl text-3xl'>Elite Photography : </span> Comprehensive photo and video coverage, including drone shots, albums, and highlight reels.
              </li>
            </ul>
            <a href='/contact-form'
              class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-pink-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Book now
            </a>
          </div>
          <div>
            <h3 class="text-gray-800 text-4xl font-bold mb-4">Cleaning Services</h3>
            <p class="text-gray-600 text-2xl">Let us take care of the post-event cleanup so you can relax after the party. Our team ensures that the venue is spotless and restored to its original condition in no time.</p>
            <ul>
              <li className='py-1 text-2xl font-normal'>
                <span className='font-bold text-2xl'>Basic Cleaning : </span>Basic cleaning of the main event area.
              </li>
              <li className='py-1 text-2xl font-normal'>
                <span className='font-bold text-2xl'>Premium Cleaning : </span> Thorough cleaning of the venue, including kitchen and restrooms.
              </li>
              <li className='py-1 text-2xl font-normal'>
                <span className='font-bold text-2xl'>Elite Cleaning : </span>Complete cleaning service, including deep cleaning, waste removal, and sanitization.
              </li>
            </ul>
            <a href='/contact-form'
              class="px-6 py-2 mt-8 rounded-lg text-white text-2xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-pink-600 hover:bg-transparent hover:text-black transition-all duration-300">
              Book now
            </a>
          </div>
          <div>
               <Image height={100} width={100} src={img2.src} layout="responsive" class="w-4/5 object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='cleaning-img-partykaronIndia'/>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Component2