import React from 'react'

export const BoxSize = ({size}) => {
  return (
    <div>
        <div className=' h-14 w-14 bg-herring-silver flex justify-center items-center'>
            <span>{size}</span>
        </div>
    </div>
  )
}

export default BoxSize;