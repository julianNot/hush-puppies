import React from 'react'

export const Social = ({name}) => {
  return (
    <section> 
        <div className='flex flex-col justify-center items-center bg-herring-silver'>
            <h2 className='text-4xl font-serif text-paris-paving mt-6 mb-2 '>{ name }</h2>
            <div className="border-t-2 border-paris-paving w-32 text-center p-2 mb-4 space-x-2 pt-2">
              <a href="/#">
                <box-icon type='logo' name='facebook' color="#737374"></box-icon>
              </a>
              <a href="/#">
                <box-icon name='instagram-alt' type='logo' color="#737374" ></box-icon>
              </a>
            </div>
        </div>
    </section>
  )
}

export default Social
