import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Notun = () => {
  useEffect(() => {
    AOS.init({
      offset: 800,
      delay: 0,
      duration: 2000,
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-50 p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          <span className="text-indigo-600">Beautiful House's </span> Gallery
        </h1>
        <p className="text-gray-600 mt-2">
         
        </p>
      </header>

      {/* Paintings Section */}
      <main className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-up">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img1.jpg"
            alt="Acrylic Painting One"
          />
          <h3 className="text-xl font-semibold text-gray-800">Billionaire House</h3>
          <p className="text-gray-600 mt-2">
            This is most expensive hourse so far
          </p>
          
        </section>

        {/* Card 2 */}
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-left">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img2.jpg"
            alt="Acrylic Painting Two"
          />
          <h3 className="text-xl font-semibold text-gray-800">HOuse for average people</h3>
          <p className="text-gray-600 mt-2">
           This house is old but cheap price
          </p>
         
        </section>

        {/* Card 3 */}
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-right">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img3.jpg"
            alt="Acrylic Painting Three"
          />
          <h3 className="text-xl font-semibold text-gray-800">UnComping house</h3>
          <p className="text-gray-600 mt-2">
           This new house
          </p>
          
        </section>

        {/* Card 4 */}
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-left">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img7.jpg"
         
          />
          <h3 className="text-xl font-semibold text-gray-800">Big House</h3>
          <p className="text-gray-600 mt-2">
            This hourse for big family
          </p>
          
        </section>

        {/* Card 5 */}
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-right">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img5.jpg"
            
          />
          <h3 className="text-xl font-semibold text-gray-800">Little House</h3>
          <p className="text-gray-600 mt-2">
           This couse only for single family
          </p>
          
        </section>
        <section className="card bg-white shadow-lg rounded-lg p-4" data-aos="fade-right">
          <img
            className="w-full rounded-md mb-4"
            src="../../../public/img6.jpg"
            alt="Acrylic Painting Five"
          />
          <h3 className="text-xl font-semibold text-gray-800">Millinonaire House</h3>
          <p className="text-gray-600 mt-2">
          THis hourse have unique design
          </p>
          
        </section>
        
      </main>
    </div>
  );
};

export default Notun;
