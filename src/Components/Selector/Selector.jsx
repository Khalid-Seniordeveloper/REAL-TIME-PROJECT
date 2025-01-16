import React, { useState, useEffect } from 'react';
import { ChevronDown, RefreshCcw } from 'lucide-react';
import Drop from '../DropDown/Drop';

const Selector = () => {
  const initialSelectors = [
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
      id: 'color',
      placeholder: 'Red',
      options: ['Red', 'Blue', 'Green', 'Black', 'White'],
      selectedOption: '',
    },
    {
      id: 'type',
      placeholder: 'Sedan',
      options: ['Sedan', 'Hatchback', 'SUV', 'Coupe'],
      selectedOption: '',
    },
    {
      id: 'engine',
      placeholder: 'V6',
      options: ['V4', 'V6', 'V8', 'Electric'],
      selectedOption: '',
    },
    {
      id: 'transmission',
      placeholder: 'Automatic',
      options: ['Automatic', 'Manual', 'CVT'],
      selectedOption: '',
    },
    {
      id: 'fuelType',
      placeholder: 'Petrol',
      options: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
      selectedOption: '',
    },
  ];

  const [selectors, setSelectors] = useState(initialSelectors);
  const [openSelector, setOpenSelector] = useState(null);
  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleSelector = (id) => {
    setOpenSelector((prev) => (prev === id ? null : id));
  };

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

  useEffect(() => {
    const selectedMake = selectors.find((selector) => selector.id === 'make');
    const selectedModel = selectors.find((selector) => selector.id === 'model');
    const selectedDoor = selectors.find((selector) => selector.id === 'door');
    const selectedType = selectors.find((selector) => selector.id === 'type');
    const selectedColor = selectors.find((selector) => selector.id === 'color');
    const selectedEngine = selectors.find((selector) => selector.id === 'engine');
    const selectedTransmission = selectors.find((selector) => selector.id === 'transmission');
    const selectedFuel = selectors.find((selector) => selector.id === 'fuelType');


    

    if (
      selectedMake?.selectedOption === 'Toyota' ||
      selectedModel?.selectedOption === 'SUV' ||
      selectedDoor?.selectedOption === '4 Door' ||
      selectedType?.selectedOption === 'Hatchback' ||
      selectedColor?.selectedOption === 'Blue' ||
      selectedEngine?.selectedOption === 'V6' ||
      selectedTransmission?.selectedOption === 'Manual' ||
      selectedFuel?.selectedOption === 'Diesel' 

     



    ) {
      setIsDropOpen(true);
    } else {
      setIsDropOpen(false);
    }
  }, [selectors]);

  const backToNormal = () => {
    setIsDropOpen(false);
    setSelectors(initialSelectors);
  };

  return (
    <>
      <div>
        <section>
          <div className="selector-div-container relative w-full h-[15rem] bg-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg flex justify-center items-center font-[Poppins]">
            <div className="selector-container mt-[1rem]  ml-[6rem] grid grid-cols-4 gap-4 w-full">
              {selectors.map((selector) => (
                <div key={selector.id} className="w-full relative">
                  <button
                    onClick={() => toggleSelector(selector.id)}
                    className="Selectors w-full h-16 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-orange-500/50 focus:outline-none focus:border-[#ffe73a] transition-all duration-300"
                  >
                    <span className="text-gray-400 text-xl options-title">
                      {selector.selectedOption || selector.placeholder}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#ffe73a] transition-transform duration-200 ${openSelector === selector.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {/* Dropdown (opened on click) */}
                  {openSelector === selector.id && (
                    <div className="absolute w-full top-full mt-2 bg-gray-800 border border-gray-700 backdrop-blur-sm rounded-lg shadow-lg z-10">
                      <select
                        className="w-full px-4 py-2 bg-gray-800 text-lg text-gray-300 border-none rounded-lg focus:ring-2 focus:ring-gray-500"
                        value={selector.selectedOption}
                        onChange={(e) => handleOptionSelect(selector.id, e.target.value)}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {selector.options.map((option) => (
                          <option key={option} value={option} className="text-gray-300 bg-gray-800 hover:bg-gray-700/50">
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
                <RefreshCcw onClick={backToNormal} className="cursor-pointer" />
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
