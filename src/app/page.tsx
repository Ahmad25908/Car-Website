import React from 'react';
import HomePage from '@/components/pages/HomePage';
import CarSlider from '@/components/CarSlider';
import Navbar from '@/components/Navbar';
import LogoSlider from '@/components/Logoslider';
// import Model from './model/page'
function Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-900">
      {/* Navbar Section */}
      <Navbar />

      {/* Optional spacing or styling between Navbar and CarSlider */}
      <div className="py-4" />  {/* You can adjust the padding as needed */}

      {/* CarSlider Section */}

      <CarSlider />
      <LogoSlider/>
      <main>
        {/* HomePage Component */}
        <HomePage />
      </main>
    </div>
  );
}

export default Page;
