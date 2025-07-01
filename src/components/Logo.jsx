import React from 'react'
import { MdFlightTakeoff } from 'react-icons/md'

const Logo = () => (
  <div className="flex items-center justify-center space-x-2 mb-8">
    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
      <MdFlightTakeoff className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-semibold text-blue-600">LOGOIPSUM</span>
  </div>
)

export default Logo
