'use client'; // Indicar que es un Client Component

import { useState } from 'react';
import './style.css'; // Importa tus estilos personalizados

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      {/* Los spans necesarios para el efecto visual */}
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
      <div className="signin">
        {isLogin ? (
          <LoginForm onToggle={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggle={() => setIsLogin(true)} />
        )}
      </div>
    </section>
  );
}

function LoginForm({ onToggle }: { onToggle: () => void }) {
  return (
    <div className="content">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#5e5ad7]">Iniciar Sesión</h2>
      <form className="form">
        <div className="inputBox">
          <input type="text" id="loginUsername" className="custom-input" required />
          <i>Nombre de Usuario</i>
        </div>
        <div className="inputBox">
          <input type="password" id="loginPassword" className="custom-input" required />
          <i>Clave</i>
        </div>
        <p className="mt-4 text-center">
          ¿No tienes cuenta?{' '}
          <button type="button" className="text-[#5e5ad7] hover:underline" onClick={onToggle}>
            Registrarse
          </button>
        </p>
        <div className="inputBox">
          <input type="submit" value="Ingresar" className="custom-button" />
        </div>
      </form>
    </div>
  );
}

function RegisterForm({ onToggle }: { onToggle: () => void }) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const password = (document.getElementById('registerPassword') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes proceder con el envío del formulario si las contraseñas coinciden
    alert('Registro exitoso');
  };

  return (
    <div className="content">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#5e5ad7]">Crear Cuenta</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputBox">
          <input type="text" id="registerUsername" className="custom-input" required />
          <i>Nombre de Usuario</i>
        </div>
        <div className="inputBox">
          <input type="email" id="registerEmail" className="custom-input" required />
          <i>Correo</i>
        </div>
        <div className="inputBox">
          <input type="password" id="registerPassword" className="custom-input" required />
          <i>Contraseña</i>
        </div>
        <div className="inputBox">
          <input type="password" id="confirmPassword" className="custom-input" required />
          <i>Confirmar Contraseña</i>
        </div>
        <div className="inputBox">
          <input type="submit" value="Registrarse" className="custom-button" />
        </div>
        <p className="mt-4 text-center">
          ¿Ya tienes cuenta?{' '}
          <button type="button" className="text-[#5e5ad7] hover:underline" onClick={onToggle}>
            Iniciar Sesión
          </button>
        </p>
      </form>
    </div>
  );

}
