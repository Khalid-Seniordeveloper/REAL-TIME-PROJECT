import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronDown, Search } from 'lucide-react';
import { PiSlidersLight } from 'react-icons/pi';

import Navbar from './Components/Navbar/Navbar';
import ferrari from './assets/ferrari.png';
import gtr from './assets/gtr.png';
import lamborghini from './assets/lamborghini.png';
import mercedes from './assets/mercedes.png';
import tesla from './assets/tesla.png';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carData = [
    {
      name: "Lamborghini",
      model: "Aventador SVJ",
      image: lamborghini, 
      textPosition: "top",
    },
    {
      name: "Ferrari",
      model: "Ferrari 488 GTB",
      image: ferrari, 
      textPosition: "top",
    },
    {
      name: "Tesla",
      model: "Model S Plaid",
      image: tesla, 
      textPosition: "top",
    },
    {
      name: "GTR",
      model: "GTR Nismo",
      image: gtr, 
      textPosition: "top",
    },
    {
      name: "Mustang",
      model: "Mustang GT",
      image: mercedes, 
      textPosition: "top",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carData.length - 1 : prevIndex - 1
    );
  };

  const [openSelector, setOpenSelector] = useState(null);

  const selectors = [
    {
      id: 'make',
      placeholder: 'Infinity',
      options: ['Infinity', 'Toyota', 'Honda', 'BMW', 'Mercedes'],
    },
    {
      id: 'model',
      placeholder: 'Sedanx50',
      options: ['Sedanx50', 'SUV', 'Coupe', 'Convertible'],
    },
    {
      id: 'door',
      placeholder: 'Door',
      options: ['2 Door', '4 Door', '5 Door'],
    },
    {
      id: 'type',
      placeholder: 'Sedan',
      options: ['Sedan', 'Hatchback', 'SUV', 'Coupe'],
    },
  ];

  const toggleSelector = (id) => {
    setOpenSelector(openSelector === id ? null : id);
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="crousel relative w-[100%]">
          <div className="relative h-[560px] bg-black overflow-hidden">
            <div className="flex h-full transition-transform duration-500 ease-in-out relative">
              {carData.map((car, index) => (
                <div
                  key={index}
                  className={`w-full h-full flex-shrink-0 transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    position: 'absolute',
                    left: 0,
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                  }}
                >
                  <div
                    className={`absolute w-full text-center text-white z-10 ${
                      car.textPosition === 'top' ? 'top-4' : 'bottom-8' 
                    }`}
                  >
                    <h2 className="text-[4rem] car-name font-light mt-[1rem]">{car.name}</h2>
                    <h3 className="text-[6rem] car-model font-bold mt-[-2rem]">{car.model}</h3>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center ">
                    <img
                      src={car.image}
                      alt={`${car.name} ${car.model}`}
                      layout="fill"
                      className="object-contain max-h-[65%] w-[40%] mt-[-8rem] model-car"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              title="Previous"
              onClick={prevSlide}
              className="previous-btn absolute left-20 top-1/2 mt-[-5rem] ml-[11rem] bg-[#1f1f1f] text-red-500 hover:bg-[#333333] p-2 rounded-full transition-all duration-300 ease-in-out z-20"
            >
              <ChevronLeft className="w-[5rem] h-[5rem] mr-[0.7rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-white" />
            </button>
            <button
              title="Next"
              onClick={nextSlide}
              className="next-btn absolute right-4 top-1/2 -translate-y-1/2 mt-[-1rem] mr-[15.5rem] bg-[#1f1f1f] text-red-500 hover:bg-[#333333] p-2 rounded-full transition-all duration-300 ease-in-out z-20"
            >
              <ChevronRight className="w-[5rem] h-[5rem] ml-[0.5rem]  transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* SELECTOR */}

        <div>
      <section>
        <div className="selector-div-container relative w-[100%] h-[7rem] bg-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg  flex justify-center items-center ">
          <div className="selector-container flex items-center gap-4">
            {selectors.map((selector) => (
              <div key={selector.id} className="relative flex-1">
                <button
                  onClick={() => toggleSelector(selector.id)}
                  className="Selectors  w-[25rem] h-[4rem] bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left flex items-center justify-between 
                hover:border-orange-500/50 focus:outline-none focus:border-orange-500 transition-all duration-300"
                >
                  <span className="text-gray-400 text-[1.5rem]">{selector.placeholder}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                      openSelector === selector.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSelector === selector.id && (
                  <div className="absolute w-full mt-2 bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      {selector.options.map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-700/50 cursor-pointer text-gray-300 
                        hover:text-white transition-colors duration-150"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="p-3 bg-gray-800 border border-gray-700 rounded-xl hover:border-orange-500/50 
              transition-colors duration-300"
                title="Settings"
              >
                <PiSlidersLight className="w-8 h-8 text-orange-500" />
              </button>

              <button className="px-12 py-4 bg-orange-500 text-white text-[1.2rem] rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors duration-300">
                <span>Find cars</span>
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
      </section>
    </div>
  );
};

export default App;
