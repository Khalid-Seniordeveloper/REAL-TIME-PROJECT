import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react';
import { PiSlidersLight } from 'react-icons/pi';
const Selector = () => {
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
    <section>
      <div className="selector-div-container relative w-[100%] h-[7rem] bg-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg  flex justify-center items-center font-[Poppins]">
        <div className="selector-container flex items-center justify-between  gap-[1.7rem] ">
          {selectors.map((selector) => (
            <div key={selector.id} className="relative flex-1">
              <button
                onClick={() => toggleSelector(selector.id)}
                className="Selectors  w-[25.5rem] h-[4rem] bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left flex items-center justify-between 
              hover:border-orange-500/50 focus:outline-none focus:border-orange-500 transition-all duration-300"
              >
                <span className="text-gray-400 text-[1.5rem] options-title">{selector.placeholder}</span>
                <ChevronDown
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                    openSelector === selector.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openSelector === selector.id && (
  <div className="absolute w-full bottom-full mb-2 bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-lg shadow-lg z-10">
    <ul className="py-2">
      {selector.options.map((option) => (
        
        <li
          key={option}
          className="text-[1.6rem] selected-options px-4 py-2 hover:bg-gray-700/50 cursor-pointer text-gray-300 
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
      
            <button className="find-cars px-12 py-4 bg-orange-500 text-white text-[1.2rem] rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors duration-300">
              <span>Find cars</span>
              <Search className="w-5 h-5 search" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Selector