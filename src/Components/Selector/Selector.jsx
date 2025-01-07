import React, { useState } from 'react';
import { ChevronDown, Search, RefreshCcw } from 'lucide-react';
import Drop from '../DropDown/Drop';

const Selector = () => {
    
    const initialSelectors = ([
    {
      id: 'make',
      placeholder: 'Infinity',
      options: ['Infinity', 'Toyota', 'Honda', 'BMW', 'Mercedes'],
      selectedOption: '',
    },
    {
      id: 'model',
      placeholder: 'Sedanx50',
      options: ['Sedanx50', 'SUV', 'Coupe', 'Convertible'],
      selectedOption: '',
    },
    {
      id: 'door',
      placeholder: 'Door',
      options: ['2 Door', '4 Door', '5 Door'],
      selectedOption: '',
    },
    {
      id: 'type',
      placeholder: 'Sedan',
      options: ['Sedan', 'Hatchback', 'SUV', 'Coupe'],
      selectedOption: '',
    },
  ]);
  const [selectors, setSelectors] = useState(initialSelectors)

  const [openSelector, setOpenSelector] = useState(null);
  const [isDropOpen, setIsDropOpen] = useState(false);

  // Toggle Selector Dropdown
  const toggleSelector = (id) => {
    setOpenSelector((prev) => (prev === id ? null : id));
  };

  // Handle Option Selection
  const handleOptionSelect = (id, selectedValue) => {
    setSelectors((prevSelectors) =>
      prevSelectors.map((selector) =>
        selector.id === id
          ? { ...selector, selectedOption: selectedValue }
          : selector
      )
    );
    setOpenSelector(null); // Close the dropdown after selection
  };

  // Find Cars Button
  const dropOpen = () => {
    const selectedMake = selectors.find((selector) => selector.id === 'make');
    const selectedModel = selectors.find((selector) => selector.id === 'model');
    const selectedDoor = selectors.find((selector) => selector.id === 'door');
    const selectedType = selectors.find((selector) => selector.id === 'type');

    if (selectedMake?.selectedOption === 'Toyota' || selectedModel?.selectedOption === 'SUV' || selectedDoor?.selectedOption === '4 Door' || selectedType?.selectedOption === 'Hatchback' ) {
      setIsDropOpen(true);
    } else {
      setIsDropOpen(false); 
      console.log('Please select Toyota to proceed!');
    }
  };

  const backToNormal = ()=>{
    setIsDropOpen(false);
    setSelectors(initialSelectors);
  };
  
  return (
    <>
      <div>
        <section>
          <div className="selector-div-container relative w-[100%] h-[7rem] bg-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg flex justify-center items-center font-[Poppins]">
            <div className="selector-container flex items-center justify-between gap-[1.7rem]">
              {selectors.map((selector) => (
                <div key={selector.id} className="relative flex-1">
                  <button
                    onClick={() => toggleSelector(selector.id)}
                    className="Selectors w-[25.5rem] h-[4rem] bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left flex items-center justify-between 
                    hover:border-orange-500/50 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  >
                    <span className="text-gray-400 text-[1.5rem] options-title">
                      {selector.selectedOption || selector.placeholder}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                        openSelector === selector.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openSelector === selector.id && (
  <div className="absolute w-full top-[-100%] mb-2 bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-lg shadow-lg z-10">
    <select
      className="w-full px-4 py-2 bg-gray-800 text-[1.6rem] text-gray-300 border-none rounded-lg focus:ring-2 focus:ring-gray-500"
      value={selector.selectedOption}
      onChange={(e) => handleOptionSelect(selector.id, e.target.value)}
    >
      <option value="" disabled>
        Select an option
      </option>
      {selector.options.map((option) => (
        <option
          key={option}
          value={option}
          className="text-gray-300 bg-gray-800 hover:bg-gray-700/50"
        >
          {option}
        </option>
      ))}
    </select>
  </div>
)}

                </div>
              ))}

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <RefreshCcw onClick={backToNormal} className='hover: cursor-pointer' />
                <button
                  className="find-cars px-12 py-4 bg-orange-500 text-white text-[1.2rem] rounded-lg flex items-center gap-2 hover:bg-orange-600 transition-colors duration-300"
                  onClick={dropOpen}
                >
                  <span>Find cars</span>
                  <Search className="w-5 h-5 search" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isDropOpen ? <Drop /> : null}
    </>
  );
};

export default Selector;
