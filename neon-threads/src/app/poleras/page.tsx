'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function TestPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Llamada a la API cuando el componente se monta
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2">${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}
