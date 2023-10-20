import React from 'react'



const Error = ({children}) => {
    return (
        <div className='bg-red-600 text-white text-center p-2 uppercase font-bold mb-3'>
            {children}
        </div>
    )
}

export default Error