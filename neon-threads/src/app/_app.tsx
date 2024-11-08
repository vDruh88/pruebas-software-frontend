// src/app/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext'; // Ajusta la ruta según tu estructura
import '../styles/globals.css'; // Importa tus estilos globales

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default MyApp;
