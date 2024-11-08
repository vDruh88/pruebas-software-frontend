"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function UserProfilePage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSaveProfile = () => {
        // Aquí puedes hacer la llamada a la API para guardar los datos del perfil
        console.log('Perfil guardado:', { name, address, phoneNumber, email });
        alert('Perfil guardado correctamente');
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
            <Navbar />
            <main className="flex-grow container mx-auto py-12">
                <h1 className="text-4xl font-bold mb-6">Perfil de Usuario</h1>
                <div className="mb-6 max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSaveProfile();
                        }}
                    >
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Nombre</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Dirección</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Número de Teléfono</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Gmail</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <footer className="bg-gray-800 text-white py-6 mt-auto">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Neon Threads. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
