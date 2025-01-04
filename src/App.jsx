import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Selector from './Components/Selector/Selector';
import Crousel from './Components/CrouselBanner/Crousel';

const App = () => {
  return (
    <div className=" h-auto w-auto bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="w-full">
        <div className="w-full">
          <Navbar />
        </div>
      </nav>

      {/* Crousel */}
      <section className="w-full">
        <div className="max-w-[1300px] w-full mx-auto">
          <Crousel />
        </div>
      </section>

  
      <section className="w-full">
        <div className="max-w-[1300px] w-full mx-auto">
          <Selector />
        </div>
      </section>
    </div>
  );
};

export default App;
