import React from 'react'

const Alert = ({ children }) => {
  return (
    <div className="bg-red-600 fond uppercase text-center text-white p-3 mb-5 rounded">
            { children }
     </div>
  )
}

export default Alert