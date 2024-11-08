// src/app/shop-single/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <section className="py-10 min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          
          {/* Product Image */}
          <div className="lg:w-1/2 w-full p-4">
            <div className="bg-white rounded-md shadow-lg p-4 flex justify-center items-center">
              <Image
                className="rounded"
                src="https://bucket-photos.s3.us-east-2.amazonaws.com/chaqueta-negra-1_720.jpg"
                alt="Chaqueta Negra"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 w-full p-4 bg-white rounded-md shadow-lg lg:ml-8 mt-4">
            <h1 className="text-4xl font-bold text-black mb-4">Cazadora Biker</h1>
            <p className="text-3xl text-black mb-4">$51.990</p>

            <div className="flex items-center space-x-2">
              {/* Estrellas de calificación */}
              <div className="flex">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-gray-400" />
              </div>

              {/* Texto de calificación */}
              <p className="text-gray-600">Clasificación 4.8 | 36 Comentarios</p>
            </div>

            {/* Añadir espacio entre las estrellas y la Categoría */}
            <div className="mt-6 space-y-2">
              {/* Categoría */}
              <div className="flex items-center space-x-2">
                <h6 className="font-bold text-black">Categoría:</h6>
                <p className="text-gray-600">Chaquetas y Abrigos</p>
              </div>
              
              {/* Tipo */}
              <div className="flex items-center space-x-2">
                <h6 className="font-bold text-black">Tipo:</h6>
                <p className="text-gray-600">Chaqueta</p>
              </div>

              {/* Color */}
              <div className="flex items-center space-x-2">
                <h6 className="font-bold text-black">Color:</h6>
                <p className="text-gray-600">Negro</p>
              </div>

              {/* Descripción */}
              <div className="space-y-1">
                <h6 className="font-bold text-black">Descripción:</h6>
                <p className="text-gray-600">
                  Cazadora tipo biker con cuello solapas y manga larga. Cierre cremallera frontal. Bolsillos delanteros con cremallera. Detalle tapeta en bajo con botón presión.
                </p>
              </div>
            </div>

            {/* Talla y Cantidad en la misma línea */}
            <div className="mt-6 flex items-center space-x-6">
              {/* Talla */}
              <div className="flex items-center space-x-2">
                <h6 className="font-bold text-black">Talla:</h6>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-purple-600 text-white rounded">S</button>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded">M</button>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded">L</button>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded">XL</button>
                </div>
              </div>

              {/* Cantidad */}
              <div className="flex items-center space-x-2">
                <h6 className="font-bold text-black">Cantidad:</h6>
                <button className="px-3 py-1 bg-purple-600 text-white rounded">-</button>
                <span className="text-gray-600">1</span>
                <button className="px-3 py-1 bg-purple-600 text-white rounded">+</button>
              </div>
            </div>

            {/* Botones Comprar y Agregar al carrito */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <button className="w-1/2 py-2 bg-purple-600 text-white rounded">Comprar</button>
                <button className="w-1/2 py-2 bg-purple-600 text-white rounded">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Neon Threads. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
