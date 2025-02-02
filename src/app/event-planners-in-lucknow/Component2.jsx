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
            <p class="text-gray-700 text-3xl"> Based in the heart of Lucknow, we provide a full range of event planning services, whether it&apos;s a birthday, wedding anniversary , baby shower , corporate event, or any special occasion. Our experienced team handles everything from decoration, catering, and photography to managing the entire event, ensuring it&apos;s stress-free and magical.</p>
          </div>

          <div class="mt-16">
            <div class="grid md:grid-cols-2 items-center gap-16">
              <div>
                <Image height={100} width={100} src={img1.src} layout="responsive" class="w-full h-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='decoration-img-partykaronIndia' />
              </div>
              <div>
                <h3 class="text-gray-800 text-4xl font-bold mb-4">Decoration</h3>
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">Transform your event space with stunning decorations that align with your theme and style. Whether it&apos;s an intimate gathering or a grand celebration, our expert decorators will create the perfect ambiance for your party.
                Transform your event space with stunning decorations that perfectly reflect your unique theme and style. No matter the size, whether it&apos;s an intimate gathering or a grand celebration, our expert decorators will work closely with you to bring your vision to life.
                Let us turn your event into a magical experience that truly stands out.
                </p>
                <ul>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Basic Decoration : </span> Simple yet elegant décor with balloons, banners, and minimal table settings
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Premium Decoration : </span> Themed decorations with floral arrangements, stage setup, and lighting enhancements.
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal mb-3'>
                    <span className='font-bold md:text-2xl text-3xl'>Elite Decoration : </span> Luxurious décor including custom centerpieces, intricate stage designs, mood lighting, and more.
                  </li>
                </ul>
                <a href='/contact-form'
                  class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-web hover:bg-transparent hover:text-black transition-all duration-300">
                  Book now
                </a>
              </div>
              <div>
                <h3 class="text-gray-800 text-4xl font-bold mb-4">Catering</h3>
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">Delight your guests with a mouthwatering spread of food and beverages expertly tailored to suit your event. 
                  Our dedicated catering team is passionate about crafting a wide variety of cuisines, ensuring that every dish is prepared to perfection with the finest ingredients. From savory appetizers to indulgent desserts, we focus on delivering
                   exceptional quality and flavor in every bite.</p>
                <ul>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Basic Catering : </span> A well-curated selection of starters, main courses, and desserts
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Premium Catering : </span> Expanded menu options with live counters, specialized dishes, and mocktails
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal mb-3'>
                    <span className='font-bold md:text-2xl text-3xl '>Elite Catering : </span>Gourmet cuisine, exclusive live stations, personalized menus, and signature drinks.
                  </li>
                </ul>
                <a href='/contact-form'
                  class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-web hover:bg-transparent hover:text-black transition-all duration-300">
                  Book now
                </a>
              </div>
              <div>
                <Image height={100} width={100} src={img3.src} layout="responsive" class="w-full h-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='catering-img-partykaronIndia' />
              </div>
              <div>
                <Image height={100} width={100} src={img4.src} layout="responsive" class="w-full h-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='photography-img-partykaronIndia' />
              </div>
              <div>
                <h3 class="text-gray-800 text-4xl font-bold mb-4">Photography</h3>
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">Capture every special moment with our expert photography services, designed to preserve the essence of your event. Whether it&apos;s spontaneous candid shots or posed formal group pictures, our skilled photographers are dedicated to capturing the unique atmosphere of your celebration. We focus on every detail,
                   ensuring that each image tells the story of your event in a way that feels personal and meaningful.</p>
                <ul>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Basic Photography : </span>Professional event coverage with candid and posed shots.
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal'>
                    <span className='font-bold md:text-2xl text-3xl'>Premium Photography : </span>Full event coverage with pre-event shoots, candid and cinematic photography.
                  </li>
                  <li className='py-1 md:text-2xl text-3xl font-normal mb-3'>
                    <span className='font-bold md:text-2xl text-3xl'>Elite Photography : </span> Comprehensive photo and video coverage, including drone shots, albums, and highlight reels.
                  </li>
                </ul>
                <a href='/contact-form'
                  class="px-6 py-2 mt-8 rounded-lg text-white md:text-2xl text-3xl tracking-wider font-medium outline-none border-2 border-pink-600 bg-web hover:bg-transparent hover:text-black transition-all duration-300">
                  Book now
                </a>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Component2