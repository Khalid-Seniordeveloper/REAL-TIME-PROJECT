import { ChevronDown, X } from 'lucide-react';
import React, { useState } from 'react';
import carone from '../../assets/car-one.jpg';
import cartwo from '../../assets/car-two.jpg';
import carthree from '../../assets/car-three.jpg';
import carfour from '../../assets/car-four.jpg';
import carfive from '../../assets/car-five.jpg';
import carsix from '../../assets/car-six.jpg';
import carseven from '../../assets/car-seven.jpg';
import Card from '../../Components/Cards/Card';
import Footer from '../../Components/Footer/Footer';
import PagesBanner from '../../Components/PagesBanner/PagesBanner';
import Navbar from '../../Components/Navbar/Navbar';
import owner from '../../assets/owner.jpg'
import { Camera, Fuel, Gauge, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom';

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
    'High-quality paint',
  ];

  const singleSelect = [
    'A/C: Front',
    'Navigation',
    'Power Locks',
    'Chrome-plated grill',
    'Smart headlight cluster',
    'Premium wheels',
    'Body character lines',
    'High-quality paint',
    'Premium wheels',
    'Body character lines',
    'High-quality paint',
    'High-quality paint',

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

  const cars = []; // Initialize an empty array

  // Generating 240 cars using the original car structure
  for (let i = 0; i < 240; i++) {
    cars.push({
      name: `Car ${i + 1} - Model`,
      model: ['Sedan', 'SUV', 'Coupe'][i % 3], // Example models for diversity
      kms: `${Math.floor(Math.random() * 100000)} kms`,
      fuel: ['Petrol', 'Diesel', 'Electric'][i % 3],
      transmission: ['Automatic', 'Manual'][i % 2],
      price: `$${(Math.random() * 50000 + 10000).toFixed(0)}`,
      owner: `Owner ${i + 1}`,
      image: [carone, cartwo, carthree, carfour, carfive, carsix][i % 6], // Cycle through the images
    });
  }
  

  const carsPerPage = 8; // Adjusted to 6 cars per page
  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (option) => {
    setSelectedOption(option); // Update the selected option
  };

  const [currentPage, setCurrentPage] = useState(1);

  // Get current cars based on the page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Page Numbers logic
  const totalPages = Math.ceil(cars.length / carsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDropdownClick = (name) => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle on click
  };
  const getDisplayedPages = () => {
    const startPage = Math.floor((currentPage - 1) / 4) * 4 + 1; // Calculate the first page of the current range
    const endPage = Math.min(startPage + 3, totalPages); // Ensure endPage doesn't exceed totalPages
    const displayedPages = [];
  
    for (let i = startPage; i <= endPage; i++) {
      displayedPages.push(i);
    }
  
    return displayedPages;
  };
  return (
    <>
      <Navbar />

      <PagesBanner one="Vehicle" two="Vault" para="Explore and discover your ideal vehicle collection." btn="View More" />

      <div className="mb-[6rem] w-[100%] h-full flex justify-center gap-[2rem] drop-main-container mt-[3rem] font-[Poppins]">
        {/* First Column */}
           <div className="w-[30%] h-full bg-[black] fields-container text-[1.4rem]">
       <div className="w-[100%] p-6 bg-black rounded-md shadow-lg border border-[#ffe73a] shadow-white">
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
               className="w-full px-4 py-3 bg-transparent border border-[#ffe73a] shadow-sm shadow-white rounded-lg flex justify-between items-center hover:border-orange-500"
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
               <div className="mt-2 p-2 bg-black border border-[#ffe73a] rounded-lg">
                 <select
                   value={selectedOptions[name]}
                   onChange={(e) => handleOptionChange(name, e.target.value)}
                   className="w-full px-2 py-1.5 text-white bg-black border-[#ffe73a] rounded-lg focus:outline-none focus:ring-0 focus:ring-[#ffe73a]"
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
             <span className="text-[#ffe73a] font-semibold text-3xl">Price:</span>
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
             className="w-full h-2 bg-[#ffe73a] rounded-lg appearance-none cursor-pointer 
             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ffe73a] [&::-webkit-slider-thumb]:rounded-full"
           />
         </div>
     
         {/* Render remaining dropdowns from dropdownstwo */}
         {Object.keys(dropdownstwo).map((name) => (
           <div key={name} className="mb-4">
             <button
               onClick={() => handleDropdownClick(name)}
               className="w-full px-4 py-3 bg-black border border-[#ffe73a] rounded-lg flex justify-between items-center hover:border-[#ffe73a] shadow-sm shadow-white"
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
               <div className="mt-2 p-2 bg-transparent border border-[#ffe73a] rounded-lg">
                 <select
                   value={selectedOptions[name]}
                   onChange={(e) => handleOptionChange(name, e.target.value)}
                   className="w-full px-2 py-1.5 text-gray-200 bg-black border border-[#ffe73a] rounded-lg"
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
             <div className="mb-2 text-[#ffe73a] font-semibold text-2xl">
               Year: 2011 — {yearRange.toLocaleString()}
             </div>
             <div className="relative">
               <div className="absolute h-2 bg-[#ffe73a] left-0 right-0 top-1/2 -translate-y-1/2 rounded-full">
                 <div
                   className="absolute h-full bg-[#ffe73a] left-0"
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
                 className="w-full h-2 appearance-none bg-transparent cursor-pointer relative z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-[#ffe73a] [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-[#ffe73a] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full"
               />
             </div>
           </div>
         </div>
     
         <div className="W-[100%] p-6  bg-transparent border border-[#ffe73a] rounded-lg shadow-sm shadow-white">
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
                   className="w-6 h-6 text-gray-200  border-gray-300 rounded focus:ring-[#ffe73a] cursor-pointer checkbox"
                 />
                 <span className="featured-container text-[1.5rem] text-gray-200 group-hover:text-[#ffe73a]">
                   {feature}
                 </span>
               </label>
             ))}
           </div>
         </div>
     
     
         <div className="w-[100%] p-6 bg-transparent border border-[#ffe73a] rounded-lg shadow-sm shadow-white">
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
                   className="w-6 h-6 text-gray-200 border-gray-300 rounded focus:ring-[#ffe73a] cursor-pointer"
                 />
                 <span className="featured-container text-[1.5rem] text-gray-200 group-hover:text-[#ffe73a]">
                   {singleOption}
                 </span>
               </label>
             ))}
           </div>
         </div>
     
     
     
     
     
       </div>
     </div>
     

        {/* CARDS CONTAINER  */}
        
        <div className="w-[70%] h-full cards-parent-container cards-parent-container-two  ">
          {/* Displaying cars dynamically based on the page number */}
         
       
          {currentCars.map((car, index) => (
         




        

            <div        key={index} className="w-[45rem] cards-container cards-container-two  text-[1.7rem] bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Header badges */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#f9df29] text-black px-4 py-1 rounded-full text-2xl">
            Featured
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#f9df29] text-black px-4 py-1 rounded-full text-2xl">
            2024
          </span>
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gray-500 text-white px-4 py-1 rounded-full flex items-center gap-2 text-2xl">
            <Camera size={16} />
            <span>6</span>
          </span>
        </div>
        
        {/* Car Image */}
        <img 
          src={car.image}
          alt="2017 BMW X1"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-[#ffe73a] text-3xl font-medium">{car.model}</p>
          <h3 className="text-[2.7rem] font-bold text-gray-800">
          {car.name}
          </h3>
        </div>

        {/* Car Details */}
        <div className="flex gap-4 text-gray-600 text-[1.8rem]">
          <span className="flex items-center gap-2">
          <Gauge className="w-9 h-9"/>
            {car.kms}
          </span>
          <span className="flex items-center gap-2">
          <Fuel  className="w-9 h-9"/>

            Diesel
          </span>
          <span className="flex items-center gap-2">
          <Workflow className="w-9 h-9"/>
            Automatic
          </span>
        </div>

        {/* Price */}
        <p className="text-[2.5rem] font-bold text-[black]">{car.price}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <img 
              src={owner} 
              alt="Kathryn Murphy"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-700 text-[2.3rem]">{car.owner}</span>
          </div>
          <button className="relative px-6 py-4 border-2 text-black border-[#f9df29] rounded-full text-3xl overflow-hidden group">
  <span className="absolute inset-0 bg-[#f9df29] transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left h-full"></span>
  <span className="relative group-hover:text-black transition-colors duration-500 ease-in-out">
<Link to="/singlepage">View More</Link>
  </span>
</button>

        </div>
      </div>
    </div>




          ))}

          {/* Pagination Buttons */}
          <div className="flex justify-center items-center gap-2 mt-[10rem] text-[2.5rem]">
    <button
      onClick={prevPage}
      disabled={currentPage === 1}
      className="px-4 py-2 text-[2.5rem] bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 disabled:bg-gray-400"
    > 
      &#8592; Prev
    </button>
    
    {/* Display dynamic page numbers */}
    {getDisplayedPages().map((number) => (
      <button
        key={number}
        onClick={() => handleClick(number)}
        className={`px-6 py-2 rounded-lg ${
          currentPage === number
            ? 'bg-yellow-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-yellow-300'
        }`}
      >
        {number}
      </button>
    ))}
    
    {/* Ellipsis if there are more than 4 pages */}
    {totalPages > 4 && currentPage + 4 < totalPages && (
      <span className="text-gray-800">...</span>
    )}
    
    {/* Last page button */}
    {totalPages > 4 && currentPage + 4 < totalPages && (
      <button
        onClick={() => handleClick(totalPages)}
        className={`px-4 py-2 rounded-lg ${
          currentPage === totalPages
            ? 'bg-yellow-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-yellow-300'
        }`}
      >
        {totalPages}
      </button>
    )}

    <button
      onClick={nextPage}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 disabled:bg-gray-400"
    >
      Next &#8594;
    </button>
  </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Drop;
