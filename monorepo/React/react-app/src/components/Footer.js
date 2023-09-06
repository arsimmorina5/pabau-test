import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full'>
      <div className='flex  justify-center bg-white  items-center h-14'>
        <p className='text-sm font-semibold text-gray-600 pr-1'>Powered By</p>
        <img src='img/pabau.png' alt='Pabau Logo' height={60} width={60}></img>
      </div>
    </div>
  )
}

export default Footer