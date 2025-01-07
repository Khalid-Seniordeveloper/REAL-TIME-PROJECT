import React from 'react'
import { useState } from 'react'
import owner from '../../assets/owner.jpg'
import { Camera, Fuel, Gauge, Workflow } from 'lucide-react'
const Card = (props) => {
  return (
<div className="max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Header badges */}
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full">
            2024
          </span>
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gray-500 text-white px-4 py-1 rounded-full flex items-center gap-2">
            <Camera size={16} />
            <span>6</span>
          </span>
        </div>
        
        {/* Car Image */}
        <img 
          src={props.src}
          alt="2017 BMW X1"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-orange-500 font-medium">{props.model}</p>
          <h3 className="text-xl font-bold text-gray-800">
            {props.name}
          </h3>
        </div>

        {/* Car Details */}
        <div className="flex gap-4 text-gray-600">
          <span className="flex items-center gap-2">
          <Gauge className="w-5 h-5"/>
            {props.km}
          </span>
          <span className="flex items-center gap-2">
          <Fuel  className="w-5 h-5"/>

            Diesel
          </span>
          <span className="flex items-center gap-2">
          <Workflow className="w-5 h-5"/>
            Automatic
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-orange-500">{props.price}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <img 
              src={owner} 
              alt="Kathryn Murphy"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-700">{props.owner}</span>
          </div>
          <button className="px-6 py-2 border-2 text-black border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-300">
            View car
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card