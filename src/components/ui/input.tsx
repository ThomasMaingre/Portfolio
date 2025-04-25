import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="border rounded px-3 py-2 w-full bg-[#9a9a9b] text-white placeholder-white focus:outline-none"
      style={{ backgroundColor: '#9a9a9b', color: 'white', borderColor: '#9a9a9b' }}
    />
  )
}

