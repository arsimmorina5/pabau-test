import React from 'react'

const Header = ({step}) => {
  
    return (
        <div className='flex flex-col justify-center items-center h-20 w-full'>
            <div>
                <h3 className="text-gray-600 font-bold leading-none">Choose Service</h3>
            </div>
            <div>
                <p className="text-gray-500 font-semibold " >Step {step}</p>
            </div>
        </div>
    )
}

export default Header

