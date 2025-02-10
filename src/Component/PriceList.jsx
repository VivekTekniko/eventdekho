import React from "react";
import { FaCheck } from "react-icons/fa";

const PriceList=()=>{
    return(
        <section className='max-w-screen-xl md:mx-auto bg-pink-200 py-10'>
        <div className="max-w-screen-lg md:mx-auto p-4">
          <h3 className="text-center text-black font-semibold text-5xl font-sans pb-8" >
            Our Most Popular Party Packages
          </h3>
          <p className="md:max-w-screen-sm max-w-3xl  mx-auto text-2xl text-center text-black font-medium font-sans">
          You can customize everything to suit your needs. This package is just an overview of the services we offer to our customers and serves as a demo.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-2 p-4">
           
          <div class=" p-4 m-4 bg-white text-center rounded-3xl transition-transform duration-500 hover:scale-110  shadow-xl">
                    <h3 class="text-web font-bold text-4xl">Basic</h3>
                    <p class="pt-2 tracking-wide flex justify-center align-center">
                        <span class="text-black align-top text-2xl">₹ </span>
                        <span class="text-2xl font-semibold">699</span>
                        <span class="text-black text-2xl font-medium">/ person</span>
                    </p>
                    <hr class="mt-4 border-1"/>
                    <div class="pt-8">
                        <p class="font-semibold text-black text-left">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"15px",marginTop:"3px",color:"pink",marginRight:"4px"}}/> Basic decoration with any two colors ballons only
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"19px",marginTop:"3px",color:"pink",marginRight:"4px"}}/> Basic Food (including starter, food , bevarges)
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"18px",marginTop:"3px",color:"pink",marginRight:"4px"}}/> Cake (1kg) , popper , Knife , candle  
                            </span>
                        </p>

                        <a href="/contact-form" class="">
                            <p class="w-full py-2 bg-web mt-8 rounded-xl text-white" style={{marginTop:"12rem"}}>
                                <span class="font-medium">
                                  Get Quotes.
                                </span>
                                <span class="font-medium text-lg">
                                   ( min. 10 person)
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div class=" p-4 m-4 bg-white text-center rounded-3xl transition-transform duration-500 hover:scale-110  shadow-xl">
                    <h3 class="text-web font-bold text-4xl">Premium</h3>
                    <p class="pt-2 tracking-wide flex justify-center align-center">
                        <span class="text-black align-top text-2xl">₹ </span>
                        <span class="text-2xl font-semibold">999</span>
                        <span class="text-black text-2xl font-medium">/ person</span>
                    </p>
                    <hr class="mt-4 border-1"/>
                    <div class="pt-8">
                        <p class="font-semibold text-black text-left">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"19px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Premium Decoration with ballons , banners , LED etc
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"19px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Premium Food (including Starter , Food, bevarges,deserts )
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"18px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>  Cake (2 floor), popper , cap , knife, ribbon etc
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"15px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Cleaning your party area after party
                            </span>
                        </p>

                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"15px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>DSLR camera only
                            </span>
                        </p>

                        <a href="/contact-form" class="">
                            <p class="w-full py-2 bg-web mt-8 rounded-xl text-white" style={{marginTop:"4rem"}}>
                                <span class="font-medium">
                                  Get Quotes.
                                </span>
                                <span class="font-medium text-lg">
                                   ( min. 20 person)
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                <div class=" p-4 m-4 bg-white text-center rounded-3xl transition-transform duration-500 hover:scale-110  shadow-xl">
                    <h3 class="text-web font-bold text-4xl">Elite</h3>
                    <p class="pt-2 tracking-wide flex justify-center align-center ">
                        <span class="text-black align-top text-2xl">₹ </span>
                        <span class="text-2xl font-semibold">1499</span>
                        <span class="text-black text-2xl font-medium">/ person</span>
                    </p>
                    <hr class="mt-4 border-1"/>
                    <div class="pt-8">
                        <p class="font-semibold text-black text-left">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"19px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Elite theme based decoration (customizable also)
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"22px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Elite catering services (inluding starter,food, bevarges, deserts)
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"15px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>Cleaning your party area after party
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"18px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>  Cake (customizable), popper , cap , knife, ribbon etc
                            </span>
                        </p>

                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2 flex text-2xl">
                              <FaCheck style={{fontSize:"15px",marginTop:"3px",color:"pink",marginRight:"4px"}}/>DSLR camera with specialist photographers
                            </span>
                        </p>

                        <a href="/contact-form" class="">
                            <p class="w-full py-2 bg-web mt-8 rounded-xl text-white" >
                                <span class="font-medium">
                                  Get Quotes.
                                </span>
                                <span class="font-medium text-lg">
                                   ( min. 30 person)
                                </span>
                               
                            </p>
                        </a>
                    </div>
                </div>
             
          </div>
        </div>
        </section>
        
    )
}
export default PriceList