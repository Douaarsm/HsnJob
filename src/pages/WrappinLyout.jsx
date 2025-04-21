import React from 'react'

function WrappinLyout({children}) {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
      {children}
    </div>
  )
}

export default WrappinLyout
