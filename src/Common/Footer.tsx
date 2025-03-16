import React from 'react';
import logo from "../Assets/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-web">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-12 sm:px-6 lg:space-y-16 lg:px-8">
  <div className='block md:hidden'>
        <div className=" mt-3">
            <Image height={100} width={200} src={logo.src} className='bg-white mt-2' alt="Event-dekho-partyplanner"/>
        </div>

        <p className="mt-4 md:max-w-xs max-w-2xl text-white text-2xl font-medium">
        From the initial planning phase to the final cleanup, we handle everything so you can enjoy your event.
        </p>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="https://www.instagram.com/eventdekho.official/"
              rel="noreferrer"
              target="_blank"
              className="text-white text-2xl font-medium transition hover:opacity-75"
              style={{margin:"10px 0"}}
            >
              <span className="sr-only">Instagram</span>

              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className='text-white' style={{margin:"0px 10px"}}>9140734396</li>
          <li className='mx-2'>/</li>
          <li className='ml-2 text-white'> 9870516108</li>
        </ul>
      </div>
    <div className=" flex justify-between grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className='hidden md:block'>
        <div className="text-teal-600">
            <Image height={100} width={200} src={logo.src} className='bg-white' alt="Event-dekho-partyplanner"/>
        </div>

        <p className="mt-4 max-w-xs text-white text-2xl font-medium">
        From the initial planning phase to the final cleanup, we handle everything so you can enjoy your event.
        </p>

        <ul className="mt-8 flex gap-6">
          {/* <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white text-2xl font-medium transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li> */}

          <li>
            <a
              href="https://www.instagram.com/eventdekho.official/"
              rel="noreferrer"
              target="_blank"
              className="text-white text-2xl font-medium transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className='text-white'>9140734396</li>
          <li className='text-white'>9870516108</li>

          {/* <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white text-2xl font-medium transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
      <div>
          <p className="font-semibold text-white">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/contact-form" className="text-white text-2xl font-medium transition hover:opacity-75">Decoration </a>
            </li>

            <li>
              <a href="/contact-form" className="text-white text-2xl font-medium transition hover:opacity-75"> Catering </a>
            </li>

            <li>
              <a href="/contact-form" className="text-white text-2xl font-medium transition hover:opacity-75"> Photography </a>
            </li>

            <li>
              <a href="/contact-form" className="text-white text-2xl font-medium transition hover:opacity-75"> Cleaning  </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Packages</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/birthday-event-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Birthday </a>
            </li>

            <li>
              <a href="/anniversary-event-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Anniversary </a>
            </li>

            <li>
              <a href="/corporate-event-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Corpotate Events </a>
            </li>
            <li>
              <a href="/house-warming-event-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75">House warming </a>
            </li>
             <li>
              <a href="/baby-shower-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Baby Shower </a>
            </li>
            <li>
              <a href="/ritual-event-planner-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Rituals Events </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Helpful Links</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="/contact-form" className="text-white text-2xl font-medium transition hover:opacity-75"> Contact Us </a>
            </li>

            <li>
              <a href="#" className="text-white text-2xl font-medium transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="event-planners-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> About Us </a>
            </li>
            <li>
              <a href="catering-services-in-lucknow" className="text-white text-2xl font-medium transition hover:opacity-75"> Our Menu </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Legal</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="terms&condition" className="text-white text-2xl font-medium transition hover:opacity-75"> Terms & Conditions </a>
            </li>

            <li>
              <a href="privacy-policy" className="text-white text-2xl font-medium transition hover:opacity-75"> Privacy & Policy </a>
            </li>

          </ul>
        </div>

    </div>

    <p className=" text-white text-2xl font-medium">&copy; 2022. Company Name. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer