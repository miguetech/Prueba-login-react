import React from 'react'
import HeroImage from './components/HeroImage'
import Logo from './components/Logo'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image */}
      <HeroImage />
      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Logo />
          </div>
          {/* Form Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Inicia sesión en tu cuenta</h2>
            <p className="text-gray-600">¡Bienvenido de nuevo! Por favor, introduce tus datos.</p>
          </div>
          {/* Login Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default App
