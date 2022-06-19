import React from 'react'
import ProductView from '../SectionProduct/ProductView'

import shoesJson from '../../data/zapato.json'

export const Home = () => {

  // const [shoes, setShoes] = useState(shoesJson);

  console.log(shoesJson)
  return (
    <div>
        <ProductView shoes={shoesJson[0]} />
    </div>
  )
}

export default Home