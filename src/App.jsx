import React from "react";

import popularDestinations from "./data/popularDestinations";
import DestinationCard from "./components/DestinationCard";
import Slide from "./components/Slide";

export default function App() {
  return (
    <div>
      <main>
        <section className="bg-gray-100 
                        grid lg:grid-cols-2 
                        2xl:grid-cols-5"
            >
              <div className="px-8 py-12 
                              max-w-md 
                              mx-auto 
                              sm:max-w-xl 
                              lg:px-12 
                              lg:py-24 
                              lg:max-w-full 
                              xl:mr-0 
                              2xl:col-span-2"
                >
                  <div className="xl:max-w-xl 
                                  grid justify-items-center"
                    >
                      <img className="h-32 w-32 " 
                          src="/img/logo-aviao.png" 
                          alt="Workcation" 
                      />
                      <h1 className="mt-6 text-2xl 
                                    font-headline 
                                    tracking-tight 
                                    font-semibold 
                                    text-gray-900 
                                    sm:mt-8 
                                    sm:text-4xl 
                                    lg:text-3xl 
                                    xl:text-4xl"
                        >Let's <span className="text-brand">Fly</span>
                      </h1>
                      <h1 className="mt-6 text-2xl 
                                    font-headline 
                                    tracking-tight 
                                    font-semibold 
                                    text-gray-900 
                                    sm:mt-8 
                                    sm:text-4xl 
                                    lg:text-3xl 
                                    xl:text-4xl"
                        >A viagem dos seus sonhos
                          <br /> 
                          <span className="text-brand"> começa aqui.</span>
                      </h1>
                      <p className="mt-2 
                                    text-gray-600 
                                    sm:mt-4 
                                    sm:text-xl"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.   
                      </p>
                      <div className="mt-4 space-x-1 sm:mt-6">
                        <a className="inline-block 
                                      px-5 py-3 
                                      rounded-lg 
                                      transform transition 
                                      bg-brand 
                                      hover:bg-brand-light 
                                      hover:-translate-y-0.5 
                                      focus:ring-brand 
                                      focus:ring-opacity-50 
                                      focus:outline-none 
                                      focus:ring 
                                      focus:ring-offset-2 
                                      active:bg-brand-dark 
                                      uppercase 
                                      tracking-wider 
                                      font-semibold 
                                      text-sm 
                                      text-white 
                                      shadow-lg 
                                      sm:text-base"
                            href="#"
                          >Agende conosco
                        </a>
                      </div>
                  </div>
              </div>
              
              <Slide />            
        </section>

        <section className="max-w-md 
                        sm:max-w-xl 
                        lg:max-w-6xl 
                        mx-auto 
                        px-8 
                        lg:px-12 
                        py-8"
          >
            <h2 className="text-xl text-gray-900">
              Destinos populares
            </h2>
            
            <p className="mt-2 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            
            <div className="mt-6 
                            grid 
                            gap-6 
                            lg:grid-cols-2 
                            xl:grid-cols-3"
              >{ popularDestinations.map((destination) => (
                  <DestinationCard destination={destination} key={destination.city} />
                ))}
            </div>          
        </section>
      </main>
        

      <footer className="grid
                            gap-8
                            lg:grid-cols-1
                            xl:grid-cols-1
                            bg-gray-100
                            py-8
                            text-gray-500 
                            font-semibold 
                            justify-items-center"
            ><div><p> &copy; 2021 - Desenvolvido por Camila Augusta</p></div>
      </footer>

    </div>
  );
}
