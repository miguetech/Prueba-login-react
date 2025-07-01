import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const PasswordInput = ({ password, setPassword, showPassword, setShowPassword }) => (
  <div>
    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
      Contraseña
    </label>
    <div className="relative">
      <input
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••••••••••••••••••••"
        className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        required
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
      >
        {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
      </button>
    </div>
  </div>
)

export default PasswordInput
