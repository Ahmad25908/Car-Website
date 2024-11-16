"use client";
import Image from "next/image";
import React, { useState } from "react";

interface CarModel {
  id: number;
  name: string;
  tagline: string;
  image: string;
    description: string;
  specs: {
    engine: string;
    horsepower: string;
    efficiency: string;
    price: string;
  };
}

const carModels: CarModel[] = [
  {
    id: 1,
    name: "Falcon Z",
    tagline: "Luxury Redefined",
    image: "/images/Turbo.jpg",
        description: "A luxury car that blends cutting-edge technology with elegance.",
    specs: {
      engine: "V8 Turbo",
      horsepower: "550hp",
      efficiency: "15km/L",
      price: "$120,000",
    },
  },
  {
    id: 2,
    name: "Eagle X",
    tagline: "Eco-Friendly Power",
    image: "/images/Turbo1.png",
        description: "A hybrid SUV designed for sustainability and performance.",
    specs: {
      engine: "Hybrid Electric",
      horsepower: "300hp",
      efficiency: "50km/L",
      price: "$80,000",
    },
  },{
    id: 3,
    name: "BMW",
    tagline: "Eco-Friendly Power",
    image: "/images/car3.jpg",
        description: "A hybrid SUV designed for sustainability and performance.",
    specs: {
      engine: "Hybrid Electric",
      horsepower: "500hp",
      efficiency: "70km/L",
      price: "$90,000",
    },
  },
  // Add more models here dynamically
];

const ModelsPage: React.FC = () => {
  const [compareList, setCompareList] = useState<CarModel[]>([]);

  const addToCompare = (model: CarModel) => {
    if (compareList.length < 3 && !compareList.find((car) => car.id === model.id)) {
      setCompareList([...compareList, model]);
    }
  };

  const removeFromCompare = (id: number) => {
    setCompareList(compareList.filter((car) => car.id !== id));
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section
  className="relative h-screen md:h-[100vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url('/images/hero-car.jpg')` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>

  {/* Content */}
  <div className="relative z-3 text-center px-6 md:px-12 max-w-4xl w-full">
    {/* Title */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight sm:leading-snug">
      Discover the Ultimate Driving Experience
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto sm:mx-0">
      Unleash power, style, and innovation with our cutting-edge car models.
    </p>

    {/* Call to Action Button */}
    <div className="flex-col justify-center items-center gap-6 hidden sm:flex">
      <button
        className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 hover:from-gray-400 hover:via-gray-300 hover:to-gray-200 text-black font-semibold px-8 py-4 rounded-lg shadow-lg transition-all transform hover:scale-105 max-w-xs w-full sm:w-auto"
        onClick={() =>
          document.getElementById("modelsGrid")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Build Your Dream Car
      </button>
    </div>
  </div>

  {/* Decorative Features (Icons) */}
  <div
    className="absolute bottom-6 md:bottom-12 flex justify-center w-full space-x-8 z-3 sm:-m-3 md:-m-12  sm:flex-row gap-3"
  >
    {/* Feature 1 */}
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all">
        🚗
      </div>
      <p className="text-sm sm:text-base text-gray-300 mt-2">Luxury</p>
    </div>
    {/* Feature 2 */}
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all">
        ⚡
      </div>
      <p className="text-sm sm:text-base text-gray-300 mt-2">Electric</p>
    </div>
    {/* Feature 3 */}
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-all">
        🌿
      </div>
      <p className="text-sm sm:text-base text-gray-300 mt-2">Eco-Friendly</p>
    </div>
  </div>
</section>



      {/* Models Showcase Section */}
      <section id="modelsGrid" className="py-16 px-4 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Our Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {carModels.map((model) => (
            <div
              key={model.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <Image
                src={model.image}
                alt="logo"
                width={400}  // Set an appropriate width based on your container size
               height={225}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
               
                <h3 className="text-2xl font-semibold mb-2">{model.name}</h3>
                <p className="text-gray-400 mb-4">{model.tagline}</p>
                <button
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded"
                  onClick={() => addToCompare(model)}
                >
                  Add to Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="py-16 bg-gray-800 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Compare Models</h2>
        <div className="max-w-4xl mx-auto">
          {compareList.length === 0 ? (
            <p className="text-gray-400 text-center">
              Add models to compare their features.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {compareList.map((car) => (
                <div
                  key={car.id}
                  className="bg-gray-700 rounded-lg shadow-lg overflow-hidden p-6"
                >
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-400 mb-4">{car.description}</p>
                  <ul className="text-gray-300 mb-4">
                    <li>Engine: {car.specs.engine}</li>
                    <li>Horsepower: {car.specs.horsepower}</li>
                    <li>Efficiency: {car.specs.efficiency}</li>
                    <li>Price: {car.specs.price}</li>
                  </ul>
                  <button
                    className="bg-red-500 hover:bg-red-400 text-black px-4 py-2 rounded"
                    onClick={() => removeFromCompare(car.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900 text-center relative mt-[80px]">
  {/* Overlay for a more stylish background effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

  {/* Section Content */}
  <div className="relative px-4 sm:px-6 md:px-12 max-w-screen-xl mx-auto">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight sm:leading-snug">
      Find Your Perfect Car Today
    </h2>
    <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto sm:mx-0">
      Explore our curated collection of luxury, eco-friendly, and performance cars that meet every need and style.
      Book your test drive today and experience the difference!
    </p>

    {/* CTA Button Section with Hover Effect */}
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
        onClick={() => alert("Booking test drive...")}
      >
        Book a Test Drive
      </button>
      <button
        className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-500 font-semibold px-8 py-3 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
        onClick={() => alert("Viewing car models...")}
      >
        Explore Models
      </button>
    </div>

    {/* Optional: Add a visual element such as an image gallery */}
    <div className="mt-12">
      <h3 className="text-3xl text-white font-semibold mb-6">Featured Cars</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="relative group">
          <Image src="/images/model2.png"  width={400} height={225} alt="Falcon Z" className="w-full h-72 object-cover rounded-lg shadow-md transform transition-all duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Falcon Z - Luxury
          </div>
        </div>
        <div className="relative group">
          <Image src="/images/model3.png" width={400} height={225} alt="Eagle X" className="w-full h-72 object-cover rounded-lg shadow-md transform transition-all duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Eagle X - Eco-Friendly
          </div>
        </div>
        <div className="relative group">
          <Image src="/images/model4.png" width={400} height={225} alt="Speedster A" className="w-full h-72 object-cover rounded-lg shadow-md transform transition-all duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Speedster A - Performance
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default ModelsPage;
