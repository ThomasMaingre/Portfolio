import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="border rounded px-3 py-2 w-full bg-[#9a9a9b] text-white placeholder-white focus:outline-none"
      style={{ backgroundColor: '#9a9a9b', color: 'white', placeholderColor: 'white', borderColor: '#9a9a9b !important' }}
    />
  )
}
