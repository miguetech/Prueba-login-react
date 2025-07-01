import React from 'react'

const EmailInput = ({ email, setEmail }) => (
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
      Correo
    </label>
    <input
      id="email"
      name="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="example@mail.com"
      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      required
    />
  </div>
)

export default EmailInput
