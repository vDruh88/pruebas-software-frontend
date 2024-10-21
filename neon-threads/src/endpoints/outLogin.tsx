const BASE_URL = 'https://tu-backend-url.com/api'; // URL de tu API

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  
  if (!response.ok) {
    throw new Error('Error al obtener los productos');
  }
  
  return response.json();
}