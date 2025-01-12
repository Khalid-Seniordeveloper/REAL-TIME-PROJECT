import React from 'react';
import banner from '../../assets/banner.jpg';

const PagesBanner = (props) => {
  return (
    <div className="relative h-[46rem] overflow-hidden w-[100%] font-[Poppins]">
      {/* Background Image with Overlay */}
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height : '100%'
        }}
        className="absolute inset-0"
      >
        {/* Overlay to lighten the background */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity of the overlay (0 to 1)
          }}
          className="absolute inset-0"
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full w-[100%] mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-center h-full w-[100%]">
          {/* Text Content */}
          <div className="w-[100%] md:w-2/3 text-center space-y-8">
            {/* Heading */}
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-red-500">{props.one}</span>{' '}
              <span className="text-white">{props.two}</span>{' '}
              <span className="text-red-500">{props.three}</span>{' '}
              <span className="text-white">{props.four}</span>
            </h1>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-4">
              <div className="w-20 h-1 bg-red-500 rounded-full"></div>
              <div className="w-10 h-1 bg-white rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-white tracking-[0.2rem] font-[LightPoppins] text-2xl md:text-3xl max-w-2xl mx-auto">
            {props.para}
            </p>

            {/* CTA Button */}
            <button className="relative px-16 py-7 bg-[transparent] btn-border text-white rounded-full text-4xl md:text-3xl font-semibold overflow-hidden group shadow-lg hover:shadow-red-500/30 transform hover:scale-105 transition-all">
  <span className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out origin-left h-full"></span>
  <span className="relative group-hover:text-black transition-colors duration-500 ease-in-out">
    {props.btn}
  </span>
</button>

          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative h-32">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-5 left-32 w-32 h-32 bg-white/10 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default PagesBanner;
