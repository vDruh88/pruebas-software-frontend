'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchProducts } from '@/endpoints/clothe';
import Image from 'next/image';

interface Product {
  _id: number,
  name: string, 
  description: string, 
  price: number, 
  url_photo: string, 
  category: string, 
  clothe_type: string, 
  clothe_size: string, 
  clothe_color: string, 
  available_count: number
}

export default function TestPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Llamada a la API cuando el componente se monta
    fetchProducts()
      .then((response) => response.json())
      .then((data) => setProducts(data.message))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="flex flex-col bg-gray-900 text-white min-h-screen">
      <Navbar />

      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="bg-gray-800 p-4 rounded shadow-md">
                <Image src={product.url_photo} alt={product.name} width={400} height={400} className="rounded" />
                <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                <p className="mt-2 text-white">${product.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Neon Threads. Derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
