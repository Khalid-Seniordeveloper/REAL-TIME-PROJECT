import { ChevronDown, X , Camera} from 'lucide-react';
import React, { useState } from 'react';
import Card from '../Cards/Card';
import carone from '../../assets/car-one.jpg'
import cartwo from '../../assets/car-two.jpg'
import carthree from '../../assets/car-three.jpg'
import carfour from '../../assets/car-four.jpg'
import carfive from '../../assets/car-five.jpg'
import carsix from '../../assets/car-six.jpg'
import carseven from '../../assets/car-seven.jpg'
import Footer from '../Footer/Footer';

const Drop = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedOptions, setSelectedOptions] = useState({
    make: '',
    models: '',
    body: '',
    'fuel type': '',
    transmission: '',
    'driver type': '',
    door: '',
    cylinder: '',
    color: '',
  });

  const [yearRange, setYearRange] = useState(2025);
  const [kmRange, setKmRange] = useState(1000000);

  const dropdowns = {
    make: ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes'],
    models: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Van'],
    body: ['2-Door', '4-Door', 'Hatchback', 'Wagon', 'Convertible'],
    'fuel type': ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG'],
  };

  const dropdownstwo = {
    transmission: ['Manual', 'Automatic', 'CVT', 'DCT'],
    'driver type': ['Left Hand', 'Right Hand'],
    door: ['2 Door', '4 Door', '5 Door'],
    cylinder: ['3 Cylinder', '4 Cylinder', '6 Cylinder', '8 Cylinder'],
    color: ['Black', 'White', 'Silver', 'Red', 'Blue', 'Gray'],
  };

  const handleDropdownClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleOptionChange = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
    setOpenDropdown(null);
  };

  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };



  const [selectedFeatures, setSelectedFeatures] = useState(new Set());

  const features = [
    'A/C: Front',
    'Backup Camera',
    'Cruise Control',
    'Navigation',
    'Power Locks',
    'Audio system',
    'Touchscreen display',
    'GPS navigation',
    'Phone connectivity',
    'In-car Wi-Fi',
    'Chrome-plated grill',
    'Smart headlight cluster',
    'Premium wheels',
    'Body character lines',
    'High-quality paint'
  ];



  const singleSelect = [
    'A/C: Front',


    'Navigation',
    'Power Locks',
        'Chrome-plated grill',
    'Smart headlight cluster',
    'Premium wheels',
    'Body character lines',
    'High-quality paint'

  ];


  const handleCheckboxChange = (feature) => {
    const newSelected = new Set(selectedFeatures);
    if (newSelected.has(feature)) {
      newSelected.delete(feature);
    } else {
      newSelected.add(feature);
    }
    setSelectedFeatures(newSelected);
  };

  const cars = [
    {
      name: "2017 BMW X1 xDrive 20d xline",
      model: "Sedan",
      kms: "72,491 kms",
      fuel: "Diesel",
      transmission: "Automatic",
      price: "$73,000",
      owner: "Kathryn Murphy",
      image: carone
    },
    {
      name: "2018 Audi A4 Premium",
      model: "Sedan",
      kms: "45,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$32,000",
      owner: "John Doe",
      image: cartwo
    },
    {
      name: "2020 Mercedes-Benz",
      model: "Coupe",
      kms: "30,000 kms",
      fuel: "Electric",
      transmission: "Automatic",
      price: "$55,000",
      owner: "Alice Smith",
      image: carthree
    },
    {
      name: "2019 Toyota Camry Hybrid",
      model: "Sedan",
      kms: "60,000 kms",
      fuel: "Hybrid",
      transmission: "Automatic",
      price: "$28,000",
      owner: "David Johnson",
      image: carfour
    },
    {
      name: "2021 Ford Mustang GT",
      model: "Coupe",
      kms: "12,000 kms",
      fuel: "Petrol",
      transmission: "Manual",
      price: "$45,000",
      owner: "Robert Brown",
      image: carfive
    },
    {
      name: "2017 Honda CR-V",
      model: "SUV",
      kms: "90,000 kms",
      fuel: "Diesel",
      transmission: "Automatic",
      price: "$22,500",
      owner: "Sarah Lee",
      image: carsix
    },
    {
      name: "2016 Lexus RX 350",
      model: "SUV",
      kms: "110,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$35,000",
      owner: "James Wilson",
      image: carseven
    },
    {
      name: "2022 Tesla Model S",
      model: "Sedan",
      kms: "5,000 kms",
      fuel: "Electric",
      transmission: "Automatic",
      price: "$85,000",
      owner: "Megan Davis",
      image: carone
    },
    {
      name: "2020 Jeep Wrangler",
      model: "SUV",
      kms: "40,000 kms",
      fuel: "Petrol",
      transmission: "Manual",
      price: "$48,000",
      owner: "Emma Clark",
      image: cartwo
    },
    {
      name: "2018 Nissan Altima",
      model: "Sedan",
      kms: "78,000 kms",
      fuel: "Diesel",
      transmission: "Automatic",
      price: "$22,000",
      owner: "Lucas Martinez",
      image: carthree
    },
    {
      name: "2019 Porsche 911 Carrera",
      model: "Coupe",
      kms: "35,000 kms",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$90,000",
      owner: "Olivia Robinson",
      image: carfour
    },
    {
      name: "2020 Subaru Outback",
      model: "SUV",
      kms: "50,000 kms",
      fuel: "Hybrid",
      transmission: "Automatic",
      price: "$38,000",
      owner: "Jack Thomas",
      image: carfive
    }
  ];
  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (option) => {
    setSelectedOption(option); // Update the selected option
  };
  return (
    <>
      <div className='mb-[6rem] w-[100%] h-full flex justify-center gap-[2rem]   drop-main-container mt-[3rem] font-[Poppins]'>
        {/* First Column */}
        <div className="w-[25%] h-full bg-[black] fields-container text-[1.4rem]">
  <div className="w-[100%] p-6 bg-black rounded-md shadow-lg border border-orange-500 shadow-white">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-semibold text-gray-200">Filters and Sort</h2>
      <button className="text-slate-400 text-2xl hover:text-gray-700 flex items-center">
        <X size={20} />
        <span className="ml-1">Clear</span>
      </button>
    </div>

    {Object.keys(dropdowns).map((name) => (
      <div key={name} className="mb-4">
        {/* Dropdown Button */}
        <button
          onClick={() => handleDropdownClick(name)}
          className="w-full px-4 py-3 bg-transparent border border-orange-500 shadow-sm shadow-white rounded-lg flex justify-between items-center hover:border-orange-500"
        >
          <span className="text-white capitalize">
            {selectedOptions[name] || name}
          </span>
          <ChevronDown
            size={20}
            className={`transform transition-transform duration-200 ${
              openDropdown === name ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Options */}
        {openDropdown === name && (
          <div className="mt-2 p-2 bg-black border border-orange-500 rounded-lg">
            <select
              value={selectedOptions[name]}
              onChange={(e) => handleOptionChange(name, e.target.value)}
              className="w-full px-2 py-1.5 text-white bg-black border border-orange-500 rounded-lg focus:outline-none focus:ring-0 focus:ring-orange-500"
            >
              <option value="" disabled>
                Select {name}
              </option>
              {dropdowns[name].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    ))}

    {/* Price Range Filter */}
    <div className="mt-6 mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-orange-600 font-semibold text-3xl">Price:</span>
        <span className="text-gray-200">
          ${priceRange[0]} — ${priceRange[1]}
        </span>
      </div>
      <input
        type="range"
        min="0"
        max="50000"
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="w-full h-2 bg-orange-500 rounded-lg appearance-none cursor-pointer 
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full"
      />
    </div>

    {/* Render remaining dropdowns from dropdownstwo */}
    {Object.keys(dropdownstwo).map((name) => (
      <div key={name} className="mb-4">
        <button
          onClick={() => handleDropdownClick(name)}
          className="w-full px-4 py-3 bg-black border border-orange-500 rounded-lg flex justify-between items-center hover:border-orange-500 shadow-sm shadow-white"
        >
          <span className="text-gray-200 capitalize">
            {selectedOptions[name] || name}
          </span>
          <ChevronDown
            size={20}
            className={`transform transition-transform duration-200 ${
              openDropdown === name ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown === name && (
          <div className="mt-2 p-2 bg-transparent border border-orange-500 rounded-lg">
            <select
              value={selectedOptions[name]}
              onChange={(e) => handleOptionChange(name, e.target.value)}
              className="w-full px-2 py-1.5 text-gray-200 bg-transparent border border-orange-500 rounded-lg"
            >
              <option value="" disabled>
                Select {name}
              </option>
              {dropdownstwo[name].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    ))}

    <div className="w-[100%] p-4 bg-transparent rounded-lg">
      {/* Year Range Slider */}
      <div className="mt-[0.6rem] mb-6">
        <div className="mb-2 text-orange-500 font-semibold text-2xl">
          Year: 2011 — {yearRange.toLocaleString()}
        </div>
        <div className="relative">
          <div className="absolute h-2 bg-orange-500 left-0 right-0 top-1/2 -translate-y-1/2 rounded-full">
            <div
              className="absolute h-full bg-orange-500 left-0"
              style={{
                width: `${((yearRange - 2011) / (2025 - 2011)) * 100}%`,
              }}
            ></div>
          </div>
          <input
            type="range"
            min="2011"
            max="2025"
            value={yearRange}
            onChange={(e) => setYearRange(parseInt(e.target.value))}
            className="w-full h-2 appearance-none bg-transparent cursor-pointer relative z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-orange-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full"
          />
        </div>
      </div>
    </div>

    <div className="W-[100%] p-6  bg-transparent border border-orange-500 rounded-lg shadow-sm shadow-white">
      <h2 className="text-4xl  font-semibold mb-4 text-gray-200">Featured</h2>
      <div className="space-y-3">
        {features.map((feature) => (
          <label
            key={feature}
            className="flex items-center space-x-3 cursor-pointer group "
          >
            <input
              type="checkbox"
              checked={selectedFeatures.has(feature)}
              onChange={() => handleCheckboxChange(feature)}
              className="w-6 h-6 text-gray-200  border-gray-300 rounded focus:ring-orange-500 cursor-pointer checkbox"
            />
            <span className="featured-container text-[1.7rem] text-gray-200 group-hover:text-orange-500">
              {feature}
            </span>
          </label>
        ))}
      </div>
    </div>


    <div className="w-[100%] p-6 bg-transparent border border-orange-500 rounded-lg shadow-sm shadow-white">
      <h2 className="text-4xl font-semibold mb-4 text-gray-200">Single Select</h2>
      <div className="space-y-3">
        {singleSelect.map((singleOption) => (
          <label
            key={singleOption}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <input
              type="radio"
              name="singleSelectOption" // Ensure the name is the same for all radio buttons
              value={singleOption}
              checked={selectedOption === singleOption} // Compare with selectedOption
              onChange={() => handleRadioChange(singleOption)} // Handle radio change
              className="w-6 h-6 text-gray-200 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
            />
            <span className="featured-container text-[1.7rem] text-gray-200 group-hover:text-orange-500">
              {singleOption}
            </span>
          </label>
        ))}
      </div>
    </div>





  </div>
</div>








{/* CARDS CONTAINER  */}

<div className='w-[75%] h-full cards-parent-container'>


{cars.map((car, index) => (
        <Card
          key={index}
          name={car.name}
          model={car.model}
          km={car.kms}
          fuel={car.fuel}
          transmission={car.transmission}
          price={car.price}
          owner={car.owner}
          src={car.image}
        />
      ))}

</div>

        {/* Second Column */}
     
  </div>
      <Footer/>
    </>
  );
};

export default Drop;


























