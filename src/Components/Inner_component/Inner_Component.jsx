import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ name }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2 bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
    <div className="relative">
      <img
        className="w-full h-40 object-cover object-center"
        src={`https://source.unsplash.com/400x300/?${name}`} // You can replace this with an actual image source
        alt={`${name} Image`}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 text-white flex items-center justify-center">
        <p className="font-bold text-2xl mb-4">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </div>
    </div>
 
  </div>
);

export default Card;
