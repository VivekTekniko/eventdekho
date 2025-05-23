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
            <p class="text-gray-700 text-3xl">
              Located in the heart of the city, <strong>EventDekho</strong> is your trusted <strong>event planner in Lucknow</strong> for all kinds of celebrations. Whether its a <strong>birthday party</strong>, <strong>wedding anniversary</strong>, <strong>baby shower</strong>, <strong>corporate event</strong>, or any other special occasion, our team delivers end-to-end planning and execution with precision. From elegant <strong>event decorations</strong> and delicious <strong>catering services</strong> to professional <strong>event photography and videography</strong>, we take care of every detail. With our experienced planners, your event is guaranteed to be <strong>stress-free, beautifully organized, and truly memorable</strong>.
            </p>
          </div>

          <div class="mt-16">
            <div class="grid md:grid-cols-2 items-center gap-16">
              <div>
                <Image height={100} width={100} src={img1.src} layout="responsive" class="w-full h-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt='decoration-img-partykaronIndia' />
              </div>
              <div>
                <h3 class="text-gray-800 text-4xl font-bold mb-4">Decoration</h3>
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">
                  Elevate your celebration with <strong>event decoration services in Lucknow</strong> that blend creativity, elegance, and precision. At <strong>EventDekho</strong>, we specialize in crafting visually stunning setups tailored to your theme – be it a romantic <strong>wedding decor</strong>, vibrant <strong>birthday party decoration</strong>, or chic <strong>corporate event styling</strong>. Whether you’re hosting an intimate gathering or a grand-scale event, our <strong>professional event decorators</strong> work closely with you to design an unforgettable ambiance. From floral arrangements and stage setups to lighting and backdrops – we ensure every detail reflects your vision. Let us turn your special occasion into a beautifully styled and Instagram-worthy experience.
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
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">
                  Impress your guests with an unforgettable culinary experience through our <strong>top catering services in Lucknow</strong>. At <strong>EventDekho</strong>, we offer a diverse range of customized menus to match the theme and style of your event. Whether it’s a grand wedding, corporate gala, or intimate celebration, our <strong>professional caterers</strong> bring you a fusion of taste, presentation, and service. From flavorful appetizers and gourmet entrees to decadent desserts and signature beverages, we use only the freshest ingredients to ensure every dish is crafted to perfection. Choose us for <strong>wedding catering in Lucknow</strong>, <strong>birthday party food services</strong>, or <strong>corporate event catering</strong> that leaves a lasting impression.
                </p>

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
                <p class="text-gray-700 md:text-2xl text-3xl font-medium">
                  Preserve the magic of your celebration with our <strong>professional event photography services in Lucknow</strong>. At <strong>EventDekho</strong>, we specialize in capturing both the big moments and the subtle details that make your event truly special. Whether you are looking for natural <strong>candid photography</strong> or beautifully composed <strong>portrait and group shots</strong>, our experienced photographers ensure every frame reflects the heart of your celebration. From <strong>wedding photography</strong> and <strong>engagement shoots</strong> to <strong>corporate event coverage</strong> and <strong>birthday party photography</strong>, we create a visual story that’s personal, emotional, and unforgettable.
                </p>

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