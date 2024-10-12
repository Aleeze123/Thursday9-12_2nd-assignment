"use client";
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Golden Allure', price: '45000.00', image: 'https://i.pinimg.com/564x/95/13/8e/95138e0951241d6b9573fbfea0fb5bfd.jpg' },
  { id: 2, name: 'Velvet Elegance', price: '60000.00', image: 'https://i.pinimg.com/736x/8d/cf/4c/8dcf4cca776571a78026234dd19e7479.jpg' },
  { id: 3, name: 'Mystic Harmony', price: '75000.00', image: 'https://i.pinimg.com/564x/fa/96/72/fa9672585f977a88e2a373e1a36b6dd5.jpg' },
  { id: 4, name: 'Eternal Blossom', price: '80000.00', image: 'https://i.pinimg.com/564x/50/c6/e3/50c6e3161bd6ea17693ac7e76c28c020.jpg' },
  { id: 5, name: 'Serene Breeze', price: '9000.00', image: 'https://i.pinimg.com/564x/a4/1f/f9/a41ff90482547ddf8fbb5e6b7f445539.jpg' },
  { id: 6, name: 'Fresh Essence', price: '10000.00', image: 'https://i.pinimg.com/564x/e5/98/79/e598792477adbd7e2c8f2dfe3a1a4f82.jpg' },
];

const Hero: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 1; 

  const handleNext = () => {
    if (startIndex + itemsToShow < products.length) {
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    }
  };

  return (
    <section className="relative bg-black text-white">
      <div className="bg-yellow-500 text-black text-center py-2 md:py-4 mt-10 md:mt-12 animate-bounce">
        FREE DELIVERY ON ORDERS ABOVE 30000
      </div>
      <div className="bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white flex flex-col items-center justify-center h-full pt-24 md:pt-32">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Exquisite Perfumes</h2>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded">Shop Now</button>
        </div>
      </div>
      <div className="mt-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Top Rated Perfumes</h2>
        <div className="flex items-center justify-center mt-4">
          <button 
            className="text-white p-2 rounded-full hover:bg-gray-700" 
            onClick={handlePrev} 
            disabled={startIndex === 0}
          >
            <FaArrowLeft />
          </button> 
          <div className="bg-black p-4 rounded-lg"> 
            <div className="flex overflow-hidden space-x-4">
              {products.slice(startIndex, startIndex + itemsToShow).map(product => (
                <div 
                  key={product.id} 
                  className="bg-orange-200 border border-gray-700 text-black p-4 rounded-lg flex-shrink-0 w-60 transition-transform transform hover:scale-105"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-56 object-contain rounded-t-lg transition-transform transform hover:scale-110"
                  />
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="mt-1 text-lg">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> 
          <button 
            className="text-white p-2 rounded-full hover:bg-gray-700" 
            onClick={handleNext} 
            disabled={startIndex + itemsToShow >= products.length}
          >
            <FaArrowRight />
          </button> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
